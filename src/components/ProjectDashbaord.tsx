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
import ResourceCard from "./cards/ResourceCard";
import { SidebarData, EnhancedProject } from "../types";
import { SearchIcon, GoogleDriveIcon } from "./icons/Icons";
import "./ProjectDashboard.css";

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

const typedSidebarData = sidebarData as SidebarData;

// Define the resources data array
const resourcesData = [
  {
    title: "Generated Reports",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad.",
  },
  {
    title: "Structural Engineers List",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad.",
  },
  {
    title: "Data Logging Companies",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad.",
  },
  {
    title: "Auto-Generated Structural RFP",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad.",
  },
];

const ProjectDashboard: React.FC<ProjectDashboardProps> = ({
  projectId,
  onBackToHome,
}) => {
  const [projectMenuIndex, setProjectMenuIndex] = useState(0);
  const [sideNavSearchValue, setSideNavSearchValue] = useState("");
  const [resourcesSearchValue, setResourcesSearchValue] = useState("");
  const [activeFilterIndex, setActiveFilterIndex] = useState(0);
  const [resourcesFilterIndex, setResourcesFilterIndex] = useState(0);
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);
  const [showBackdrop, setShowBackdrop] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 639); // Track screen size

  const project = typedSidebarData.projects.find(
    (p) => p.id === projectId && !p.isCreateButton
  );
  if (!project) {
    return <div>Project not found</div>;
  }

  const enhancedProject: EnhancedProject = {
    ...project,
    stateColor: typedSidebarData.states[project.state!]?.color || "",
    stateBgColor: typedSidebarData.states[project.state!]?.bgColor || "",
    progress: project.progress!,
    type: project.type!,
    stages: project.stages!,
  };

  const showWarningBanner = ["In Progress", "On Hold"].includes(
    project.state || ""
  );

  useEffect(() => {
    if (showWarningBanner) {
      console.log(
        `WarningBanner is visible for project ${projectId} (state: ${project.state})`
      );
    }
  }, [showWarningBanner, projectId, project.state]);

  // Listen for window resize to update isMobile state
  useEffect(() => {
    const handleResize = () => {
      const newIsMobile = window.innerWidth <= 639;
      setIsMobile(newIsMobile);
      if (!newIsMobile) {
        setIsSideNavOpen(false);
        setShowBackdrop(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleProjectMenuClick = (index: number) => {
    setProjectMenuIndex(index);
    if (isMobile) {
      setIsSideNavOpen(false);
      setShowBackdrop(false);
    }
  };

  const handleMenuItemClick = (sectionIndex: number, itemIndex: number) => {
    if (
      sectionIndex === 0 &&
      typedSidebarData.menuSections[0].items[itemIndex].label === "Home"
    ) {
      onBackToHome();
    }
    if (isMobile) {
      setIsSideNavOpen(false);
      setShowBackdrop(false);
    }
  };

  const handleTabClick = (index: number) => {
    setActiveTabIndex(index);
  };

  const toggleSideNav = () => {
    setIsSideNavOpen(!isSideNavOpen);
    setShowBackdrop(!isSideNavOpen);
  };

  const closeSideNav = () => {
    setIsSideNavOpen(false);
    setShowBackdrop(false);
  };

  const topNavTabs = [
    { label: "Dashboard" },
    { label: "Messages" },
    { label: "Resources" },
  ];

  const activeTab = topNavTabs[activeTabIndex].label;

  const filterItems = [
    { label: "All Activity", isActive: true },
    { label: "Last Week", isActive: false },
    { label: "Last 30 Days", isActive: false },
    { label: "Last 3 Months", isActive: false },
  ];

  const handleFilterClick = (index: number) => {
    setActiveFilterIndex(index);
    console.log(`Filter changed to: ${filterItems[index].label}`);
  };

  const resourcesFilterItems = [
    { label: "Download", isActive: true },
    { label: "My Upload", isActive: false },
  ];

  const handleResourcesFilterClick = (index: number) => {
    setResourcesFilterIndex(index);
    console.log(`${resourcesFilterItems[index].label} clicked`);
  };

  const filteredResources = resourcesData.filter((resource) => {
    const searchLower = resourcesSearchValue.toLowerCase();
    return (
      resource.title.toLowerCase().includes(searchLower) ||
      resource.description.toLowerCase().includes(searchLower)
    );
  });

  const filteredProjects = typedSidebarData.projects
    .filter((p) => !p.isCreateButton)
    .filter((p) =>
      p.title.toLowerCase().includes(sideNavSearchValue.toLowerCase())
    );

  const currentDate = new Date("2025-04-29");
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

  const iconMap: { [key: string]: React.ReactNode } = {
    "📍": <SiteIcon />,
    "💬": <ReviewIcon />,
    "⭐": <FeasibilityIcon />,
    "🤝": <BidderIcon />,
  };

  const renderSideNav = () => (
    <SideNav
      logo={
        <div
          className="font-bold text-2xl text-black"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          {typedSidebarData.logo.text}
        </div>
      }
    >
      <div className="px-5">
        <Input
          label={typedSidebarData.search.label}
          placeholder={typedSidebarData.search.placeholder}
          leftIcon={<SearchIcon />}
          value={sideNavSearchValue}
          onChange={(e) => setSideNavSearchValue(e.target.value)}
          className="w-full sm:w-64 md:w-80"
        />
      </div>

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

      <div className="px-5 mb-5">
        <MenuList
          items={project.sideNav?.footerLinks || typedSidebarData.footerLinks}
          activeIndex={-1}
          onItemClick={(index) => {
            if (isMobile) {
              setIsSideNavOpen(false);
              setShowBackdrop(false);
            }
          }}
        />
      </div>
    </SideNav>
  );

  // Determine which view to render based on projectMenuIndex
  const renderMainView = () => {
    switch (projectMenuIndex) {
      case 0: // Detailed Dashboard
        return (
          <>
            <TopNav
              tabs={topNavTabs}
              activeIndex={activeTabIndex}
              onTabClick={handleTabClick}
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

            {activeTab === "Dashboard" && (
              <ContentWrapper
                title={`${project.title} Dashboard`}
                description="Manage your project details, timeline, and metrics."
              >
                <ProjectSummaryCard
                  project={enhancedProject}
                  className="border border-gray-200"
                  titleClassName="text-xl font-semibold text-gray-800"
                  progressBarFilledClassName="bg-blue-600"
                  stageIcon={<CardIcon />}
                  rightIcon={<MenuDotsIcon />}
                />

                <div className="mt-4 sm:mt-6 md:mt-8">
                  <div className="self-stretch text-[#0A2540] text-lg sm:text-xl font-medium">
                    Project Journey
                  </div>
                  <div className="self-stretch text-[#425A70] text-xs sm:text-sm font-normal leading-tight mb-2 sm:mb-4">
                    Track and quickly access each step in your journey
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4">
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

                <div className="mt-4 sm:mt-6 md:mt-8">
                  <div className="self-stretch text-[#0A2540] text-lg sm:text-xl font-medium">
                    Activity
                  </div>
                  <div className="self-stretch text-[#425A70] text-xs sm:text-sm font-normal leading-tight mb-2 sm:mb-4">
                    Review your team's recent activity
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <MenuItem
                      items={filterItems}
                      activeIndex={activeFilterIndex}
                      onItemClick={handleFilterClick}
                      className="flex items-center space-x-4"
                      buttonClassName="h-[39px] px-3.5 rounded-[250px] outline outline-1 outline-offset-[-1px] outline-slate-200 inline-flex justify-start items-center gap-1 text-sm font-medium text-slate-900"
                      activeButtonClassName="bg-[#f0f3f7]"
                      inactiveButtonClassName="bg-white"
                    />
                  </div>
                  <div className="mt-4 sm:mt-6 flex flex-col justify-start items-start gap-6 sm:gap-8 md:gap-12">
                    <div className="flex flex-col justify-start items-start gap-4 sm:gap-6 md:gap-8">
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
                        <div className="text-[#425A70] text-xs sm:text-sm font-normal">
                          No activities found for the selected filter.
                        </div>
                      )}
                    </div>
                    {filteredActivities.length > 0 && (
                      <button className="h-[39px] px-3.5 bg-[#2d2d2d] rounded-[100px] inline-flex justify-start items-center gap-0.5">
                        <div className="justify-center text-white text-sm font-medium">
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
              >
                <div className="mb-2 sm:mb-4">
                  <Input
                    label="Search Resources"
                    placeholder="Search documents, files..."
                    leftIcon={
                      <SearchIcon strokeColor="#1F2A44" width="18" height="18" />
                    }
                    value={resourcesSearchValue}
                    onChange={(e) => setResourcesSearchValue(e.target.value)}
                    className="!w-full sm:!w-64 md:!w-80"
                  />
                </div>
                <div className="my-4 sm:my-8 md:my-12">
                  <MenuItem
                    items={resourcesFilterItems}
                    activeIndex={resourcesFilterIndex}
                    onItemClick={handleResourcesFilterClick}
                    className="flex items-center space-x-4"
                    buttonClassName="h-[39px] px-3.5 rounded-[250px] outline outline-1 outline-offset-[-1px] outline-slate-200 inline-flex justify-start items-center gap-1 text-sm font-medium text-slate-900"
                    activeButtonClassName="bg-[#f0f3f7]"
                    inactiveButtonClassName="bg-white"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-6">
                  {filteredResources.length > 0 ? (
                    filteredResources.map((resource, index) => (
                      <ResourceCard
                        key={index}
                        title={resource.title}
                        description={resource.description}
                        icon={<GoogleDriveIcon />}
                      />
                    ))
                  ) : (
                    <div className="col-span-full text-center text-slate-500">
                      No resources found matching your search.
                    </div>
                  )}
                </div>
              </ResourcesWrapper>
            )}
          </>
        );
      case 1: // Detailed Feasibility
        return (
          <>
            <TopNav
              tabs={topNavTabs}
              activeIndex={activeTabIndex}
              onTabClick={handleTabClick}
            />
            {activeTab === "Dashboard" && (
              <ContentWrapper
                title={`${project.title} Detailed Feasibility`}
                description=""
               >
                <p></p>
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
              >
                <div className="mb-2 sm:mb-4">
                  <Input
                    label="Search Resources"
                    placeholder="Search documents, files..."
                    leftIcon={
                      <SearchIcon strokeColor="#1F2A44" width="18" height="18" />
                    }
                    value={resourcesSearchValue}
                    onChange={(e) => setResourcesSearchValue(e.target.value)}
                    className="!w-full sm:!w-64 md:!w-80"
                  />
                </div>
                <div className="my-4 sm:my-8 md:my-12">
                  <MenuItem
                    items={resourcesFilterItems}
                    activeIndex={resourcesFilterIndex}
                    onItemClick={handleResourcesFilterClick}
                    className="flex items-center space-x-4"
                    buttonClassName="h-[39px] px-3.5 rounded-[250px] outline outline-1 outline-offset-[-1px] outline-slate-200 inline-flex justify-start items-center gap-1 text-sm font-medium text-slate-900"
                    activeButtonClassName="bg-[#f0f3f7]"
                    inactiveButtonClassName="bg-white"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-6">
                  {filteredResources.length > 0 ? (
                    filteredResources.map((resource, index) => (
                      <ResourceCard
                        key={index}
                        title={resource.title}
                        description={resource.description}
                        icon={<GoogleDriveIcon />}
                      />
                    ))
                  ) : (
                    <div className="col-span-full text-center text-slate-500">
                      No resources found matching your search.
                    </div>
                  )}
                </div>
              </ResourcesWrapper>
            )}
          </>
        );
      case 2: // Project Tendering
        return (
          <>
            <TopNav
              tabs={topNavTabs}
              activeIndex={activeTabIndex}
              onTabClick={handleTabClick}
            />
            {activeTab === "Dashboard" && (
              <ContentWrapper
                title={`${project.title} Project Tendering`}
                description=""
              >
                <p></p>
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
              >
                <div className="mb-2 sm:mb-4">
                  <Input
                    label="Search Resources"
                    placeholder="Search documents, files..."
                    leftIcon={
                      <SearchIcon strokeColor="#1F2A44" width="18" height="18" />
                    }
                    value={resourcesSearchValue}
                    onChange={(e) => setResourcesSearchValue(e.target.value)}
                    className="!w-full sm:!w-64 md:!w-80"
                  />
                </div>
                <div className="my-4 sm:my-8 md:my-12">
                  <MenuItem
                    items={resourcesFilterItems}
                    activeIndex={resourcesFilterIndex}
                    onItemClick={handleResourcesFilterClick}
                    className="flex items-center space-x-4"
                    buttonClassName="h-[39px] px-3.5 rounded-[250px] outline outline-1 outline-offset-[-1px] outline-slate-200 inline-flex justify-start items-center gap-1 text-sm font-medium text-slate-900"
                    activeButtonClassName="bg-[#f0f3f7]"
                    inactiveButtonClassName="bg-white"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-6">
                  {filteredResources.length > 0 ? (
                    filteredResources.map((resource, index) => (
                      <ResourceCard
                        key={index}
                        title={resource.title}
                        description={resource.description}
                        icon={<GoogleDriveIcon />}
                      />
                    ))
                  ) : (
                    <div className="col-span-full text-center text-slate-500">
                      No resources found matching your search.
                    </div>
                  )}
                </div>
              </ResourcesWrapper>
            )}
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden">
      {/* Hamburger menu for mobile */}
      {isMobile && (
        <button
          onClick={toggleSideNav}
          className={`hamburger-button ${isSideNavOpen ? "open" : ""}`}
          aria-expanded={isSideNavOpen}
          aria-label="Toggle navigation menu"
        >
          <span className="hamburger-icon"></span>
        </button>
      )}
      {/* SideNav rendering */}
      {isMobile ? (
        <>
          <div
            className={`side-nav-wrapper ${isSideNavOpen ? "block" : "hidden"}`}
          >
            {renderSideNav()}
          </div>
          {isSideNavOpen && (
            <div className="side-nav-backdrop" onClick={closeSideNav}></div>
          )}
        </>
      ) : (
        renderSideNav()
      )}
      <div
        className={`flex-1 flex flex-col ${isSideNavOpen ? "active" : ""}`}
        style={{
          overflowY: "auto",
        }}
      >
        {renderMainView()}
      </div>
    </div>
  );
};

export default ProjectDashboard;