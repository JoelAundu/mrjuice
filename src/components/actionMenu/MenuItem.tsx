import React from 'react';

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

const MenuItem: React.FC<MenuItemProps> = ({
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
      className={`flex items-center space-x-4 ${className}`}
      style={style}
    >
      {items.map((item, index) => {
        const isActive = index === activeIndex;
        return (
           <button
            key={index}
            onClick={() => onItemClick(index)}
            className={`
              px-4 py-2 rounded-lg text-sm font-medium transition-colors
              ${buttonClassName}
              ${isActive 
                ? `bg-gray-200 shadow-sm text-gray-800 ${activeButtonClassName}` 
                : `text-gray-400 hover:text-gray-800 ${inactiveButtonClassName}`
              }
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