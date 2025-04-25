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

// Placeholder icon (can be replaced with react-icons)
const SearchIcon = () => <span>🔍</span>;

const SideNavShowcase: React.FC = () => {
  const [searchValue, setSearchValue] = useState("");
  const [activeMenuIndex, setActiveMenuIndex] = useState(0);
  const [activeFilterIndex, setActiveFilterIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
  const sectionIndices = sidebarData.menuSections.map((section) => {
    const startIndex = currentIndex;
    currentIndex += section.items.length;
    return startIndex;
  });
  const footerStartIndex = currentIndex;

  // Get the current filter label based on activeFilterIndex
  const currentFilter = sidebarData.projectFilters[activeFilterIndex]?.label;

  // Filter projects based on the current filter
  const filteredProjects = sidebarData.projects.filter((project) => {
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

  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden">
      <SideNav
        logo={
          <div style={{ fontWeight: 700, fontSize: "18px", color: "black" }}>
            {sidebarData.logo.text}
          </div>
        }
      >
        {/* Search Input */}
        <div className="px-5">
          <Input
            label={sidebarData.search.label}
            placeholder={sidebarData.search.placeholder}
            leftIcon={<SearchIcon />}
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </div>

        {/* Menu Sections */}
        {sidebarData.menuSections.map((section, sectionIndex) => (
          <div
            key={sectionIndex}
            className="px-5"
            style={{ marginTop: sectionIndex > 0 ? "16px" : "0" }}
          >
            {section.title && <SectionHeader title={section.title} />}
            <MenuList
              items={section.items}
              activeIndex={getActiveIndexForSection(
                sectionIndices[sectionIndex],
                section.items.length
              )}
              onItemClick={(index) =>
                setActiveMenuIndex(sectionIndices[sectionIndex] + index)
              }
            />
          </div>
        ))}

        {/* Footer Links */}
        <div className="px-5" style={{ marginBottom: "20px" }}>
          <MenuList
            items={sidebarData.footerLinks}
            activeIndex={getActiveIndexForSection(
              footerStartIndex,
              sidebarData.footerLinks.length
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
        style={{ // Match the width of the SideNav
          overflowY: "auto", // Single scrollbar for all main content
        }}
      >
        <TopNav />
        <ContentWrapper
          title="Resources"
          description="View all of your project, create a new one, or switch your activity to another."
        >
          <MenuItem
            items={sidebarData.projectFilters}
            activeIndex={activeFilterIndex}
            onItemClick={setActiveFilterIndex}
            className="flex items-center space-x-4"
            buttonClassName="h-[39px] px-3.5 rounded-[100px] outline outline-1 outline-offset-[-1px] outline-slate-200 inline-flex justify-start items-center gap-1 text-sm font-medium font-['Inter'] text-slate-900"
            activeButtonClassName="bg-[#f0f3f7]"
            inactiveButtonClassName="bg-white"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                address={project.address}
                state={project.state}
                image={project.image}
                isCreateButton={project.isCreateButton}
                stateColor={
                  project.state
                    ? sidebarData.states[project.state]?.color
                    : undefined
                }
                stateBgColor={
                  project.state
                    ? sidebarData.states[project.state]?.bgColor
                    : undefined
                }
                onCreateClick={
                  project.isCreateButton
                    ? () => setIsModalOpen(true)
                    : undefined
                }
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