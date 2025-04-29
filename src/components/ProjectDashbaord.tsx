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
import { SidebarData, EnhancedProject } from "../types";

// Placeholder icons (can be replaced with react-icons)
const SearchIcon = () => <span>🔍</span>;
const CardIcon = () => <span>💳</span>; // Card icon for stage
const MenuDotsIcon = () => <span>⋮</span>; // Three vertical dots for right icon

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
  const [projectMenuIndex, setProjectMenuIndex] = useState(0); // Track active menu item in project view
  const [searchValue, setSearchValue] = useState(""); // Track search input value

  // Find the selected project, excluding "Create New Project"
  const project = typedSidebarData.projects.find(
    (p) => p.id === projectId && !p.isCreateButton
  );
  if (!project) {
    // Fallback in case project is not found
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
      onBackToHome(); // Navigate back to home view
    }
    // Other sections (e.g., "SETTINGS") can have their own logic if needed
  };

  // Define TopNav tabs for ProjectDashboard
  const topNavTabs = [
    { label: "Dashboard", isActive: true },
    { label: "Messages", isActive: false },
    { label: "Resources", isActive: false },
  ];

  // Calculate section start indices for non-project sections
  let currentIndex = 0;
  const sectionIndices = [
    typedSidebarData.menuSections[0], // "Home" section
    {
      title: project.title.toUpperCase(),
      items: project.sideNav?.menuItems || [],
    },
    typedSidebarData.menuSections[2], // "SETTINGS" section
  ].map((section) => {
    const startIndex = currentIndex;
    currentIndex += section.items.length;
    return startIndex;
  });
  const footerStartIndex = currentIndex;

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
          // "Home" section (ensure "Home" is not active)
          {
            ...typedSidebarData.menuSections[0],
            items: typedSidebarData.menuSections[0].items.map((item) => ({
              ...item,
              isActive: false, // Ensure Home is not active in ProjectDashboard
            })),
          },
          // Project-specific menu items
          {
            title: project.title.toUpperCase(),
            items:
              project.sideNav?.menuItems.map((item, index) => ({
                ...item,
                isActive: projectMenuIndex === index,
              })) || [],
          },
          // "SETTINGS" section
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
                  ? projectMenuIndex // For project-specific menu items
                  : section.items.findIndex((item) => item.isActive) // For "Home" and "SETTINGS"
              }
              onItemClick={(index) =>
                sectionIndex === 1
                  ? handleProjectMenuClick(index) // For project-specific menu items
                  : handleMenuItemClick(sectionIndex, index) // For "Home" and "SETTINGS"
              }
            />
          </div>
        ))}

        {/* Footer Links */}
        <div className="px-5" style={{ marginBottom: "20px" }}>
          <MenuList
            items={project.sideNav?.footerLinks || typedSidebarData.footerLinks}
            activeIndex={-1} // Footer links are not selectable in this view
            onItemClick={(index) => {
              // Handle footer link clicks if needed
            }}
          />
        </div>
      </SideNav>

      {/* Main Content (Matching Home View) */}
      <div
        className="flex-1 flex flex-col"
        style={{
          overflowY: "auto",
        }}
      >
        <TopNav tabs={topNavTabs} />
        {/* Conditionally render the WarningBanner */}
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
          {/* Updated Content with ProjectSummaryCard */}
          <ProjectSummaryCard
            project={enhancedProject}
            className="border border-gray-200" // Example customization
            titleClassName="text-xl font-semibold text-gray-800"
            progressBarFilledClassName="bg-blue-600"
            stageIcon={<CardIcon />}
            rightIcon={<MenuDotsIcon />}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
            <div className="bg-slate-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-medium text-slate-900 mb-2">
                Project Timeline
              </h3>
              <p className="text-sm text-slate-600">
                Placeholder for project timeline or progress tracking.
              </p>
            </div>
            <div className="bg-slate-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-medium text-slate-900 mb-2">
                Key Metrics
              </h3>
              <p className="text-sm text-slate-600">
                Placeholder for key metrics or KPIs.
              </p>
            </div>
          </div>
        </ContentWrapper>
      </div>
    </div>
  );
};

export default ProjectDashboard;