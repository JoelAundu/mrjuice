import React, { useState } from "react";

interface UserAvatarProps {
  imageSrc?: string | null; // URL or local path, or null if no image
  initials: string; // Initials to display if no image (e.g., "PR")
  userName?: string; // Optional user name for better accessibility in alt text
  backgroundColor?: string; // Background color for the avatar
  size?: number; // Size of the avatar in pixels (default: 42px)
  className?: string; // Additional classes for customization
}

const UserAvatar: React.FC<UserAvatarProps> = ({
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
      className={`rounded-full flex justify-center items-center ${className}`}
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
          className="w-full h-full rounded-full object-cover"
          onError={() => setImageFailed(true)} // Fallback to initials if image fails
        />
      ) : (
        <div className="text-white text-sm font-medium font-['Inter']">
          {initials}
        </div>
      )}
    </div>
  );
};

export default UserAvatar;
