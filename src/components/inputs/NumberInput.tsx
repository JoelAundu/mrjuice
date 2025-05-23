import React from "react";

interface NumberInputProps {
  label?: string;
  value?: number;
  onChange?: (value: number) => void;
  min?: number;
  max?: number;
  className?: string;
  inputClassName?: string;
  labelClassName?: string;
  buttonClassName?: string;
  style?: React.CSSProperties;
  inputStyle?: React.CSSProperties;
  labelStyle?: React.CSSProperties;
  buttonStyle?: React.CSSProperties;
}

const NumberInput = ({
  label = "",
  value = 0,
  onChange,
  min = 0,
  max = 100,
  className = "",
  inputClassName = "",
  labelClassName = "",
  buttonClassName = "",
  style = {},
  inputStyle = {},
  labelStyle = {},
  buttonStyle = {},
}: NumberInputProps) => {
  const handleIncrement = () => {
    if (value < max) onChange?.(value + 1);
  };

  const handleDecrement = () => {
    if (value > min) onChange?.(value - 1);
  };

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "8px",
        ...style,
      }}
      className={`w-full ${className}`}
    >
      {label && (
        <label
          style={{
            fontSize: "14px",
            fontWeight: 500,
            fontFamily: "'Poppins', sans-serif",
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
          display: "inline-flex",
          alignItems: "center",
          gap: "4px",
        }}
      >
        <button
          type="button"
          onClick={handleDecrement}
          style={{
            width: "32px",
            height: "39px",
            backgroundColor: "#e5e7eb",
            borderRadius: "6px 0 0 6px",
            border: "1px solid #cbd5e1",
            borderRight: "none",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "16px",
            color: "#0f172a",
            ...buttonStyle,
          }}
          className={buttonClassName}
        >
          -
        </button>
        <input
          type="number"
          value={value}
          onChange={(e) => onChange?.(parseInt(e.target.value) || 0)}
          style={{
            width: "80px",
            height: "39px",
            paddingLeft: "8px",
            paddingRight: "8px",
            backgroundColor: "#f8fafc",
            borderRadius: "0",
            border: "1px solid #cbd5e1",
            fontSize: "14px",
            fontWeight: 500,
            fontFamily: "'Poppins', sans-serif",
            color: "#0f172a",
            textAlign: "center",
            ...inputStyle,
          }}
          className={inputClassName}
        />
        <button
          type="button"
          onClick={handleIncrement}
          style={{
            width: "32px",
            height: "39px",
            backgroundColor: "#e5e7eb",
            borderRadius: "0 6px 6px 0",
            border: "1px solid #cbd5e1",
            borderLeft: "none",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "16px",
            color: "#0f172a",
            ...buttonStyle,
          }}
          className={buttonClassName}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default NumberInput;