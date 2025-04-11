import React from "react";
import './Button.css';

type ButtonVariant = "primary" | "secondary" | "danger" | "slate" | "outline" | "ocean" | "coral" | "sky" | "storm" | "crimson" | "lime";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

export const Button = ({
  variant,
  size,
  children,
  className = "",
  onClick,
  disabled = false,
  type = "button",
  ...props
}: ButtonProps) => {
  const classes = [
    'button', // Base class for essential styles
    variant ? `button--${variant}` : '', // Variant-specific class
    size ? `button--${size}` : '', // Size-specific class
    disabled ? 'button--disabled' : '', // Disabled state class
    className, // User-provided classes (Tailwind or vanilla CSS)
  ].filter(Boolean).join(' ').trim();

  return (
    <button
      className={classes}
      onClick={onClick}
      disabled={disabled}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;