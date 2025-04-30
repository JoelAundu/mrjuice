import React from "react";

interface IconButtonProps {
  iconSrc?: string; // URL for an image
  icon?: React.ReactNode; // Icon component (e.g., SVG)
  onClick: () => void;
  className?: string; // Additional classes for styling
  ariaLabel: string; // Accessibility label
}

const IconButton: React.FC<IconButtonProps> = ({
  iconSrc,
  icon,
  onClick,
  className = "",
  ariaLabel,
}) => {
  return (
    <button
      onClick={onClick}
      className={`w-8 h-8 p-[3px] bg-slate-200/50 rounded-full flex justify-center items-center ${className}`}
      aria-label={ariaLabel}
    >
      {iconSrc ? (
        <img src={iconSrc} alt={ariaLabel} className="w-5 h-5" />
      ) : (
        icon
      )}
    </button>
  );
};

export default IconButton;