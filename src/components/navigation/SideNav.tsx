import React from "react";

interface SideNavProps {
  logo: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const SideNav: React.FC<SideNavProps> = ({
  logo,
  children,
  className = "",
  style = {},
}) => {
  // Split children into main content and footer
  const childrenArray = React.Children.toArray(children);
  const mainContent = childrenArray.slice(0, -1); // Everything except the last child
  const footer = childrenArray[childrenArray.length - 1]; // Last child (footer)

  return (
    <nav
      className={`side-nav ${className}`}
      style={{
        width: "280px",
        height: "100vh",
        padding: "20px 0",
        backgroundColor: "#f8fafc",
        borderRight: "1px solid #e2e8f0",
        display: "flex",
        flexDirection: "column",
        ...style,
      }}
    >
      {/* Main Content (Logo, Divider, Search, Menu Sections) */}
      <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <div style={{ paddingLeft: "20px", paddingTop: "5px" }}>{logo}</div>
          <div style={{ width: "100%", padding: "15px 0" }}>
            <div
              style={{
                width: "100%",
                height: "0",
                border: "1px solid #e2e8f0",
                outlineOffset: "-0.5px",
              }}
            ></div>
          </div>
        </div>
        {mainContent}
      </div>

      {/* Footer */}
      <div style={{ marginTop: "auto" }}>{footer}</div>
    </nav>
  );
};

export default SideNav;
