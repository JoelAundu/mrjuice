import React from "react";
import UserAvatar from "./UserAvatar";
import FileAttachment from "./FileAttachment";

interface ActivityItemProps {
  userImageSrc?: string; // URL for the user image (optional)
  userInitials: string; // User initials (e.g., "PR")
  userName: string; // User name (e.g., "David Raphael")
  description: string; // Activity description (HTML string with spans for styling)
  timestamp: string; // Timestamp (e.g., "Monday 17:41")
  fileAttachment?: {
    fileName: string;
    fileType: string;
    fileSize: string;
  }; // Optional file attachment details
  className?: string; // Additional classes for customization
}

const ActivityItem: React.FC<ActivityItemProps> = ({
  userImageSrc,
  userInitials,
  userName,
  description,
  timestamp,
  fileAttachment,
  className = "",
}) => {
  return (
    <div
      className={`inline-flex justify-start items-start gap-3.5 ${className}`}
    >
      <UserAvatar
        imageSrc={userImageSrc}
        initials={userInitials}
        backgroundColor={userInitials === "PR" ? "#31abff" : "#d9d9d9"}
      />
      <div
        className={`flex flex-col justify-start items-start gap-3.5 ${
          fileAttachment ? "w-[348px]" : ""
        }`}
      >
        <div className="flex flex-col justify-start items-start gap-1">
          <div
            className="text-[#2d2d2d] text-sm font-normal font-['Inter']"
            dangerouslySetInnerHTML={{ __html: description }}
          />
          <div className="text-slate-500 text-xs font-normal font-['Inter']">
            {timestamp}
          </div>
        </div>
        {fileAttachment && (
          <FileAttachment
            fileName={fileAttachment.fileName}
            fileType={fileAttachment.fileType}
            fileSize={fileAttachment.fileSize}
          />
        )}
      </div>
    </div>
  );
};

export default ActivityItem;