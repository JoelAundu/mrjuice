import React from "react";
import "./FilterButton.css";

interface FilterButtonProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
  arrowSrc?: string; // URL for the arrow image
  arrowIcon?: React.ReactNode; // Arrow icon (e.g., SVG)
  className?: string; // Additional classes
}

export const FilterButton: React.FC<FilterButtonProps> = ({
  label,
  isActive,
  onClick,
  arrowSrc,
  arrowIcon,
  className = "",
}) => {
  const getStateClass = () =>
    isActive ? "filter-button-active" : "filter-button-inactive";

  return (
    <button
      onClick={onClick}
      className={`filter-button ${getStateClass()} ${className}`}
    >
      <div className="filter-button-label">{label}</div>
      {isActive && (arrowSrc || arrowIcon) && (
        <div className="filter-button-arrow-container">
          {arrowSrc ? (
            <img
              src={arrowSrc}
              alt="Arrow down"
              className="filter-button-arrow"
            />
          ) : (
            arrowIcon
          )}
        </div>
      )}
    </button>
  );
};

export default FilterButton;
