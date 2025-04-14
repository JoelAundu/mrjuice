import React from "react";

interface MenuItem {
  label: string;
  icon?: React.ReactNode;
}

interface MenuListProps {
  items?: MenuItem[]; // Made items optional
  activeIndex?: number;
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
  onItemClick?: (index: number) => void;
}

const MenuList = ({
  items = [], // Default to empty array
  activeIndex = -1,
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
  onItemClick,
}: MenuListProps) => {
  // Check if items is not an array or is empty
  if (!Array.isArray(items) || items.length === 0) {
    return (
      <div
        style={{
          width: "100%",
          paddingLeft: "20px",
          paddingRight: "20px",
          display: "inline-flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          color: "#64748b",
          fontSize: "14px",
          fontFamily: "'Inter', sans-serif",
          ...style,
        }}
        className={`w-full ${className}`}
      >
        No items to display
      </div>
    );
  }

  return (
    <div
      style={{
        width: "100%",
        paddingLeft: "20px",
        paddingRight: "20px",
        display: "inline-flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        ...style,
      }}
      className={`w-full ${className}`}
    >
      {items.map((item, index) => {
        const isActive = index === activeIndex;
        return (
          <div
            key={index}
            style={{
              width: "100%",
              height: "39px",
              paddingLeft: "8px",
              paddingRight: "8px",
              backgroundColor: isActive ? "#e1e7ef" : "#f8fafc",
              borderRadius: "6px",
              display: "inline-flex",
              justifyContent: "flex-start",
              alignItems: "center",
              gap: "6px",
              marginBottom: index < items.length - 1 ? "8px" : "0",
              cursor: "pointer",
              ...itemStyle,
              ...(isActive ? activeItemStyle : inactiveItemStyle),
            }}
            className={`w-full ${itemClassName} ${
              isActive ? activeItemClassName : inactiveItemClassName
            }`}
            onClick={() => onItemClick && onItemClick(index)}
          >
            {item.icon && (
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  width: "18px",
                  height: "18px",
                  ...iconStyle,
                  ...(isActive ? activeIconStyle : inactiveIconStyle),
                }}
                className={`${iconClassName} ${
                  isActive ? activeIconClassName : inactiveIconClassName
                }`}
              >
                {item.icon}
              </span>
            )}
            <div
              style={{
                opacity: isActive ? 1 : 0.75,
                color: isActive ? "#0f172a" : "#64748b",
                fontSize: "14px",
                fontWeight: 500,
                fontFamily: "'Inter', sans-serif",
                ...labelStyle,
                ...(isActive ? activeLabelStyle : inactiveLabelStyle),
              }}
              className={`${labelClassName} ${
                isActive ? activeLabelClassName : inactiveLabelClassName
              }`}
            >
              {item.label}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MenuList;