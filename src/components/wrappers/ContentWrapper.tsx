import React from "react";
import "./ContentWrapper.css";

interface ContentWrapperProps {
  title: string;
  description: string;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  titleClassName?: string;
  descriptionClassName?: string;
  contentClassName?: string;
  titleStyle?: React.CSSProperties;
  descriptionStyle?: React.CSSProperties;
  contentStyle?: React.CSSProperties;
}

export const ContentWrapper: React.FC<ContentWrapperProps> = ({
  title,
  description,
  children,
  className = "",
  style = {},
  titleClassName = "",
  descriptionClassName = "",
  contentClassName = "",
  titleStyle = {},
  descriptionStyle = {},
  contentStyle = {},
}) => {
  return (
    <div className={`content-wrapper ${className}`} style={style}>
      <div className="content-header">
        <div className={`content-title ${titleClassName}`} style={titleStyle}>
          {title}
        </div>
        <div
          className={`content-description ${descriptionClassName}`}
          style={descriptionStyle}
        >
          {description}
        </div>
      </div>
      <div className={`content-body ${contentClassName}`} style={contentStyle}>
        {children}
      </div>
    </div>
  );
};

export default ContentWrapper;
