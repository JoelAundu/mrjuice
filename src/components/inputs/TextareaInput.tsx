import React from "react";

interface TextareaInputProps {
  label?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  rows?: number;
  className?: string;
  textareaClassName?: string;
  labelClassName?: string;
  style?: React.CSSProperties;
  textareaStyle?: React.CSSProperties;
  labelStyle?: React.CSSProperties;
}

const TextareaInput = ({
  label = "",
  value = "",
  onChange,
  rows = 4,
  className = "",
  textareaClassName = "",
  labelClassName = "",
  style = {},
  textareaStyle = {},
  labelStyle = {},
}: TextareaInputProps) => {
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
      <textarea
        value={value}
        onChange={onChange}
        rows={rows}
        style={{
          width: "100%",
          padding: "8px",
          backgroundColor: "#f8fafc",
          borderRadius: "6px",
          border: "1px solid #cbd5e1",
          fontSize: "14px",
          fontWeight: 500,
          fontFamily: "'Inter', sans-serif",
          color: "#0f172a",
          resize: "vertical",
          ...textareaStyle,
        }}
        className={`w-full ${textareaClassName}`}
      />
    </div>
  );
};

export default TextareaInput;