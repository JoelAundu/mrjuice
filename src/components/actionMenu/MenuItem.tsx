import React from 'react';
import './MenuItem.css';

interface MenuItemItem {
  label: string;
}

interface MenuItemProps {
  items: MenuItemItem[];
  activeIndex: number;
  onItemClick: (index: number) => void;
  className?: string;
  buttonClassName?: string;
  activeButtonClassName?: string;
  inactiveButtonClassName?: string;
  style?: React.CSSProperties;
  buttonStyle?: React.CSSProperties;
  activeButtonStyle?: React.CSSProperties;
  inactiveButtonStyle?: React.CSSProperties;
}

export const MenuItem: React.FC<MenuItemProps> = ({
  items,
  activeIndex,
  onItemClick,
  className = '',
  buttonClassName = '',
  activeButtonClassName = '',
  inactiveButtonClassName = '',
  style = {},
  buttonStyle = {},
  activeButtonStyle = {},
  inactiveButtonStyle = {},
}) => {
  return (
    <nav
      className={`menu-item-container ${className}`}
      style={style}
    >
      {items.map((item, index) => {
        const isActive = index === activeIndex;
        return (
          <button
            key={index}
            onClick={() => onItemClick(index)}
            className={`
              menu-item-button
              ${isActive ? `menu-item-active ${activeButtonClassName}` : `menu-item-inactive ${inactiveButtonClassName}`}
              ${buttonClassName}
            `}
            style={{
              ...buttonStyle,
              ...(isActive ? activeButtonStyle : inactiveButtonStyle),
            }}
          >
            {item.label}
          </button>
        );
      })}
    </nav>
  );
};

export default MenuItem;