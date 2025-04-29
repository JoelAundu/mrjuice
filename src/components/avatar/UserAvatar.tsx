import React from "react";

interface UserAvatarProps {
  imageSrc?: string; // URL for the user image (optional)
  initials: string; // Initials to display if no image (e.g., "PR")
  backgroundColor?: string; // Background color for the avatar
  size?: number; // Size of the avatar in pixels (default: 42px)
  className?: string; // Additional classes for customization
}

const UserAvatar: React.FC<UserAvatarProps> = ({
  imageSrc,
  initials,
  backgroundColor = "#d9d9d9",
  size = 42,
  className = "",
}) => {
  return (
    <div
      className={`rounded-full flex justify-center items-center ${className}`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        backgroundColor: imageSrc ? "transparent" : backgroundColor,
      }}
    >
      {imageSrc ? (
        <img
          src={imageSrc}
          alt="User Avatar"
          className="w-full h-full rounded-full object-cover"
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