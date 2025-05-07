import React from "react";
import "./ProjectCard.css";

interface ProjectCardProps {
  id?: string; // Add id prop to match usage in SideNavShowcase
  title: string;
  address?: string;
  state?: string;
  image?: string;
  isCreateButton?: boolean;
  stateColor?: string;
  stateBgColor?: string;
  onCreateClick?: () => void;
  onClick?: (id: string) => void; // Update onClick to accept id parameter
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  id,
  title,
  address,
  state,
  image,
  isCreateButton = false,
  stateColor,
  stateBgColor,
  onCreateClick,
  onClick,
}) => {
  if (isCreateButton) {
    return (
      <button
        className="project-card project-card-create"
        onClick={onCreateClick}
      >
        <div className="create-icon-container">
          <div className="create-icon-plus" />
        </div>
        <span className="create-text">{title}</span>
      </button>
    );
  }

  return (
    <div
      className="project-card project-card-clickable"
      onClick={() => onClick && id && onClick(id)} // Pass the id to onClick
      style={{ cursor: "pointer" }} // Indicate the card is clickable
    >
      <div className="project-image-container">
        <img src={image} alt={title} className="project-image" />
        <div className="project-image-overlay" />
      </div>
      <div className="project-details">
        <div className="project-info">
          <div className="project-title">{title}</div>
          <div className="project-address">{address}</div>
        </div>
        {state && (
          <div
            className="project-state"
            style={{ backgroundColor: stateBgColor, color: stateColor }}
          >
            {state}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
