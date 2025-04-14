import React from "react";

interface TextInputProps {
  placeholder?: string;
  label?: string;
  labelOutside?: boolean;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  inputClassName?: string;
  labelClassName?: string;
  style?: React.CSSProperties;
  inputStyle?: React.CSSProperties;
  labelStyle?: React.CSSProperties;
}

const TextInput = ({
  placeholder = "",
  label = "",
  labelOutside = false,
  value = "",
  onChange,
  className = "",
  inputClassName = "",
  labelClassName = "",
  style = {},
  inputStyle = {},
  labelStyle = {},
}: TextInputProps) => {
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
      <input
        type="text"
        placeholder={labelOutside ? placeholder : label || placeholder}
        value={value}
        onChange={onChange}
        style={{
          width: "100%",
          height: "39px",
          paddingLeft: "8px",
          paddingRight: "8px",
          backgroundColor: "#f8fafc",
          borderRadius: "6px",
          border: "1px solid #cbd5e1",
          fontSize: "14px",
          fontWeight: 500,
          fontFamily: "'Inter', sans-serif",
          color: "#0f172a",
          ...inputStyle,
        }}
        className={`w-full ${inputClassName}`}
      />
    </div>
  );
};

export default TextInput;