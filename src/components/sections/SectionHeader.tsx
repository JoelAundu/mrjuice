import React from 'react';
import './SectionHeader.css';

interface SectionHeaderProps {
  title: string;
  className?: string;
  style?: React.CSSProperties;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  className = '',
  style = {},
}) => {
  return (
    <div
      className={`section-header ${className}`}
      style={style}
    >
      <div>{title}</div>
    </div>
  );
};

export default SectionHeader;