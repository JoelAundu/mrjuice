import React, { useState } from "react";
import "./UserAvatar.css";

interface UserAvatarProps {
  imageSrc?: string | null; // URL or local path, or null if no image
  initials: string; // Initials to display if no image (e.g., "PR")
  userName?: string; // Optional user name for better accessibility in alt text
  backgroundColor?: string; // Background color for the avatar
  size?: number; // Size of the avatar in pixels (default: 42px)
  className?: string; // Additional classes for customization
}

export const UserAvatar: React.FC<UserAvatarProps> = ({
  imageSrc,
  initials,
  userName,
  backgroundColor = "#d9d9d9",
  size = 42,
  className = "",
}) => {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <div
      className={`user-avatar ${className}`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        backgroundColor:
          imageSrc && !imageFailed ? "transparent" : backgroundColor,
      }}
    >
      {imageSrc && !imageFailed ? (
        <img
          src={imageSrc}
          alt={userName ? `${userName}'s avatar` : "User Avatar"}
          className="user-avatar-image"
          onError={() => setImageFailed(true)}
        />
      ) : (
        <div className="user-avatar-initials">{initials}</div>
      )}
    </div>
  );
};

export default UserAvatar;
