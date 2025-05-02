import React from "react";

interface IconProps {
  strokeColor?: string;
  fillColor?: string; // For fill-based icons like ExcelIcon and DownloadIcon
  width?: string;
  height?: string;
  className?: string; // For custom CSS classes
  style?: React.CSSProperties; // For inline styles
  svgProps?: React.SVGProps<SVGSVGElement>; // For additional SVG attributes
}

export const ArrowDownIcon: React.FC<IconProps> = ({
  strokeColor = "#1F2A44",
  width = "10",
  height = "6",
  className = "",
  style,
  svgProps,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 10 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
      {...svgProps}
    >
      <path
        d="M1 1L5 5L9 1"
        stroke={strokeColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const PlusIcon: React.FC<IconProps> = ({
  strokeColor = "#1F2A44",
  width = "20",
  height = "20",
  className = "",
  style,
  svgProps,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
      {...svgProps}
    >
      <path
        d="M10 4V16M4 10H16"
        stroke={strokeColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const SearchIcon: React.FC<IconProps> = ({
  strokeColor = "#1F2A44",
  width = "20",
  height = "20",
  className = "",
  style,
  svgProps,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
      {...svgProps}
    >
      <path
        d="M17 17L13.2223 13.2223M15.5556 9.77778C15.5556 13.4364 12.6919 16.4444 9.11111 16.4444C5.53027 16.4444 2.66667 13.4364 2.66667 9.77778C2.66667 6.11914 5.53027 3.11111 9.11111 3.11111C12.6919 3.11111 15.5556 6.11914 15.5556 9.77778Z"
        stroke={strokeColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const SendIcon: React.FC<IconProps> = ({
  strokeColor = "#fff",
  width = "24",
  height = "24",
  className = "",
  style,
  svgProps,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
      {...svgProps}
    >
      <circle cx="12" cy="12" r="10" fill="#D9D9D9" />
      <path
        d="M12 16V8M12 8L8 12M12 8L16 12"
        stroke={strokeColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const GoogleDriveIcon: React.FC<IconProps> = ({
  width = "28",
  height = "28",
  className = "",
  style,
  svgProps,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
      {...svgProps}
    >
      <path
        d="M9.333 2.333L2.333 14H9.333L14 5.833L9.333 2.333Z"
        fill="#0066DA"
      />
      <path
        d="M14 5.833L21 14H9.333L14 5.833Z"
        fill="#00AC47"
      />
      <path
        d="M25.667 14L18.667 2.333H9.333L18.667 14H25.667Z"
        fill="#FFBA00"
      />
      <path
        d="M9.333 14L2.333 14L5.833 20.417L14 25.667L18.667 14H9.333Z"
        fill="#0066DA"
      />
      <path
        d="M18.667 14L25.667 14L22.167 20.417L14 25.667L18.667 14Z"
        fill="#00AC47"
      />
      <path
        d="M14 25.667L5.833 20.417H22.167L14 25.667Z"
        fill="#FFBA00"
      />
    </svg>
  );
};

export const ExcelIcon: React.FC<IconProps> = ({
  fillColor = "#217346",
  width = "24",
  height = "24",
  className = "",
  style,
  svgProps,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
      {...svgProps}
    >
      <rect width="24" height="24" rx="4" fill={fillColor}/>
      <path d="M6 6H18V18H6V6Z" fill="#FFFFFF"/>
      <path d="M8 9H12V11H10V13H8V9Z" fill={fillColor}/>
      <path d="M10 11H14V13H12V15H10V11Z" fill="#FFFFFF"/>
      <path d="M12 13H16V15H14V17H12V13Z" fill={fillColor}/>
    </svg>
  );
};

export const DownloadIcon: React.FC<IconProps> = ({
  fillColor = "#005FCC",
  strokeColor = "white",
  width = "24",
  height = "24",
  className = "",
  style,
  svgProps,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
      {...svgProps}
    >
      <circle cx="12" cy="12" r="10" fill={fillColor}/>
      <path
        d="M12 8V15M12 15L9 12M12 15L15 12"
        stroke={strokeColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};