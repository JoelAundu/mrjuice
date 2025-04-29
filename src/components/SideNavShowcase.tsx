import React, { useState, useEffect } from "react";
import SideNav from "./navigation/SideNav";
import Input from "./inputs/Input";
import MenuList from "./actionMenu/MenuList";
import SectionHeader from "./sections/SectionHeader";
import TopNav from "./sections/TopNav";
import sidebarData from "../sidebarData.json";
import ContentWrapper from "./wrappers/ContentWrapper";
import MenuItem from "./actionMenu/MenuItem";
import ProjectCard from "./cards/ProjectCard";
import Modal from "./modal/Modal";
import LocationMap from "./wrappers/LocationMap";
import ProjectDashboard from "./ProjectDashbaord";
import { SidebarData, ProjectMenuItem } from "../types";

// Placeholder icon (can be replaced with react-icons)
const SearchIcon = () => <span>🔍</span>;

// Type assertion to ensure sidebarData matches SidebarData type
const typedSidebarData = sidebarData as SidebarData;

const SideNavShowcase: React.FC = () => {
  const [searchValue, setSearchValue] = useState("");
  const [activeMenuIndex, setActiveMenuIndex] = useState(0);
  const [activeFilterIndex, setActiveFilterIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(
    null
  ); // Track selected project

  // Prevent body scrolling when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto"; // Cleanup on unmount
    };
  }, [isModalOpen]);

  // Helper function to calculate activeIndex for each section
  const getActiveIndexForSection = (
    sectionStartIndex: number,
    sectionLength: number
  ) => {
    const index = activeMenuIndex - sectionStartIndex;
    return index >= 0 && index < sectionLength ? index : -1;
  };

  // Calculate section start indices
  let currentIndex = 0;
  const sectionIndices = typedSidebarData.menuSections.map((section) => {
    const startIndex = currentIndex;
    currentIndex += section.items.length;
    return startIndex;
  });
  const footerStartIndex = currentIndex;

  // Get the current filter label based on activeFilterIndex
  const currentFilter =
    typedSidebarData.projectFilters[activeFilterIndex]?.label;

  // Filter projects based on the current filter
  const filteredProjects = typedSidebarData.projects.filter((project) => {
    // Always show the "Create New Project" button
    if (project.isCreateButton) {
      return true;
    }

    // If "All Projects" is selected, show all projects except the create button
    if (currentFilter === "All Projects") {
      return !project.isCreateButton;
    }

    // Otherwise, filter by state
    return project.state === currentFilter;
  });

  // Handle project click (from ProjectCard or SideNav menu)
  const handleProjectClick = (id: string) => {
    setSelectedProjectId(id);
  };

  // Type guard to check if an item is a ProjectMenuItem (has an id)
  const isProjectMenuItem = (item: any): item is ProjectMenuItem => {
    return (item as ProjectMenuItem).id !== undefined;
  };

  // Handle menu item click in the SideNav
  const handleMenuItemClick = (sectionIndex: number, itemIndex: number) => {
    const newActiveMenuIndex = sectionIndices[sectionIndex] + itemIndex;
    setActiveMenuIndex(newActiveMenuIndex);

    // If a project is clicked in the "PROJECTS" section, navigate to ProjectDashboard
    const clickedItem =
      typedSidebarData.menuSections[sectionIndex].items[itemIndex];
    if (isProjectMenuItem(clickedItem)) {
      handleProjectClick(clickedItem.id);
    }
  };

  return selectedProjectId ? (
    <ProjectDashboard
      projectId={selectedProjectId}
      onBackToHome={() => setSelectedProjectId(null)}
    />
  ) : (
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
        {typedSidebarData.menuSections.map((section, sectionIndex) => (
          <div
            key={sectionIndex}
            className="px-5"
            style={{ marginTop: sectionIndex > 0 ? "16px" : "0" }}
          >
            {section.title && <SectionHeader title={section.title} />}
            <MenuList
              items={section.items.map((item) => ({
                ...item,
                isActive:
                  getActiveIndexForSection(
                    sectionIndices[sectionIndex],
                    section.items.length
                  ) === section.items.findIndex((i) => i.label === item.label),
              }))}
              activeIndex={getActiveIndexForSection(
                sectionIndices[sectionIndex],
                section.items.length
              )}
              onItemClick={(index) => handleMenuItemClick(sectionIndex, index)}
            />
          </div>
        ))}

        {/* Footer Links */}
        <div className="px-5" style={{ marginBottom: "20px" }}>
          <MenuList
            items={typedSidebarData.footerLinks}
            activeIndex={getActiveIndexForSection(
              footerStartIndex,
              typedSidebarData.footerLinks.length
            )}
            onItemClick={(index) =>
              setActiveMenuIndex(footerStartIndex + index)
            }
          />
        </div>
      </SideNav>

      {/* Main Content (including TopNav) */}
      <div
        className="flex-1 flex flex-col"
        style={{
          overflowY: "auto",
        }}
      >
        <TopNav tabs={typedSidebarData.topNavTabs} />
        <ContentWrapper
          title="Resources"
          description="View all of your project, create a new one, or switch your activity to another."
        >
          <MenuItem
            items={typedSidebarData.projectFilters}
            activeIndex={activeFilterIndex}
            onItemClick={setActiveFilterIndex}
            className="flex items-center space-x-4"
            buttonClassName="h-[39px] px-3.5 rounded-[150px] outline outline-1 outline-offset-[-1px] outline-slate-200 inline-flex justify-start items-center gap-1 text-sm font-medium font-['Inter'] text-slate-900"
            activeButtonClassName="bg-[#f0f3f7]"
            inactiveButtonClassName="bg-white"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={index}
                id={project.id} // Pass the project id
                title={project.title}
                address={project.address}
                state={project.state}
                image={project.image}
                isCreateButton={project.isCreateButton}
                stateColor={
                  project.state
                    ? typedSidebarData.states[project.state]?.color
                    : undefined
                }
                stateBgColor={
                  project.state
                    ? typedSidebarData.states[project.state]?.bgColor
                    : undefined
                }
                onCreateClick={
                  project.isCreateButton
                    ? () => setIsModalOpen(true)
                    : undefined
                }
                onClick={handleProjectClick} // Pass the click handler
              />
            ))}
          </div>
          <LocationMap />
        </ContentWrapper>
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </div>
    </div>
  );
};

export default SideNavShowcase;
