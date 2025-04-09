import React from "react";

export const Button = ({
  variant, // Optional: 'primary', 'secondary', 'danger', etc.
  size, // Optional: 'sm', 'md', 'lg', etc.
  children, // Required for content, but can be empty
  className = "", // Optional additional classes
  onClick, // Optional click handler
  disabled = false, // Optional disabled state
  type = "button", // Optional type: 'button', 'submit', 'reset'
  ...props // Catch-all for other HTML button attributes
}) => {
  // Base styles that every button should have (minimal and generic)
  const baseStyles =
    "inline-flex items-center justify-center font-semibold rounded focus:outline-none transition-colors";

  // Optional predefined variant styles (can be ignored if not needed)
  const variantStyles = {
    primary: "bg-blue-500 text-white hover:bg-blue-600 disabled:bg-blue-300",
    secondary:
      "bg-gray-200 text-gray-800 hover:bg-gray-300 disabled:bg-gray-100",
    danger: "bg-red-500 text-white hover:bg-red-600 disabled:bg-red-300",
  };

  // Optional predefined size styles (can be ignored if not needed)
  const sizeStyles = {
    sm: "px-2 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  // Conditionally apply variant and size styles only if provided and valid
  const appliedVariantStyles =
    variant && variantStyles[variant] ? variantStyles[variant] : "";
  const appliedSizeStyles = size && sizeStyles[size] ? sizeStyles[size] : "";

  // Combine all classes, ensuring no unnecessary spaces
  const classes =
    `${baseStyles} ${appliedVariantStyles} ${appliedSizeStyles} ${className}`.trim();

  return (
    <button
      className={classes}
      onClick={onClick}
      disabled={disabled}
      type={type}
      {...props} // Spread any additional props (e.g., id, aria-label, etc.)
    >
      {children}
    </button>
  );
};

export default Button;
