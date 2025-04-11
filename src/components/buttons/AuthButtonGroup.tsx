import React from "react";

interface AuthButtonGroupProps {
  mode?: "dual" | "single"; // "dual" for Log in + Get Started, "single" for navigation button
  onLoginClick?: () => void;
  onGetStartedClick?: () => void;
  loginLabel?: string;
  getStartedLabel?: string;
  className?: string;
  loginClassName?: string;
  getStartedClassName?: string;
  showArrow?: boolean;
  arrowIconSrc?: string;
  arrowIconAlt?: string;
  arrowIconClassName?: string;
  circleBackgroundSrc?: string;
  circleBackgroundClassName?: string;
  containerBackground?: "white" | "dark"; // "white" for bg-white, "dark" for bg-[#1b1c1f]
  textSize?: "xs" | "sm" | "base"; // Tailwind text sizes
}

const AuthButtonGroup = ({
  mode = "dual",
  onLoginClick,
  onGetStartedClick,
  loginLabel = "Log in",
  getStartedLabel = "Get Started",
  className = "",
  loginClassName = "",
  getStartedClassName = "",
  showArrow = false,
  arrowIconSrc = "/assets/arrow-right-white.png",
  arrowIconAlt = "Arrow Right",
  arrowIconClassName = "w-5 h-5",
  circleBackgroundSrc,
  circleBackgroundClassName = "w-12 h-12",
  containerBackground = "white",
  textSize = "xs",
}: AuthButtonGroupProps) => {
  const containerBgClass = containerBackground === "white" ? "bg-white" : "bg-[#1b1c1f] hover:bg-gray-400";
  const textColorClass = containerBackground === "white" ? "text-[#1b1c1f] hover:text-gray-400" : "text-white";
  const getStartedBgClass = containerBackground === "white" ? "bg-[#1b1c1f] hover:bg-gray-400" : "bg-transparent";

  if (mode === "dual") {
    return (
      <div
        className={`pl-[25px] pr-1 py-1 ${containerBgClass} rounded-full flex items-center gap-6 w-56 ${className}`}
      >
        <div
          className={`w-[41px] ${textColorClass} text-${textSize} font-medium cursor-pointer ${loginClassName}`}
          onClick={onLoginClick}
        >
          {loginLabel}
        </div>
        <div
          className={`px-[25px] py-3 ${getStartedBgClass} rounded-full flex items-center gap-2.5 cursor-pointer ${getStartedClassName}`}
          onClick={onGetStartedClick}
        >
          <div className={`text-center ${containerBackground === "white" ? "text-white" : "text-[#1b1c1f] hover:text-gray-400"} text-${textSize} font-medium`}>
            {getStartedLabel}
          </div>
          {showArrow && (
            <div className="flex items-center">
              {circleBackgroundSrc && (
                <img
                  src={circleBackgroundSrc}
                  alt="Circle Background"
                  className={circleBackgroundClassName}
                />
              )}
              <img
                src={arrowIconSrc}
                alt={arrowIconAlt}
                className={`${circleBackgroundSrc ? "absolute" : ""} ${arrowIconClassName}`}
              />
            </div>
          )}
        </div>
      </div>
    );
  }

  // Single mode (navigation button with optional arrow)
  return (
    <div
      className={`w-full max-w-[264px] h-[58px] ${containerBgClass} rounded-full flex items-center justify-between px-6 relative cursor-pointer ${className}`}
      onClick={onGetStartedClick}
    >
      <span className={`text-${containerBackground === "white" ? "[#1b1c1f] hover:text-gray-400" : "white"} text-${textSize} font-medium`}>
        {getStartedLabel}
      </span>
      {showArrow && (
        <div className={`absolute right-2 flex items-center justify-center ${circleBackgroundClassName}`}>
          {circleBackgroundSrc && (
            <img
              src={circleBackgroundSrc}
              alt="Circle Background"
              className={circleBackgroundClassName}
            />
          )}
          <img
            src={arrowIconSrc}
            alt={arrowIconAlt}
            className={`${circleBackgroundSrc ? "absolute" : ""} ${arrowIconClassName}`}
          />
        </div>
      )}
    </div>
  );
};

export default AuthButtonGroup;