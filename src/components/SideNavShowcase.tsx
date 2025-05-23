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
  );
  const [currentPage, setCurrentPage] = useState(0); // Track the current page of projects in SideNav
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);
  const [showBackdrop, setShowBackdrop] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 639); // Track screen size

  const projectsPerPage = 4; // Display 4 projects at a time in SideNav

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

  // Get the "PROJECTS" section items (menuSections[1])
  const projectSectionItems = typedSidebarData.menuSections[1].items;

  // Apply search filter to "PROJECTS" section items if searchValue is not empty
  const searchedProjectItems = searchValue
    ? projectSectionItems.filter((item) =>
        item.label.toLowerCase().includes(searchValue.toLowerCase())
      )
    : projectSectionItems;

  // Calculate total pages for "PROJECTS" section based on filtered items
  const totalPages = Math.ceil(searchedProjectItems.length / projectsPerPage);

  // Rotate projects in SideNav every 3 minutes (180,000 ms) if not searching
  useEffect(() => {
    if (searchValue || totalPages <= 1) return; // Don't rotate if searching or only 1 page

    const interval = setInterval(() => {
      setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
    }, 180000); // 3 minutes

    return () => clearInterval(interval); // Cleanup on unmount or search change
  }, [searchValue, totalPages]);

  // Reset currentPage when search changes
  useEffect(() => {
    setCurrentPage(0); // Reset to first page when search changes
  }, [searchValue]);

  // Slice the "PROJECTS" section items to display only 4 at a time
  const startIndex = currentPage * projectsPerPage;
  const displayedProjectItems = searchedProjectItems.slice(
    startIndex,
    startIndex + projectsPerPage
  );

  // Create the updated menuSections with the sliced "PROJECTS" section
  const updatedMenuSections = typedSidebarData.menuSections.map(
    (section, index) => {
      if (index === 1) {
        // "PROJECTS" section
        return {
          ...section,
          items: displayedProjectItems,
        };
      }
      return section;
    }
  );

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
  const sectionIndices = updatedMenuSections.map((section) => {
    const startIndex = currentIndex;
    currentIndex += section.items.length;
    return startIndex;
  });
  const footerStartIndex = currentIndex;

  // Get the current filter label based on activeFilterIndex
  const currentFilter =
    typedSidebarData.projectFilters[activeFilterIndex]?.label;

  // Filter projects based on the current filter for the ContentWrapper
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
    setSearchValue(""); // Clear the search input when a project is selected
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
    const clickedItem = updatedMenuSections[sectionIndex].items[itemIndex];
    if (isProjectMenuItem(clickedItem)) {
      handleProjectClick(clickedItem.id);
    }
    if (isMobile) {
      setIsSideNavOpen(false);
      setShowBackdrop(false);
    }
  };

  const toggleSideNav = () => {
    setIsSideNavOpen(!isSideNavOpen);
    setShowBackdrop(!isSideNavOpen);
  };

  const closeSideNav = () => {
    setIsSideNavOpen(false);
    setShowBackdrop(false);
  };

  const renderSideNav = () => (
    <SideNav
      logo={
        <div style={{ fontWeight: 700, fontSize: "18px", color: "black" }}>
          {typedSidebarData.logo.text}
        </div>
      }
    >
      <div className="px-5">
        <Input
          label={typedSidebarData.search.label}
          placeholder={typedSidebarData.search.placeholder}
          leftIcon={<SearchIcon />}
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>

      {updatedMenuSections.map((section, sectionIndex) => (
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

      <div className="px-5" style={{ marginBottom: "20px" }}>
        <MenuList
          items={typedSidebarData.footerLinks}
          activeIndex={getActiveIndexForSection(
            footerStartIndex,
            typedSidebarData.footerLinks.length
          )}
          onItemClick={(index) => setActiveMenuIndex(footerStartIndex + index)}
        />
      </div>
    </SideNav>
  );

  return selectedProjectId ? (
    <ProjectDashboard
      projectId={selectedProjectId}
      onBackToHome={() => setSelectedProjectId(null)}
    />
  ) : (
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
            buttonClassName="h-[39px] px-3.5 rounded-[150px] outline outline-1 outline-offset-[-1px] outline-slate-200 inline-flex justify-start items-center gap-1 text-sm font-medium text-slate-900"
            activeButtonClassName="bg-[#f0f3f7]"
            inactiveButtonClassName="bg-white"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={index}
                id={project.id}
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
                onClick={handleProjectClick}
              />
            ))}
          </div>
          <LocationMap />
        </ContentWrapper>
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title="Create New Project"
        />
      </div>
    </div>
  );
};

export default SideNavShowcase;
