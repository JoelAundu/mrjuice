import React, { useState } from 'react';
import ProfileSection from './ProfileSection';
import './TopNav.css';
import MenuItem from '../actionMenu/MenuItem';
import sidebarData from '../../sidebarData.json';

interface MenuItem {
  label: string;
  icon?: React.ReactNode;
  isActive?: boolean;
}

interface TopNavProps {
  className?: string;
  style?: React.CSSProperties;
}

const TopNav: React.FC<TopNavProps> = ({
  className = '',
  style = {},
}) => {
  const [defaultActiveIndex, setDefaultActiveIndex] = useState(0);

  return (
    <div className={`top-nav ${className}`} style={style}>
    <MenuItem
      items={sidebarData.topNavTabs}
      activeIndex={defaultActiveIndex}
      onItemClick={setDefaultActiveIndex}
    />
  <ProfileSection initials="PR" />
</div>
  );
};

export default TopNav;