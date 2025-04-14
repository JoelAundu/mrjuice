import React from "react";

interface CheckboxInputProps {
  label: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  className?: string;
  inputClassName?: string;
  labelClassName?: string;
  style?: React.CSSProperties;
  inputStyle?: React.CSSProperties;
  labelStyle?: React.CSSProperties;
}

const CheckboxInput = ({
  label,
  checked = false,
  onChange,
  className = "",
  inputClassName = "",
  labelClassName = "",
  style = {},
  inputStyle = {},
  labelStyle = {},
}: CheckboxInputProps) => {
  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "8px",
        ...style,
      }}
      className={`inline-flex ${className}`}
    >
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange?.(e.target.checked)}
        style={{
          width: "16px",
          height: "16px",
          accentColor: "#3b82f6",
          ...inputStyle,
        }}
        className={inputClassName}
      />
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
    </div>
  );
};

export default CheckboxInput;