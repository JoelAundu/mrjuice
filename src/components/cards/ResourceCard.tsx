import React from "react";

interface ResourceCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode; // For passing a React icon component
  iconSrc?: string; // For passing an image URL
  className?: string;
}

const ResourceCard: React.FC<ResourceCardProps> = ({
  title,
  description,
  icon,
  iconSrc,
  className = "",
}) => {
  return (
    <div
      data-property-1={title.replace(/\s+/g, "_")} // Convert title to snake_case for data-property-1
      className={`w-[300px] h-[375px] p-[30px] bg-slate-50 rounded-[20px] inline-flex flex-col justify-between items-start ${className}`}
    >
      <div className="self-stretch flex flex-col justify-start items-start gap-3.5">
        <div className="self-stretch flex flex-col justify-start items-start gap-3.5">
          {icon ? (
            icon // Render the React icon if provided
          ) : iconSrc ? (
            <img className="w-7 h-7" src={iconSrc} alt={`${title} icon`} />
          ) : (
            <div className="w-7 h-7 bg-gray-200 rounded-full" /> // Fallback placeholder
          )}
          <div className="self-stretch justify-center text-slate-900 text-xl font-medium font-['Inter']">
            {title}
          </div>
          <div className="self-stretch justify-start text-slate-500 text-xs font-normal font-['Inter']">
            {description}
          </div>
        </div>
      </div>
      <div className="inline-flex justify-center items-center gap-2.5">
        <div className="justify-start text-slate-500 text-sm font-semibold font-['Inter']">
          Download
        </div>
      </div>
    </div>
  );
};

export default ResourceCard;