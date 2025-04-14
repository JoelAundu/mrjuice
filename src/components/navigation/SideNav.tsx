import React, { useState } from "react";

interface SideNavProps {
  children: React.ReactNode;
  logo?: React.ReactNode;
  collapsedWidth?: string;
  expandedWidth?: string;
  className?: string;
  headerClassName?: string;
  contentClassName?: string;
  toggleClassName?: string;
  style?: React.CSSProperties;
  headerStyle?: React.CSSProperties;
  contentStyle?: React.CSSProperties;
  toggleStyle?: React.CSSProperties;
}

const SideNav = ({
  children,
  logo,
  collapsedWidth = "60px",
  expandedWidth = "240px",
  className = "",
  headerClassName = "",
  contentClassName = "",
  toggleClassName = "",
  style = {},
  headerStyle = {},
  contentStyle = {},
  toggleStyle = {},
}: SideNavProps) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div
      style={{
        width: isCollapsed ? collapsedWidth : expandedWidth,
        height: "100vh",
        backgroundColor: "#ffffff",
        boxShadow: "2px 0 5px rgba(0, 0, 0, 0.1)",
        display: "flex",
        flexDirection: "column",
        transition: "width 0.3s ease-in-out",
        ...style,
      }}
      className={`h-screen ${className}`}
    >
      {/* Header with Logo */}
      <div
        style={{
          padding: "16px",
          display: "flex",
          alignItems: "center",
          justifyContent: isCollapsed ? "center" : "space-between",
          borderBottom: "1px solid #e5e7eb",
          ...headerStyle,
        }}
        className={headerClassName}
      >
        {!isCollapsed && (logo || <div style={{ fontWeight: 700, fontSize: "18px" }}>SOLINK</div>)}
        <button
          style={{
            width: "32px",
            height: "32px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "transparent",
            border: "none",
            cursor: "pointer",
            ...toggleStyle,
          }}
          className={toggleClassName}
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          {isCollapsed ? "→" : "←"}
        </button>
      </div>

      {/* Content */}
      <div
        style={{
          flex: 1,
          padding: "16px",
          overflowY: "auto",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          ...contentStyle,
        }}
        className={contentClassName}
      >
        {children}
      </div>
    </div>
  );
};

export default SideNav;