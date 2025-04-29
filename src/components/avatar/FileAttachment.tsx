import React from "react";

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
    <div
      className={`p-3 bg-white rounded-md outline outline-1 outline-offset-[-1px] outline-slate-300 inline-flex justify-between items-center gap-4 ${className}`}
    >
      <div className="flex justify-start items-start gap-2.5">
        {/* File Icon (Simplified for XLS) */}
        <div className="w-6 h-[33px] relative">
          <div className="w-6 h-[33px] left-0 top-0 absolute bg-[#20a464]" />
          <div className="w-6 h-[2.62px] left-0 top-[30.38px] absolute bg-[#149456]" />
          <div className="w-[15.38px] h-[2.62px] left-0 top-0 absolute bg-[#38ae74]" />
          <div className="w-[8.21px] h-[9px] left-[15.79px] top-[7.69px] absolute bg-gradient-to-l from-[#20a464] to-[#207e55]" />
          <div className="w-[9px] h-[9px] left-[15px] top-0 absolute bg-[#8ed1b1]" />
          <div className="w-3 h-[10.88px] left-[6px] top-[16.12px] absolute bg-white" />
        </div>
        <div className="inline-flex flex-col justify-start items-start gap-0.5">
          <div className="text-[#2d2d2d] text-sm font-semibold font-['Inter']">
            {fileName}
          </div>
          <div className="inline-flex justify-start items-center gap-1">
            <div className="text-slate-500 text-xs font-normal font-['Inter']">
              {fileType}
            </div>
            <div className="w-1 h-1 bg-slate-200 rounded-full" />
            <div className="text-slate-500 text-xs font-normal font-['Inter']">
              {fileSize}
            </div>
          </div>
        </div>
      </div>
      {/* Placeholder for Download Icon */}
      <div className="w-6 h-6 bg-[#d9d9d9]" />
    </div>
  );
};

export default FileAttachment;