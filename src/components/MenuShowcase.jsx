import React, { useState } from "react";
import MenuList from "./actionMenu/MenuList";

// Placeholder icons (optional, for demonstration)
const TeamIcon = () => <span>👥</span>;
const HelpIcon = () => <span>❓</span>;
const ProfileIcon = () => <span>👤</span>;
const SettingsIcon = () => <span>⚙️</span>;
const LogoutIcon = () => <span>🚪</span>;
const DashboardIcon = () => <span>📊</span>;
const ReportsIcon = () => <span>📋</span>;
const TasksIcon = () => <span>✅</span>;
const ProjectsIcon = () => <span>📁</span>;
const UsersIcon = () => <span>👥</span>;
const AnalyticsIcon = () => <span>📈</span>;

const MenuShowcase = () => {
  const [activeIndex1, setActiveIndex1] = useState(-1);
  const [activeIndex2, setActiveIndex2] = useState(-1);
  const [activeIndex3, setActiveIndex3] = useState(-1);
  const [activeIndex4, setActiveIndex4] = useState(-1);
  const [activeIndex5, setActiveIndex5] = useState(-1);

  // Define menu items using the new `items` prop format
  const menu1Items = [
    { label: "Invite Team Members", icon: <TeamIcon /> },
    { label: "Help Centre", icon: <HelpIcon /> },
  ];

  const menu2Items = [
    { label: "Profile", icon: <ProfileIcon /> },
    { label: "Settings", icon: <SettingsIcon /> },
    { label: "Logout", icon: <LogoutIcon /> },
  ];

  const menu3Items = [
    { label: "Dashboard", icon: <DashboardIcon /> },
    { label: "Reports", icon: <ReportsIcon /> },
  ];

  const menu4Items = [
    { label: "Tasks", icon: <TasksIcon /> },
    { label: "Projects", icon: <ProjectsIcon /> },
  ];

  const menu5Items = [
    { label: "Users", icon: <UsersIcon /> },
    { label: "Analytics", icon: <AnalyticsIcon /> },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 p-8">
      <h1 className="text-4xl font-bold text-center text-indigo-800 mb-8">
        🌟 MrJuice UI Menu Showcase 🌟
      </h1>

      {/* Menu Showcase */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {/* Default MenuList (2 Items) */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <h3 className="text-lg font-semibold text-indigo-600 mb-2">
            Default Menu (2 Items)
          </h3>
          <MenuList
            items={menu1Items}
            activeIndex={activeIndex1}
            onItemClick={(index) => setActiveIndex1(index)}
            className="w-full max-w-xs"
          />
        </div>

        {/* MenuList (3 Items) */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <h3 className="text-lg font-semibold text-indigo-600 mb-2">
            Menu (3 Items)
          </h3>
          <MenuList
            items={menu2Items}
            activeIndex={activeIndex2}
            onItemClick={(index) => setActiveIndex2(index)}
            className="w-full max-w-xs"
          />
        </div>

        {/* MenuList with Tailwind Customization (Active/Inactive) */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <h3 className="text-lg font-semibold text-indigo-600 mb-2">
            Tailwind Customized Menu (Active/Inactive)
          </h3>
          <MenuList
            items={menu3Items}
            activeIndex={activeIndex3}
            onItemClick={(index) => setActiveIndex3(index)}
            className="w-full max-w-xs"
            activeItemClassName="!bg-green-500 !border-2 !border-green-700 !rounded-lg"
            inactiveItemClassName="!bg-gray-200 !border !border-gray-400 !rounded-xl"
            activeLabelClassName="!text-white !font-bold"
            inactiveLabelClassName="!text-gray-600 !font-normal"
          />
        </div>

        {/* MenuList with Inline CSS via className (Active/Inactive) */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <h3 className="text-lg font-semibold text-indigo-600 mb-2">
            Inline CSS via className (Active/Inactive)
          </h3>
          <MenuList
            items={menu4Items}
            activeIndex={activeIndex4}
            onItemClick={(index) => setActiveIndex4(index)}
            className="w-full max-w-xs"
            activeItemClassName="background-color: #ff4500 !important; border: 2px solid #ff6347; border-radius: 12px;"
            inactiveItemClassName="background-color: #e0e0e0 !important; border: 1px dashed #a9a9a9; border-radius: 8px;"
            activeLabelClassName="color: #ffffff !important; font-weight: 700; opacity: 1;"
            inactiveLabelClassName="color: #696969 !important; font-weight: 400; opacity: 0.6;"
          />
        </div>

        {/* MenuList with Mixed Customization */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <h3 className="text-lg font-semibold text-indigo-600 mb-2">
            Mixed Customization (Tailwind + Inline CSS)
          </h3>
          <MenuList
            items={menu5Items}
            activeIndex={activeIndex5}
            onItemClick={(index) => setActiveIndex5(index)}
            className="w-full max-w-xs !p-4 !bg-indigo-50"
            itemClassName="!h-12"
            labelClassName="!text-base"
            activeItemClassName="!bg-purple-600 !border-none !rounded-full"
            inactiveItemClassName="!bg-white !shadow-md !rounded-md"
            activeLabelClassName="color: #ffd700 !important; font-style: italic;"
            inactiveLabelClassName="color: #4b0082 !important;"
          />
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-12 text-center text-gray-600">
        <p>Built with ❤️ by MrJuice UI Team</p>
        <p>Version 1.0.9 | © 2025</p>
      </footer>
    </div>
  );
};

export default MenuShowcase;