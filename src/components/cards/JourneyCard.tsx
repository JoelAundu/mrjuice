import React from "react";
import "./JourneyCard.css";

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

export const JourneyCard: React.FC<JourneyCardProps> = ({
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
  // Determine progress bar color class based on status
  const getProgressBarColorClass = () => {
    switch (status) {
      case "Completed":
        return "journey-card-progress-bar-completed";
      case "In Progress":
        return "journey-card-progress-bar-in-progress";
      case "Not Started":
      default:
        return "journey-card-progress-bar-not-started";
    }
  };

  return (
    <div className={`journey-card ${className}`}>
      {/* Top Section: Icon, Title, Description */}
      <div className="journey-card-top">
        {/* Icon */}
        <div className="journey-card-icon">{icon}</div>
        {/* Title and Description */}
        <div className="journey-card-text">
          <div className="journey-card-title">{title}</div>
          <div className="journey-card-description">{description}</div>
        </div>
      </div>
      {/* Bottom Section: Progress and CTA */}
      <div className="journey-card-bottom">
        {/* Show progress bar if progress is defined, otherwise show steps if defined */}
        {progress !== undefined ? (
          <div className="journey-card-progress">
            <div className="journey-card-progress-bar-bg">
              <div
                className={`journey-card-progress-bar-fill ${getProgressBarColorClass()}`}
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="journey-card-progress-text">{progress}%</div>
          </div>
        ) : steps ? (
          <div className="journey-card-progress">
            <div className="journey-card-progress-text">{steps}</div>
          </div>
        ) : null}
        {/* Status or CTA */}
        {status === "Completed" ? (
          <div className="journey-card-status">Completed</div>
        ) : ctaText ? (
          <button className="journey-card-cta" onClick={onCtaClick}>
            {ctaText}
          </button>
        ) : (
          <div className="journey-card-status">{status}</div>
        )}
      </div>
    </div>
  );
};

export default JourneyCard;
