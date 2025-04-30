import React from "react";
import { EnhancedProject } from "../../types";
import "./ProjectSummaryCard.css";

interface ProjectSummaryCardProps {
  project: EnhancedProject;
  className?: string;
  leftClassName?: string;
  infoClassName?: string;
  titleClassName?: string;
  addressClassName?: string;
  detailsClassName?: string;
  stageClassName?: string;
  stageIcon?: React.ReactNode; // New prop for stage icon
  stageIconClassName?: string; // Renamed for the single stage icon
  stageTextClassName?: string;
  tagsClassName?: string;
  tagClassName?: string;
  tagTypeClassName?: string;
  tagStateClassName?: string;
  tagTextClassName?: string;
  progressClassName?: string;
  progressBarContainerClassName?: string;
  progressBarFilledClassName?: string;
  progressTextClassName?: string;
  rightClassName?: string;
  rightIcon?: React.ReactNode; // New prop for right icon
  rightIconClassName?: string; // Renamed for the single right icon
}

const ProjectSummaryCard: React.FC<ProjectSummaryCardProps> = ({
  project,
  className = "",
  leftClassName = "",
  infoClassName = "",
  titleClassName = "",
  addressClassName = "",
  detailsClassName = "",
  stageClassName = "",
  stageIcon,
  stageIconClassName = "",
  stageTextClassName = "",
  tagsClassName = "",
  tagClassName = "",
  tagTypeClassName = "",
  tagStateClassName = "",
  tagTextClassName = "",
  progressClassName = "",
  progressBarContainerClassName = "",
  progressBarFilledClassName = "",
  progressTextClassName = "",
  rightClassName = "",
  rightIcon,
  rightIconClassName = "",
}) => {
  // Dynamic styles for the state tag (e.g., "In Progress")
  const stateTagStyle = project.stateBgColor
    ? { backgroundColor: project.stateBgColor, color: project.stateColor }
    : {};

  return (
    <div className={`project-summary-card ${className}`}>
      <div className={`project-summary-card__left ${leftClassName}`}>
        <div className={`project-summary-card__info ${infoClassName}`}>
          <div className={`project-summary-card__title ${titleClassName}`}>
            {project.title}
          </div>
          <div className={`project-summary-card__address ${addressClassName}`}>
            {project.address || "Address not available"}
          </div>
        </div>
        <div className={`project-summary-card__details ${detailsClassName}`}>
          <div className={`project-summary-card__stage ${stageClassName}`}>
            {stageIcon && (
              <div
                className={`project-summary-card__stage-icon ${stageIconClassName}`}
              >
                {stageIcon}
              </div>
            )}
            <div
              className={`project-summary-card__stage-text ${stageTextClassName}`}
            >
              {`${project.stages.current}/${project.stages.total}`}
            </div>
          </div>
          <div className={`project-summary-card__tags ${tagsClassName}`}>
            <div
              className={`project-summary-card__tag project-summary-card__tag--state ${tagClassName} ${tagTypeClassName}`}
            >
              <div
                className={`project-summary-card__tag-text ${tagTextClassName}`}
              >
                {project.type}
              </div>
            </div>
            {project.state && (
              <div
                className={`project-summary-card__tag project-summary-card__tag--state ${tagClassName} ${tagStateClassName}`}
              >
                <div
                  className={`project-summary-card__tag-text ${tagTextClassName}`}
                  style={{ color: project.stateColor }}
                >
                  {project.state}
                </div>
              </div>
            )}
          </div>
          <div
            className={`project-summary-card__progress ${progressClassName}`}
          >
            <div
              className={`project-summary-card__progress-bar-container ${progressBarContainerClassName}`}
            >
              <div
                className={`project-summary-card__progress-bar-filled ${progressBarFilledClassName}`}
                style={{ width: `${project.progress}%` }}
              />
            </div>
            <div
              className={`project-summary-card__progress-text ${progressTextClassName}`}
            >
              {`${project.progress}%`}
            </div>
          </div>
        </div>
      </div>
      <div className={`project-summary-card__right ${rightClassName}`}>
        {rightIcon && (
          <div
            className={`project-summary-card__right-icon ${rightIconClassName}`}
          >
            {rightIcon}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectSummaryCard;
