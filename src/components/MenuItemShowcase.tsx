import React, { useState } from 'react';
import MenuItem from './actionMenu/MenuItem';

const MenuItemShowcase: React.FC = () => {
  // State for default MenuItem (matches the image)
  const [defaultActiveIndex, setDefaultActiveIndex] = useState(0);
  const defaultItems = [
    { label: 'My Projects' },
    { label: 'My Organisation' },
    { label: 'Team Management' },
  ];

  // State for alternative MenuItem (different labels, different active button)
  const [altActiveIndex, setAltActiveIndex] = useState(1);
  const altItems = [
    { label: 'Dashboard' },
    { label: 'Reports' },
    { label: 'Settings' },
  ];

  // State for styled MenuItem (custom colors and spacing)
  const [styledActiveIndex, setStyledActiveIndex] = useState(0);
  const styledItems = [
    { label: 'Home' },
    { label: 'Profile' },
    { label: 'Messages' },
  ];

  // State for extended MenuItem (more items)
  const [extendedActiveIndex, setExtendedActiveIndex] = useState(2);
  const extendedItems = [
    { label: 'Overview' },
    { label: 'Analytics' },
    { label: 'Tasks' },
    { label: 'Calendar' },
    { label: 'Files' },
  ];

  return (
    <div className="p-6 space-y-8 bg-gray-50 min-h-screen">
      {/* Default MenuItem */}
      <div>
        <h2 className="text-lg font-semibold mb-2">Default MenuItem</h2>
        <MenuItem
          items={defaultItems}
          activeIndex={defaultActiveIndex}
          onItemClick={setDefaultActiveIndex}
        />
      </div>

      {/* Alternative MenuItem */}
      <div>
        <h2 className="text-lg font-semibold mb-2">Alternative Labels (Active: Reports)</h2>
        <MenuItem
          items={altItems}
          activeIndex={altActiveIndex}
          onItemClick={setAltActiveIndex}
        />
      </div>

      {/* Styled MenuItem */}
      <div>
        <h2 className="text-lg font-semibold mb-2">Styled MenuItem (Custom Colors)</h2>
        <MenuItem
          items={styledItems}
          activeIndex={styledActiveIndex}
          onItemClick={setStyledActiveIndex}
          className="bg-gray-100 p-4 rounded-lg"
          activeButtonClassName="bg-blue-500 text-white shadow-lg"
          inactiveButtonClassName="text-blue-600 hover:text-blue-800"
          buttonClassName="px-6 py-3 text-base"
        />
      </div>

      {/* Extended MenuItem */}
      <div>
        <h2 className="text-lg font-semibold mb-2">Extended MenuItem (More Items)</h2>
        <MenuItem
          items={extendedItems}
          activeIndex={extendedActiveIndex}
          onItemClick={setExtendedActiveIndex}
        />
      </div>
    </div>
  );
};

export default MenuItemShowcase;