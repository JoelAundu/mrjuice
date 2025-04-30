import React from "react";

interface ResourcesWrapperProps {
  title: string;
  description: string;
}

const ResourcesWrapper: React.FC<ResourcesWrapperProps> = ({
  title,
  description,
}) => {
  return (
    <div className="px-6 py-4 bg-white">
      <div className="self-stretch text-[#0A2540] text-xl font-medium font-['Inter']">
        {title}
      </div>
      <div className="self-stretch text-[#425A70] text-sm font-normal font-['Inter'] leading-tight mb-4">
        {description}
      </div>
      <div className="mt-4">
        <div className="bg-[#F7F8FA] p-6 rounded-[10px] shadow-sm">
          <h3 className="text-lg font-medium text-[#0A2540] mb-2">
            Project Resources
          </h3>
          <p className="text-sm text-[#425A70]">
            Placeholder for resources related to your project. (e.g., documents, links, files)
          </p>
          {/* In a real app, this could be a list of resources */}
          <div className="mt-4">
            <div className="flex items-center gap-3 p-3 bg-white rounded-md shadow-sm">
              <div className="w-6 h-6 bg-[#20a464] rounded" />
              <div>
                <div className="text-[#2d2d2d] text-sm font-semibold font-['Inter']">
                  project_docs.pdf
                </div>
                <div className="text-[#425A70] text-xs font-normal font-['Inter']">
                  No resources uploaded yet.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourcesWrapper;