import React from "react";

interface InputProps {
  placeholder?: string;
  label?: string;
  labelOutside?: boolean;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  className?: string;
  inputClassName?: string;
  labelClassName?: string;
  iconClassName?: string;
  style?: React.CSSProperties;
  inputStyle?: React.CSSProperties;
  labelStyle?: React.CSSProperties;
  iconStyle?: React.CSSProperties;
}

const Input = ({
  placeholder = "",
  label = "",
  labelOutside = false,
  value = "",
  onChange,
  leftIcon,
  rightIcon,
  className = "",
  inputClassName = "",
  labelClassName = "",
  iconClassName = "",
  style = {},
  inputStyle = {},
  labelStyle = {},
  iconStyle = {},
}: InputProps) => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: labelOutside ? "column" : "row",
        alignItems: labelOutside ? "flex-start" : "center",
        gap: labelOutside ? "8px" : "0",
        ...style,
      }}
      className={`w-full ${className}`}
    >
      {labelOutside && label && (
        <label
          style={{
            fontSize: "14px",
            fontWeight: 500,
            fontFamily: "'Inter', sans-serif",
            color: "#64748b",
            ...labelStyle,
          }}
          className={labelClassName}
        >
          {label}
        </label>
      )}
      <div
        style={{
          width: "100%",
          height: "39px",
          paddingLeft: "8px",
          paddingRight: "8px",
          backgroundColor: "transparent",
          borderRadius: "6px",
          outline: "1px solid #cbd5e1",
          outlineOffset: "-1px",
          display: "inline-flex",
          justifyContent: "flex-start",
          alignItems: "center",
          gap: "6px",
          ...inputStyle,
        }}
        className={`w-full ${inputClassName}`}
      >
        {leftIcon && (
          <span
            style={{
              display: "flex",
              alignItems: "center",
              ...iconStyle,
            }}
            className={iconClassName}
          >
            {leftIcon}
          </span>
        )}
        <input
          type="text"
          placeholder={labelOutside ? placeholder : label || placeholder}
          value={value}
          onChange={onChange}
          style={{
            flex: 1,
            backgroundColor: "transparent",
            border: "none",
            outline: "none",
            fontSize: "14px",
            fontWeight: 500,
            fontFamily: "'Inter', sans-serif",
            color: "#64748b",
            opacity: 0.5,
            ...inputStyle,
          }}
          className={inputClassName}
        />
        {rightIcon && (
          <span
            style={{
              display: "flex",
              alignItems: "center",
              ...iconStyle,
            }}
            className={iconClassName}
          >
            {rightIcon}
          </span>
        )}
      </div>
    </div>
  );
};

export default Input;