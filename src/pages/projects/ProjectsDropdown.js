import React, { useState, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";
import "./Projects.css";
import PropTypes from "prop-types";

const ProjectsDropdown = ({ theme, projects }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setIsOpen((prev) => !prev);
  const closeDropdown = () => setIsOpen(false);

  //   const onMouseEnter = (event, color, bgColor) => {
  //     const el = event.target;
  //     el.style.color = color;
  //     el.style.backgroundColor = bgColor;
  //   };

  //   const onMouseOut = (event, color, bgColor) => {
  //     const el = event.target;
  //     el.style.color = color;
  //     el.style.backgroundColor = bgColor;
  //   };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "2rem" }}
    >
      <div className="dropdown-container" ref={dropdownRef}>
        <button
          onClick={toggleDropdown}
          className="project-button"
          //   onMouseEnter={(event) => onMouseEnter(event, theme.text, theme.body)}
          //   onMouseOut={(event) => onMouseOut(event, theme.body, theme.text)}
          style={{
            color: theme.body,
            backgroundColor: theme.text,
            border: `solid 1px ${theme.text}`,
          }}
        >
          More Projects <ChevronDown size={20} />
        </button>
        {isOpen && (
          <div className="dropdown-menu">
            {Object.entries(projects).map(([label, url], idx, arr) => (
              <React.Fragment key={label}>
                <a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="dropdown-link"
                  style={{ color: theme.text }}
                  onClick={closeDropdown}
                >
                  {label}
                </a>
                {idx < arr.length - 1 && <div className="dropdown-divider" />}
              </React.Fragment>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

ProjectsDropdown.propTypes = {
  projects: PropTypes.object.isRequired,
  theme: PropTypes.shape({
    body: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    highlight: PropTypes.string.isRequired,
    dark: PropTypes.string.isRequired,
    secondaryText: PropTypes.string.isRequired,
    imageHighlight: PropTypes.string.isRequired,
    compImgHighlight: PropTypes.string.isRequired,
    jacketColor: PropTypes.string.isRequired,
    headerColor: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProjectsDropdown;
