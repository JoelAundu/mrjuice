import React, { useState } from 'react';
import './ProjectCard.css';

interface ProjectCardProps {
  title: string;
  address?: string;
  state?: string;
  image?: string;
  isCreateButton?: boolean;
  stateColor?: string;
  stateBgColor?: string;
  onCreateClick?: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  address,
  state,
  image,
  isCreateButton = false,
  stateColor,
  stateBgColor,
  onCreateClick,
}) => {
  if (isCreateButton) {
    return (
      <button className="project-card project-card-create" onClick={onCreateClick}>
        <div className="create-icon-container">
          <div className="create-icon-plus" />
        </div>
        <span className="create-text">{title}</span>
      </button>
    );
  }

  return (
    <div className="project-card">
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
          <div className="project-state" style={{ backgroundColor: stateBgColor, color: stateColor }}>
            {state}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;