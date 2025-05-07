import React from "react";
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
  tabs: MenuItem[];
  activeIndex?: number; // Add prop to control active tab from parent
  onTabClick?: (index: number) => void; // Add prop to notify parent of tab clicks
}

export const TopNav: React.FC<TopNavProps> = ({
  className = "",
  style = {},
  tabs,
  activeIndex = 0, // Default to 0 if not provided
  onTabClick,
}) => {
  return (
    <div className={`top-nav ${className}`} style={style}>
      <MenuItem
        items={tabs}
        activeIndex={activeIndex}
        onItemClick={(index) => {
          if (onTabClick) {
            onTabClick(index); // Notify parent of the tab click with the index
          }
        }}
      />
      <ProfileSection initials="PR" />
    </div>
  );
};

export default TopNav;
