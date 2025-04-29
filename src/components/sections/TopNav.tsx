import React, { useState } from "react";
import ProfileSection from "./ProfileSection";
import "./TopNav.css";
import MenuItem from "../actionMenu/MenuItem";

interface MenuItem {
  label: string;
  icon?: React.ReactNode;
  isActive?: boolean;
}

interface TopNavProps {
  className?: string;
  style?: React.CSSProperties;
  tabs: MenuItem[]; // Add tabs prop to specify menu items
}

const TopNav: React.FC<TopNavProps> = ({
  className = "",
  style = {},
  tabs, // Destructure the new tabs prop
}) => {
  const [defaultActiveIndex, setDefaultActiveIndex] = useState(0);

  return (
    <div className={`top-nav ${className}`} style={style}>
      <MenuItem
        items={tabs} // Use the tabs prop instead of sidebarData.topNavTabs
        activeIndex={defaultActiveIndex}
        onItemClick={setDefaultActiveIndex}
      />
      <ProfileSection initials="PR" />
    </div>
  );
};

export default TopNav;
