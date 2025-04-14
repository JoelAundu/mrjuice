import React from "react";

interface SelectOption {
  value: string;
  label: string;
}

interface SelectInputProps {
  label?: string;
  options: SelectOption[];
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
  selectClassName?: string;
  labelClassName?: string;
  style?: React.CSSProperties;
  selectStyle?: React.CSSProperties;
  labelStyle?: React.CSSProperties;
}

const SelectInput = ({
  label = "",
  options = [],
  value = "",
  onChange,
  className = "",
  selectClassName = "",
  labelClassName = "",
  style = {},
  selectStyle = {},
  labelStyle = {},
}: SelectInputProps) => {
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
            fontFamily: "'Inter', sans-serif",
            color: "#64748b",
            ...labelStyle,
          }}
          className={labelClassName}
        >
          {label}
        </label>
      )}
      <select
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
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
          ...selectStyle,
        }}
        className={`w-full ${selectClassName}`}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectInput;