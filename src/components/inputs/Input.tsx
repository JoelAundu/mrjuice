import React from "react";
import "./Input.css";

interface InputProps {
  label?: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
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

export const Input: React.FC<InputProps> = ({
  label,
  placeholder,
  value,
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
}) => {
  return (
    <div className={`input-container ${className}`} style={style}>
      <div className="input-wrapper">
        {leftIcon && (
          <div
            className={`input-icon input-icon-left ${iconClassName}`}
            style={iconStyle}
          >
            {leftIcon}
          </div>
        )}
        <input
          type="text"
          placeholder={placeholder || label}
          value={value}
          onChange={onChange}
          className={`input-field ${inputClassName}`}
          style={inputStyle}
        />
        {rightIcon && (
          <div
            className={`input-icon input-icon-right ${iconClassName}`}
            style={iconStyle}
          >
            {rightIcon}
          </div>
        )}
      </div>
    </div>
  );
};

export default Input;
