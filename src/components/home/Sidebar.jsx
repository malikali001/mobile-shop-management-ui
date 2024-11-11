import React from 'react';

const Sidebar = ({ sections, activeSection, onSectionSelect }) => {
  return (
    <div className="bg-light vh-100 p-3">
      <h4>Sections</h4>
      <ul className="nav flex-column">
        {sections.map((section) => (
          <li key={section} className="nav-item">
            <button
              className={`nav-link ${activeSection === section ? 'active' : ''}`}
              onClick={() => onSectionSelect(section)}
            >
              {section}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
