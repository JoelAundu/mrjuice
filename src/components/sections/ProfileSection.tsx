import React from 'react';
import './ProfileSection.css';

interface ProfileSectionProps {
  initials: string;
  dropdownIcon?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const ProfileSection: React.FC<ProfileSectionProps> = ({
  initials,
  dropdownIcon = "v",
  className = '',
  style = {},
}) => {
  return (
    <div className={`profile-section ${className}`} style={style}>
      <div className="profile-button">
        <div className="profile-initials">{initials}</div>
      </div>
      <div className="profile-dropdown">
        {dropdownIcon}
      </div>
    </div>
  );
};

export default ProfileSection;