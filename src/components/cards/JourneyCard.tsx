import React from "react";

interface JourneyCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  status: "Completed" | "In Progress" | "Not Started";
  progress?: number; // Percentage (0-100) for progress bar
  steps?: string; // e.g., "4/4" for step-based progress
  ctaText?: string; // Text for the CTA button (optional)
  onCtaClick?: () => void; // Callback for the CTA button (optional)
  className?: string; // Custom class for styling
}

const JourneyCard: React.FC<JourneyCardProps> = ({
  icon,
  title,
  description,
  status,
  progress,
  steps,
  ctaText,
  onCtaClick,
  className = "",
}) => {
  // Determine progress bar color based on status
  const progressBarColor =
    status === "Completed"
      ? "bg-[#00C853]" // Green for completed (matching design)
      : status === "In Progress"
      ? "bg-[#FFB300]" // Yellow for in progress
      : "bg-gray-200"; // Gray for not started

  return (
    <div
      className={`min-w-[250px] min-h-[300px] p-6 bg-[#F7F8FA] rounded-[10px] flex flex-col justify-between items-start ${className}`}
    >
      {/* Top Section: Icon, Title, Description */}
      <div className="self-stretch flex flex-col justify-start items-start gap-4">
        {/* Icon */}
        <div className="w-8 h-8 flex justify-center items-center">{icon}</div>
        {/* Title and Description */}
        <div className="self-stretch flex flex-col justify-start items-start gap-2">
          <div className="self-stretch text-[#0A2540] text-lg font-medium font-['Inter']">
            {title}
          </div>
          <div className="self-stretch text-[#425A70] text-xs font-normal font-['Inter']">
            {description}
          </div>
        </div>
      </div>
      {/* Bottom Section: Progress and CTA */}
      <div className="flex flex-col justify-center items-start gap-6">
        {/* Show progress bar if progress is defined, otherwise show steps if defined */}
        {progress !== undefined ? (
          <div className="inline-flex justify-start items-center gap-2">
            <div className="w-40 h-1 bg-gray-200 rounded-full overflow-hidden">
              <div
                className={`h-1 ${progressBarColor} rounded-full transition-all duration-300`}
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="text-[#425A70] text-xs font-normal font-['Inter']">
              {progress}%
            </div>
          </div>
        ) : steps ? (
          <div className="inline-flex justify-start items-center gap-2">
            <div className="text-[#425A70] text-xs font-normal font-['Inter']">
              {steps}
            </div>
          </div>
        ) : null}
        {/* Status or CTA */}
        {status === "Completed" ? (
          <div className="text-[#425A70] text-sm font-semibold font-['Inter']">
            Completed
          </div>
        ) : ctaText ? (
          <button
            className="text-[#0052CC] text-sm font-semibold font-['Inter'] hover:underline transition-all"
            onClick={onCtaClick}
          >
            {ctaText}
          </button>
        ) : (
          <div className="text-[#425A70] text-sm font-semibold font-['Inter']">
            {status}
          </div>
        )}
      </div>
    </div>
  );
};

export default JourneyCard;