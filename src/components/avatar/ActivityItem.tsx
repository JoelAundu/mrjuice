import React from "react";
import UserAvatar from "./UserAvatar";
import FileAttachment from "./FileAttachment";
import "./ActivityItem.css";

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
  };
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
    <div className={`activity-item ${className}`}>
      <UserAvatar
        imageSrc={userImageSrc}
        initials={userInitials}
        backgroundColor={userInitials === "PR" ? "#31abff" : "#d9d9d9"}
      />
      <div
        className={`activity-content-wrapper ${
          fileAttachment ? "activity-content-wrapper--with-attachment" : ""
        }`}
      >
        <div className="activity-text-container">
          <div
            className="activity-description"
            dangerouslySetInnerHTML={{ __html: description }}
          />
          <div className="activity-timestamp">{timestamp}</div>
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
