import React from "react";
import "./IconButton.css";

interface IconButtonProps {
  iconSrc?: string; // URL for an image
  icon?: React.ReactNode; // Icon component (e.g., SVG)
  onClick: () => void;
  className?: string; // Additional classes for styling
  ariaLabel: string; // Accessibility label
}

export const IconButton: React.FC<IconButtonProps> = ({
  iconSrc,
  icon,
  onClick,
  className = "",
  ariaLabel,
}) => {
  return (
    <button
      onClick={onClick}
      className={`icon-button ${className}`}
      aria-label={ariaLabel}
    >
      {iconSrc ? (
        <img src={iconSrc} alt={ariaLabel} className="icon-button-image" />
      ) : (
        icon
      )}
    </button>
  );
};

export default IconButton;
