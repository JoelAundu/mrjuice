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
import { SidebarData, EnhancedProject } from "../types";
import MenuItem from "./actionMenu/MenuItem";
import Button from "./buttons/Button";

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
  const showWarningBanner = ["In Progress", "On Hold"].includes(
    project.state || ""
  );

  // Log when the warning banner is visible (for tracking purposes)
  useEffect(() => {
    if (showWarningBanner) {
      console.log(
        `WarningBanner is visible for project ${projectId} (state: ${project.state})`
      );
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

  // Handle filter button clicks
  const handleFilterClick = (index: number) => {
    setActiveFilterIndex(index);
    // Placeholder for filtering logic
    console.log(`Filter changed to: ${filterItems[index].label}`);
  };

  // Define TopNav tabs for ProjectDashboard
  const topNavTabs = [
    { label: "Dashboard", isActive: true },
    { label: "Messages", isActive: false },
    { label: "Resources", isActive: false },
  ];

  // Define filter items for Activity section
  const filterItems = [
    { label: "All Activity", isActive: true },
    { label: "Last Week", isActive: false },
    { label: "Last 30 Days", isActive: false },
    { label: "Last 3 Months", isActive: false },
  ];

  // Define activity items (hardcoded for now)
  const activityItems = [
    {
      userImageSrc:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
      userInitials: "DR",
      userName: "David Raphael",
      description:
        "<span class=\"text-[#2d2d2d] text-sm font-semibold font-['Inter']\">David Raphael </span><span class=\"text-[#2d2d2d] text-sm font-normal font-['Inter']\">completed </span><span class=\"text-[#2d2d2d] text-sm font-semibold font-['Inter']\">General</span><span class=\"text-[#2d2d2d] text-sm font-normal font-['Inter']\"> section of Site Information in </span><span class=\"text-[#2d2d2d] text-sm font-semibold font-['Inter']\">Detailed Feasibility</span>",
      timestamp: "Monday 17:41",
    },
    {
      userImageSrc:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      userInitials: "PR",
      userName: "Patrick Rollinson",
      description:
        "<span class=\"text-[#2d2d2d] text-sm font-semibold font-['Inter']\">Patrick Rollinson </span><span class=\"text-[#2d2d2d] text-sm font-normal font-['Inter']\">uploaded </span><span class=\"text-[#2d2d2d] text-sm font-semibold font-['Inter']\">Load Data</span><span class=\"text-[#2d2d2d] text-sm font-normal font-['Inter']\"> to the project.</span>",
      timestamp: "Monday 13:58",
      fileAttachment: {
        fileName: "load_data_report.xls",
        fileType: ".xls",
        fileSize: "2.35mb",
      },
    },
    {
      userImageSrc:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
      userInitials: "DR",
      userName: "David Raphael",
      description:
        "<span class=\"text-[#2d2d2d] text-sm font-semibold font-['Inter']\">David Raphael </span><span class=\"text-[#2d2d2d] text-sm font-normal font-['Inter']\">completed </span><span class=\"text-[#2d2d2d] text-sm font-semibold font-['Inter']\">Electrical Distribution Boards</span><span class=\"text-[#2d2d2d] text-sm font-normal font-['Inter']\"> map interaction for the </span><span class=\"text-[#2d2d2d] text-sm font-semibold font-['Inter']\">Electrical Information </span><span class=\"text-[#2d2d2d] text-sm font-normal font-['Inter']\">section of Site Information in </span><span class=\"text-[#2d2d2d] text-sm font-semibold font-['Inter']\">Detailed Feasibility</span><span class=\"text-[#2d2d2d] text-sm font-normal font-['Inter']\">.</span>",
      timestamp: "Friday 09:26",
    },
    {
      userImageSrc:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
      userInitials: "DR",
      userName: "David Raphael",
      description:
        "<span class=\"text-[#2d2d2d] text-sm font-semibold font-['Inter']\">David Raphael </span><span class=\"text-[#2d2d2d] text-sm font-normal font-['Inter']\">invited a </span><span class=\"text-[#2d2d2d] text-sm font-semibold font-['Inter']\">New Team Member</span><span class=\"text-[#2d2d2d] text-sm font-normal font-['Inter']\">, awaiting confirmation of sign up.</span>",
      timestamp: "Thursday 11:37",
    },
  ];

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
        <TopNav tabs={topNavTabs} />
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
              {/* <MenuList
                items={filterItems}
                activeIndex={activeFilterIndex}
                onItemClick={handleFilterClick}
                className="flex gap-2"
                labelClassName="justify-center text-slate-900 text-sm font-medium font-['Inter']"
              /> */}

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
                {activityItems.map((activity, index) => (
                  <ActivityItem
                    key={index}
                    userImageSrc={activity.userImageSrc}
                    userInitials={activity.userInitials}
                    userName={activity.userName}
                    description={activity.description}
                    timestamp={activity.timestamp}
                    fileAttachment={activity.fileAttachment}
                  />
                ))}
              </div>
              <button className="h-[39px] px-3.5 bg-[#2d2d2d] rounded-[100px] inline-flex justify-start items-center gap-0.5">
                <div className="justify-center text-white text-sm font-medium font-['Inter']">
                  Show more
                </div>
              </button>
              {/* <Button variant="slate" className="!rounded !bg-[#2d2d2d]" size="sm">
                Show more
              </Button> */}
            </div>
          </div>
        </ContentWrapper>
      </div>
    </div>
  );
};

export default ProjectDashboard;
