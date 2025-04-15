import React, { useState } from "react";
import SideNav from "./navigation/SideNav";
import Input from "./inputs/Input";
import MenuList from "./actionMenu/MenuList";

// Placeholder icons (replace with actual icons in a real project)
const SearchIcon = () => <span>🔍</span>;
const HomeIcon = () => <span>🏠</span>;
const ProjectIcon = () => <span>📁</span>;
const SettingsIcon = () => <span>⚙️</span>;
const TeamIcon = () => <span>👥</span>;
const HelpIcon = () => <span>❓</span>;

const SideNavShowcase = () => {
  const [searchValue, setSearchValue] = useState("");
  const [activeMenuIndex, setActiveMenuIndex] = useState(0);

  const mainMenuItems = [{ label: "Home", icon: <HomeIcon /> }];

  const projectMenuItems = [
    { label: "Maraisburg Road", icon: <ProjectIcon /> },
    { label: "Lismore Avenue", icon: <ProjectIcon /> },
  ];

  const settingsMenuItems = [
    { label: "System Settings", icon: <SettingsIcon /> },
  ];

  const bottomMenuItems = [
    { label: "Invite Team Members", icon: <TeamIcon /> },
    { label: "Help Centre", icon: <HelpIcon /> },
  ];

  // Helper function to calculate activeIndex safely
  const getActiveIndexForSection = (sectionStartIndex, sectionLength) => {
    const index = activeMenuIndex - sectionStartIndex;
    return index >= 0 && index < sectionLength ? index : -1;
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <SideNav
        logo={<div style={{ fontWeight: 700, fontSize: "18px" }}>SOLINK</div>}
        className="!bg-white"
      >
        {/* Search Input */}
        <Input
          label="Search"
          leftIcon={<SearchIcon />}
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          className="mb-4"
        />

        {/* Main Menu */}
        <MenuList
          items={mainMenuItems}
          activeIndex={getActiveIndexForSection(0, mainMenuItems?.length)}
          onItemClick={(index) => setActiveMenuIndex(index)}
        />

        {/* Projects Section */}
        <div className="mt-4">
          <div className="text-xs font-semibold text-gray-500 mb-2">
            PROJECTS
          </div>
          <MenuList
            items={projectMenuItems}
            activeIndex={getActiveIndexForSection(1, projectMenuItems?.length)}
            onItemClick={(index) => setActiveMenuIndex(index + 1)}
          />
        </div>

        {/* Settings Section */}
        <div className="mt-4">
          <div className="text-xs font-semibold text-gray-500 mb-2">
            SETTINGS
          </div>
          <MenuList
            items={settingsMenuItems}
            activeIndex={getActiveIndexForSection(3, settingsMenuItems?.length)}
            onItemClick={(index) => setActiveMenuIndex(index + 3)}
          />
        </div>

        {/* Bottom Menu */}
        <div className="mt-auto">
          <MenuList
            items={bottomMenuItems}
            activeIndex={getActiveIndexForSection(4, bottomMenuItems?.length)}
            onItemClick={(index) => setActiveMenuIndex(index + 4)}
          />
        </div>
      </SideNav>

      {/* Main Content (for demo purposes) */}
      <div className="flex-1 p-8">
        <h1 className="text-3xl font-bold">SideNav Showcase</h1>
        <p className="mt-4">
          Interact with the SideNav to see expand/collapse and active states.
        </p>
      </div>
    </div>
  );
};

export default SideNavShowcase;
