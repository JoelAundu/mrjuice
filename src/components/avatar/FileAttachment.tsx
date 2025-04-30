import React from "react";
import "./FileAttachment.css";

interface FileAttachmentProps {
  fileName: string; // Name of the file (e.g., "load_data_report.xls")
  fileType: string; // File extension (e.g., ".xls")
  fileSize: string; // File size (e.g., "2.35mb")
  className?: string; // Additional classes for customization
}

const FileAttachment: React.FC<FileAttachmentProps> = ({
  fileName,
  fileType,
  fileSize,
  className = "",
}) => {
  return (
    <div className={`file-attachment ${className}`}>
      <div className="file-attachment-info">
        {/* File Icon */}
        <div className="file-attachment-icon">
          <div className="file-attachment-icon-base" />
          <div className="file-attachment-icon-bottom" />
          <div className="file-attachment-icon-top" />
          <div className="file-attachment-icon-gradient" />
          <div className="file-attachment-icon-top-right" />
          <div className="file-attachment-icon-overlay" />
        </div>
        <div className="file-attachment-text">
          <div className="file-attachment-name">{fileName}</div>
          <div className="file-attachment-details">
            <div className="file-attachment-type">{fileType}</div>
            <div className="file-attachment-dot" />
            <div className="file-attachment-size">{fileSize}</div>
          </div>
        </div>
      </div>
      {/* Placeholder for Download Icon */}
      <div className="file-attachment-download" />
    </div>
  );
};

export default FileAttachment;
