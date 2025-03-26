import React from "react";
import "./Sidebar.css";

const Sidebar = ({ sections, activeComponentIndex, onDotClick }) => {
  return (
    <div>
      {/* Dots Navigation */}
      <div className="dots-container">
        {sections.map((section, index) => (
          <div
            key={index}
            className={`dot ${activeComponentIndex === index ? "active" : ""}`}
            onClick={() => onDotClick(index)} // Trigger the click event to show the selected component
          />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
