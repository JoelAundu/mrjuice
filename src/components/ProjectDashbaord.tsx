import React, { useState, useEffect } from "react";
import SideNav from "./navigation/SideNav";
import MenuList from "./actionMenu/MenuList";
import SectionHeader from "./sections/SectionHeader";
import TopNav from "./sections/TopNav";
import sidebarData from "../sidebarData.json";
import Input from "./inputs/Input";
import ContentWrapper from "./wrappers/ContentWrapper";
import WarningBanner from "./cards/WarningBanner";
import ProjectSummaryCard from "./cards/ProjectInfo";
import JourneyCard from "./cards/JourneyCard";
import ActivityItem from "./avatar/ActivityItem";
import MenuItem from "./actionMenu/MenuItem";
import MessagesWrapper from "./wrappers/MessagesWrapper";
import ResourcesWrapper from "./wrappers/Resourceswrapper";
import { SidebarData, EnhancedProject } from "../types";

// Placeholder icons (can be replaced with react-icons)
const SearchIcon = () => <span>🔍</span>;
const CardIcon = () => <span>💳</span>;
const MenuDotsIcon = () => <span>⋮</span>;
const SiteIcon = () => <span>📍</span>;
const ReviewIcon = () => <span>💬</span>;
const FeasibilityIcon = () => <span>⭐</span>;
const BidderIcon = () => <span>🤝</span>;

interface ProjectDashboardProps {
  projectId: string;
  onBackToHome: () => void;
}

// Type assertion to ensure sidebarData matches SidebarData type
const typedSidebarData = sidebarData as SidebarData;

const ProjectDashboard: React.FC<ProjectDashboardProps> = ({
  projectId,
  onBackToHome,
}) => {
  const [projectMenuIndex, setProjectMenuIndex] = useState(0);
  const [searchValue, setSearchValue] = useState("");
  const [activeFilterIndex, setActiveFilterIndex] = useState(0);
  const [activeTabIndex, setActiveTabIndex] = useState(0); // Track the active tab by index

  // Find the selected project, excluding "Create New Project"
  const project = typedSidebarData.projects.find(
    (p) => p.id === projectId && !p.isCreateButton
  );
  if (!project) {
    return <div>Project not found</div>;
  }

  // Enhance project with state styling from sidebarData.json
  const enhancedProject: EnhancedProject = {
    ...project,
    stateColor: typedSidebarData.states[project.state!]?.color || "",
    stateBgColor: typedSidebarData.states[project.state!]?.bgColor || "",
    progress: project.progress!,
    type: project.type!,
    stages: project.stages!,
  };

  // Determine if the warning banner should be visible
  const showWarningBanner = ["In Progress", "On Hold"].includes(project.state || "");

  // Log when the warning banner is visible (for tracking purposes)
  useEffect(() => {
    if (showWarningBanner) {
      console.log(`WarningBanner is visible for project ${projectId} (state: ${project.state})`);
    }
  }, [showWarningBanner, projectId, project.state]);

  // Handle project menu item click
  const handleProjectMenuClick = (index: number) => {
    setProjectMenuIndex(index);
  };

  // Handle clicks on "Home" or other sections
  const handleMenuItemClick = (sectionIndex: number, itemIndex: number) => {
    if (
      sectionIndex === 0 &&
      typedSidebarData.menuSections[0].items[itemIndex].label === "Home"
    ) {
      onBackToHome();
    }
  };

  // Handle tab clicks
  const handleTabClick = (index: number) => {
    setActiveTabIndex(index);
  };

  // Define TopNav tabs for ProjectDashboard
  const topNavTabs = [
    { label: "Dashboard" },
    { label: "Messages" },
    { label: "Resources" },
  ];

  // Map activeTabIndex to the corresponding tab label for conditional rendering
  const activeTab = topNavTabs[activeTabIndex].label;

  // Define filter items for Activity section
  const filterItems = [
    { label: "All Activity", isActive: true },
    { label: "Last Week", isActive: false },
    { label: "Last 30 Days", isActive: false },
    { label: "Last 3 Months", isActive: false },
  ];

  // Handle filter button clicks and implement filtering logic
  const handleFilterClick = (index: number) => {
    setActiveFilterIndex(index);
    console.log(`Filter changed to: ${filterItems[index].label}`);
  };

  // Filter activities based on the selected filter
  const currentDate = new Date("2025-04-29"); // Current date (April 29, 2025)
  const filteredActivities = (project.activities || []).filter((activity) => {
    const activityDate = new Date(activity.date);
    const timeDiff = currentDate.getTime() - activityDate.getTime();
    const daysDiff = timeDiff / (1000 * 3600 * 24);

    switch (filterItems[activeFilterIndex].label) {
      case "Last Week":
        return daysDiff <= 7;
      case "Last 30 Days":
        return daysDiff <= 30;
      case "Last 3 Months":
        return daysDiff <= 90;
      case "All Activity":
      default:
        return true;
    }
  });

  // Calculate section start indices for non-project sections
  let currentIndex = 0;
  const sectionIndices = [
    typedSidebarData.menuSections[0],
    {
      title: project.title.toUpperCase(),
      items: project.sideNav?.menuItems || [],
    },
    typedSidebarData.menuSections[2],
  ].map((section) => {
    const startIndex = currentIndex;
    currentIndex += section.items.length;
    return startIndex;
  });
  const footerStartIndex = currentIndex;

  // Map icons to journey steps
  const iconMap: { [key: string]: React.ReactNode } = {
    "📍": <SiteIcon />,
    "💬": <ReviewIcon />,
    "⭐": <FeasibilityIcon />,
    "🤝": <BidderIcon />,
  };

  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden">
      <SideNav
        logo={
          <div style={{ fontWeight: 700, fontSize: "18px", color: "black" }}>
            {typedSidebarData.logo.text}
          </div>
        }
      >
        {/* Search Input */}
        <div className="px-5">
          <Input
            label={typedSidebarData.search.label}
            placeholder={typedSidebarData.search.placeholder}
            leftIcon={<SearchIcon />}
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </div>

        {/* Menu Sections */}
        {[
          {
            ...typedSidebarData.menuSections[0],
            items: typedSidebarData.menuSections[0].items.map((item) => ({
              ...item,
              isActive: false,
            })),
          },
          {
            title: project.title.toUpperCase(),
            items:
              project.sideNav?.menuItems.map((item, index) => ({
                ...item,
                isActive: projectMenuIndex === index,
              })) || [],
          },
          typedSidebarData.menuSections[2],
        ].map((section, sectionIndex) => (
          <div
            key={sectionIndex}
            className="px-5"
            style={{ marginTop: sectionIndex > 0 ? "16px" : "0" }}
          >
            {section.title && <SectionHeader title={section.title} />}
            <MenuList
              items={section.items}
              activeIndex={
                sectionIndex === 1
                  ? projectMenuIndex
                  : section.items.findIndex((item) => item.isActive)
              }
              onItemClick={(index) =>
                sectionIndex === 1
                  ? handleProjectMenuClick(index)
                  : handleMenuItemClick(sectionIndex, index)
              }
            />
          </div>
        ))}

        {/* Footer Links */}
        <div className="px-5" style={{ marginBottom: "20px" }}>
          <MenuList
            items={project.sideNav?.footerLinks || typedSidebarData.footerLinks}
            activeIndex={-1}
            onItemClick={(index) => {}}
          />
        </div>
      </SideNav>

      {/* Main Content */}
      <div
        className="flex-1 flex flex-col"
        style={{
          overflowY: "auto",
        }}
      >
        <TopNav
          tabs={topNavTabs}
          activeIndex={activeTabIndex} // Pass the active tab index
          onTabClick={handleTabClick} // Pass the click handler to TopNav
        />
        {showWarningBanner && (
          <WarningBanner
            message="Payment is required in order to progress your project further."
            buttonText="Make Payment"
            className="bg-yellow-200/50"
            buttonClassName="bg-blue-900 hover:bg-blue-800"
            modalContentClassName="bg-white rounded-lg shadow-lg"
            modalTitleClassName="text-2xl font-bold text-blue-900"
            modalDescriptionClassName="text-gray-700"
            modalInputClassName="border-gray-400 focus:ring focus:ring-blue-200"
            modalInputCvvClassName="w-24"
            modalInputGroupClassName="space-x-4"
            modalSubmitClassName="bg-blue-900 hover:bg-blue-800 text-white rounded-lg py-3"
          />
        )}

        {/* Conditionally render the appropriate wrapper based on the active tab */}
        {activeTab === "Dashboard" && (
          <ContentWrapper
            title={`${project.title} Dashboard`}
            description="Manage your project details, timeline, and metrics."
          >
            {/* Project Summary Card */}
            <ProjectSummaryCard
              project={enhancedProject}
              className="border border-gray-200"
              titleClassName="text-xl font-semibold text-gray-800"
              progressBarFilledClassName="bg-blue-600"
              stageIcon={<CardIcon />}
              rightIcon={<MenuDotsIcon />}
            />

            {/* Project Journey Section */}
            <div className="mt-8">
              <div className="self-stretch text-[#0A2540] text-xl font-medium font-['Inter']">
                Project Journey
              </div>
              <div className="self-stretch text-[#425A70] text-sm font-normal font-['Inter'] leading-tight mb-4">
                Track and quickly access each step in your journey
              </div>
              <div className="grid grid-cols-4 gap-4">
                {project.journeySteps?.map((step, index) => (
                  <JourneyCard
                    key={index}
                    icon={iconMap[step.icon] || <span>{step.icon}</span>}
                    title={step.title}
                    description={step.description}
                    status={step.status}
                    progress={step.progress}
                    steps={step.steps}
                    ctaText={step.ctaText}
                    onCtaClick={
                      step.ctaText
                        ? () => console.log(`Navigating to ${step.ctaText}`)
                        : undefined
                    }
                  />
                ))}
              </div>
            </div>

            {/* Activity Section */}
            <div className="mt-8">
              <div className="self-stretch text-[#0A2540] text-xl font-medium font-['Inter']">
                Activity
              </div>
              <div className="self-stretch text-[#425A70] text-sm font-normal font-['Inter'] leading-tight mb-4">
                Review your team's recent activity
              </div>
              <div className="flex gap-2">
                <MenuItem
                  items={filterItems}
                  activeIndex={activeFilterIndex}
                  onItemClick={handleFilterClick}
                  className="flex items-center space-x-4"
                  buttonClassName="h-[39px] px-3.5 rounded-[250px] outline outline-1 outline-offset-[-1px] outline-slate-200 inline-flex justify-start items-center gap-1 text-sm font-medium font-['Inter'] text-slate-900"
                  activeButtonClassName="bg-[#f0f3f7]"
                  inactiveButtonClassName="bg-white"
                />
              </div>
              <div className="mt-6 flex flex-col justify-start items-start gap-12">
                <div className="flex flex-col justify-start items-start gap-8">
                  {filteredActivities.length > 0 ? (
                    filteredActivities.map((activity, index) => (
                      <ActivityItem
                        key={index}
                        userImageSrc={activity.userImageSrc}
                        userInitials={activity.userInitials}
                        userName={activity.userName}
                        description={activity.description}
                        timestamp={activity.timestamp}
                        fileAttachment={activity.fileAttachment}
                      />
                    ))
                  ) : (
                    <div className="text-[#425A70] text-sm font-normal font-['Inter']">
                      No activities found for the selected filter.
                    </div>
                  )}
                </div>
                {filteredActivities.length > 0 && (
                  <button className="h-[39px] px-3.5 bg-[#2d2d2d] rounded-[100px] inline-flex justify-start items-center gap-0.5">
                    <div className="justify-center text-white text-sm font-medium font-['Inter']">
                      Show more
                    </div>
                  </button>
                )}
              </div>
            </div>
          </ContentWrapper>
        )}

        {activeTab === "Messages" && (
          <MessagesWrapper
            title={`${project.title} Messages`}
            description="View and manage all communications related to your project."
          />
        )}

        {activeTab === "Resources" && (
          <ResourcesWrapper
            title={`${project.title} Resources`}
            description="Access documents, files, and other resources for your project."
          />
        )}
      </div>
    </div>
  );
};

export default ProjectDashboard;