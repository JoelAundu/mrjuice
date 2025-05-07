import React from "react";
import "./ResourceCard.css";

interface ResourceCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode; // For passing a React icon component
  iconSrc?: string; // For passing an image URL
  className?: string;
}

export const ResourceCard: React.FC<ResourceCardProps> = ({
  title,
  description,
  icon,
  iconSrc,
  className = "",
}) => {
  return (
    <div
      data-property-1={title.replace(/\s+/g, "_")}
      className={`resource-card ${className}`}
    >
      <div className="resource-card-top">
        <div className="resource-card-inner">
          {icon ? (
            icon
          ) : iconSrc ? (
            <img
              className="resource-card-icon"
              src={iconSrc}
              alt={`${title} icon`}
            />
          ) : (
            <div className="resource-card-placeholder" />
          )}
          <div className="resource-card-title">{title}</div>
          <div className="resource-card-description">{description}</div>
        </div>
      </div>
      <div className="resource-card-bottom">
        <div className="resource-card-download">Download</div>
      </div>
    </div>
  );
};

export default ResourceCard;
