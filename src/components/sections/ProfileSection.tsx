import React from "react";
import "./ProfileSection.css";
import { ArrowDownIcon } from "../icons/Icons";

interface ProfileSectionProps {
  initials: string;
  dropdownIcon?: string | React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const ProfileSection: React.FC<ProfileSectionProps> = ({
  initials,
  dropdownIcon = (
    <ArrowDownIcon
      strokeColor="#1F2A44"
      width="10"
      height="6"
      className="dropdown-arrow"
      style={{ marginLeft: "2px" }}
      svgProps={{ strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }}
    />
  ),
  className = "",
  style = {},
}) => {
  return (
    <div className={`profile-section ${className}`} style={style}>
      <div className="profile-button">
        <div className="profile-initials">{initials}</div>
      </div>
      <div className="profile-dropdown">
        {typeof dropdownIcon === "string" ? (
          <img src={dropdownIcon} alt="Dropdown icon" className="dropdown-icon" />
        ) : (
          dropdownIcon
        )}
      </div>
    </div>
  );
};

export default ProfileSection;