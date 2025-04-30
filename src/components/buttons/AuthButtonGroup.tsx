import React from "react";
import "./AuthButtonGroup.css";

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
  textSize?: "xs" | "sm" | "base"; // Text sizes
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
  arrowIconClassName = "",
  circleBackgroundSrc,
  circleBackgroundClassName = "",
  containerBackground = "white",
  textSize = "xs",
}: AuthButtonGroupProps) => {
  // Helper functions to determine dynamic classes
  const getContainerBgClass = () =>
    containerBackground === "white"
      ? "auth-button-group-bg-white"
      : "auth-button-group-bg-dark";

  const getTextColorClass = () =>
    containerBackground === "white"
      ? "auth-button-group-login-text-dark"
      : "auth-button-group-login-text-white";

  const getGetStartedBgClass = () =>
    containerBackground === "white"
      ? "auth-button-group-get-started-bg-dark"
      : "auth-button-group-get-started-bg-transparent";

  const getGetStartedTextClass = () =>
    containerBackground === "white"
      ? "auth-button-group-text-white"
      : "auth-button-group-text-dark-flex";

  const getTextSizeClass = () => {
    switch (textSize) {
      case "sm":
        return "auth-button-group-text-sm";
      case "base":
        return "auth-button-group-text-base";
      case "xs":
      default:
        return "auth-button-group-text-xs";
    }
  };

  if (mode === "dual") {
    return (
      <div
        className={`auth-button-group-dual ${getContainerBgClass()} ${className}`}
      >
        <div
          className={`auth-button-group-login ${getTextColorClass()} ${getTextSizeClass()} ${loginClassName}`}
          onClick={onLoginClick}
        >
          {loginLabel}
        </div>
        <div
          className={`auth-button-group-get-started ${getGetStartedBgClass()} ${getStartedClassName}`}
          onClick={onGetStartedClick}
        >
          <div
            className={`auth-button-group-text-center ${getGetStartedTextClass()} ${getTextSizeClass()}`}
          >
            {getStartedLabel}
          </div>
          {showArrow && (
            <div className="auth-button-group-arrow-container">
              {circleBackgroundSrc && (
                <img
                  src={circleBackgroundSrc}
                  alt="Circle Background"
                  className={`auth-button-group-circle-bg ${circleBackgroundClassName}`}
                />
              )}
              <img
                src={arrowIconSrc}
                alt={arrowIconAlt}
                className={`auth-button-group-arrow ${
                  circleBackgroundSrc ? "auth-button-group-arrow-absolute" : ""
                } ${arrowIconClassName}`}
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
      className={`auth-button-group-single ${getContainerBgClass()} ${className}`}
      onClick={onGetStartedClick}
    >
      <span className={`${getTextColorClass()} ${getTextSizeClass()}`}>
        {getStartedLabel}
      </span>
      {showArrow && (
        <div
          className={`auth-button-group-arrow-container-single auth-button-group-circle-bg ${circleBackgroundClassName}`}
        >
          {circleBackgroundSrc && (
            <img
              src={circleBackgroundSrc}
              alt="Circle Background"
              className={`auth-button-group-circle-bg ${circleBackgroundClassName}`}
            />
          )}
          <img
            src={arrowIconSrc}
            alt={arrowIconAlt}
            className={`auth-button-group-arrow ${
              circleBackgroundSrc ? "auth-button-group-arrow-absolute" : ""
            } ${arrowIconClassName}`}
          />
        </div>
      )}
    </div>
  );
};

export default AuthButtonGroup;
