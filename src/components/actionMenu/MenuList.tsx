import React from "react";

interface MenuItem {
  label: string;
  icon?: React.ReactNode;
  isActive?: boolean;
}

interface MenuListProps {
  items: MenuItem[];
  activeIndex?: number;
  onItemClick?: (index: number) => void;
  className?: string;
  itemClassName?: string;
  labelClassName?: string;
  iconClassName?: string;
  activeItemClassName?: string;
  inactiveItemClassName?: string;
  activeLabelClassName?: string;
  inactiveLabelClassName?: string;
  activeIconClassName?: string;
  inactiveIconClassName?: string;
  style?: React.CSSProperties;
  itemStyle?: React.CSSProperties;
  labelStyle?: React.CSSProperties;
  iconStyle?: React.CSSProperties;
  activeItemStyle?: React.CSSProperties;
  inactiveItemStyle?: React.CSSProperties;
  activeLabelStyle?: React.CSSProperties;
  inactiveLabelStyle?: React.CSSProperties;
  activeIconStyle?: React.CSSProperties;
  inactiveIconStyle?: React.CSSProperties;
}

const MenuList: React.FC<MenuListProps> = ({
  items,
  activeIndex = -1,
  onItemClick,
  className = "",
  itemClassName = "",
  labelClassName = "",
  iconClassName = "",
  activeItemClassName = "",
  inactiveItemClassName = "",
  activeLabelClassName = "",
  inactiveLabelClassName = "",
  activeIconClassName = "",
  inactiveIconClassName = "",
  style = {},
  itemStyle = {},
  labelStyle = {},
  iconStyle = {},
  activeItemStyle = {},
  inactiveItemStyle = {},
  activeLabelStyle = {},
  inactiveLabelStyle = {},
  activeIconStyle = {},
  inactiveIconStyle = {},
}) => {
  return (
    <div
      className={`menu-list ${className}`}
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        gap: "2px",
        ...style,
      }}
    >
      {items.map((item, index) => {
        const isActive =
          item.isActive !== undefined ? item.isActive : index === activeIndex;
        const hasIcon = !!item.icon;

        return (
          <button
            key={index}
            onClick={() => onItemClick && onItemClick(index)}
            className={`menu-item ${itemClassName} ${
              isActive
                ? `menu-item-active ${activeItemClassName}`
                : `menu-item-inactive ${inactiveItemClassName}`
            }`}
            style={{
              width: "100%",
              height: "39px",
              padding: "0 8px",
              borderRadius: "6px",
              display: "inline-flex",
              justifyContent: "flex-start",
              alignItems: "center", // Ensure vertical centering
              gap: "6px",
              backgroundColor: isActive ? "#e1e7ef" : "#f8fafc",
              ...itemStyle,
              ...(isActive ? activeItemStyle : inactiveItemStyle),
            }}
          >
            {hasIcon && (
              <div
                className={`menu-icon ${
                  isActive ? activeIconClassName : inactiveIconClassName
                }`}
                style={{
                  width: "15px",
                  height: "15px",
                  color: "#0f172a",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  ...iconStyle,
                  ...(isActive ? activeIconStyle : inactiveIconStyle),
                }}
              >
                {item.icon}
              </div>
            )}
            <div
              className={`menu-label ${labelClassName} ${
                isActive
                  ? `menu-label-active ${activeLabelClassName}`
                  : `menu-label-inactive ${inactiveLabelClassName}`
              }`}
              style={{
                display: "flex",
                alignItems: "center", // Ensure label is vertically centered
                fontSize: "14px",
                fontFamily: "'Inter', sans-serif",
                fontWeight: 500,
                color: isActive ? "#0f172a" : "#64748b",
                opacity: isActive ? 1 : 0.75,
                ...labelStyle,
                ...(isActive ? activeLabelStyle : inactiveLabelStyle),
              }}
            >
              {item.label}
            </div>
          </button>
        );
      })}
    </div>
  );
};

export default MenuList;
