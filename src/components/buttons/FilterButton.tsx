import React from "react";

interface FilterButtonProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
  arrowSrc?: string; // URL for the arrow image
  arrowIcon?: React.ReactNode; // Arrow icon (e.g., SVG)
  className?: string; // Additional classes
}

const FilterButton: React.FC<FilterButtonProps> = ({
  label,
  isActive,
  onClick,
  arrowSrc,
  arrowIcon,
  className = "",
}) => {
  return (
    <button
      onClick={onClick}
      className={`h-[39px] px-3.5 rounded-[100px] flex justify-start items-center gap-1 ${
        isActive
          ? "bg-slate-900 text-white"
          : "bg-white outline outline-1 outline-offset-[-1px] outline-slate-200 text-slate-900"
      } ${className}`}
    >
      <div className="justify-center text-sm font-medium font-['Inter']">
        {label}
      </div>
      {isActive && (arrowSrc || arrowIcon) && (
        <div className="w-5 h-5 flex justify-center items-center">
          {arrowSrc ? (
            <img src={arrowSrc} alt="Arrow down" className="w-2.5 h-2.5" />
          ) : (
            arrowIcon
          )}
        </div>
      )}
    </button>
  );
};

export default FilterButton;