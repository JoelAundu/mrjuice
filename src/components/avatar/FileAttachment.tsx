import React from "react";
import { ExcelIcon, DownloadIcon } from "../icons/Icons"; // Adjust the import path as needed
import "./FileAttachment.css";

interface FileAttachmentProps {
  fileName: string; // Name of the file (e.g., "load_data_report.xls")
  fileType: string; // File extension (e.g., ".xls")
  fileSize: string; // File size (e.g., "2.35mb")
  className?: string; // Additional classes for customization
  icon?: React.ReactNode; // Custom icon component (optional)
  iconSrc?: string; // Custom icon image URL (optional)
}

const FileAttachment: React.FC<FileAttachmentProps> = ({
  fileName,
  fileType,
  fileSize,
  className = "",
  icon,
  iconSrc,
}) => {
  return (
    <div className={`file-attachment ${className}`}>
      <div className="file-attachment-info">
        {/* File Icon */}
        <div className="file-attachment-icon">
          {icon || (iconSrc ? <img src={iconSrc} alt={`${fileName} icon`} /> : <ExcelIcon />)}
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
      {/* Download Icon */}
      <div className="file-attachment-download" aria-label="Download file" title="Download">
        <DownloadIcon />
      </div>
    </div>
  );
};

export default FileAttachment;