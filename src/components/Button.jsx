// src/components/Button.jsx
import React from 'react';

export const Button = ({ variant = 'primary', size = 'md', children, ...props }) => {
  const baseStyles = 'font-semibold rounded focus:outline-none';
  const variantStyles = {
    primary: 'bg-blue-500 text-white hover:bg-blue-600',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
    danger: 'bg-red-500 text-white hover:bg-red-600',
  };
  const sizeStyles = {
    sm: 'px-2 py-1 text-sm',
    md: 'px-4 py-2',
    lg: 'px-6 py-3 text-lg',
  };

  const classes = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]}`;

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};

export default Button;