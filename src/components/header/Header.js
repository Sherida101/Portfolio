import React, { Component } from "react";
import "./Header.css";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { greeting, settings } from "../../portfolio.js";
import SeoHeader from "../seoHeader/SeoHeader";
import PropTypes from "prop-types";
import { fadeInTop20pxDuration1s } from "../../shared/constants.js";

const onMouseEnter = (event, color) => {
  const el = event.target;
  el.style.backgroundColor = color;
};

const onMouseOut = (event) => {
  const el = event.target;
  el.style.backgroundColor = "transparent";
};

class Header extends Component {
  render() {
    const theme = this.props.theme;
    const link = settings.isSplash ? "/splash" : "home";
    return (
      // Fade in from top effect
      <motion.div
        variants={fadeInTop20pxDuration1s}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <SeoHeader />
        <div>
          <header className="header">
            <NavLink to={link} className="logo">
              <span style={{ color: theme.text }}> &lt;</span>
              <span className="logo-name" style={{ color: theme.text }}>
                {greeting.logo_name}
              </span>
              <span style={{ color: theme.text }}>/&gt;</span>
            </NavLink>
            <input className="menu-btn" type="checkbox" id="menu-btn" />
            <label className="menu-icon" htmlFor="menu-btn">
              <span className="navicon"></span>
            </label>
            <ul className="menu" style={{ backgroundColor: theme.body }}>
              {/* Home nav item */}
              <li>
                <NavLink
                  to="/home"
                  style={({ isActive }) => ({
                    color: theme.text,
                    fontWeight: isActive ? "bold" : "normal",
                  })}
                  onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                  onMouseOut={(event) => onMouseOut(event)}
                >
                  Home
                </NavLink>
              </li>
              {/* Projects nav item */}
              <li>
                <NavLink
                  to="/projects"
                  style={({ isActive }) => ({
                    color: theme.text,
                    fontWeight: isActive ? "bold" : "normal",
                  })}
                  onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                  onMouseOut={(event) => onMouseOut(event)}
                >
                  Projects
                </NavLink>
              </li>
              {/* Open Source nav item */}
              <li>
                <NavLink
                  to="/opensource"
                  style={({ isActive }) => ({
                    color: theme.text,
                    fontWeight: isActive ? "bold" : "normal",
                  })}
                  onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                  onMouseOut={(event) => onMouseOut(event)}
                >
                  Open Source
                </NavLink>
              </li>
              {/* Experience nav item */}
              <li>
                <NavLink
                  to="/experience"
                  style={({ isActive }) => ({
                    color: theme.text,
                    fontWeight: isActive ? "bold" : "normal",
                  })}
                  onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                  onMouseOut={(event) => onMouseOut(event)}
                >
                  Experience
                </NavLink>
              </li>
              {/* Education nav item */}
              <li>
                <NavLink
                  to="/education"
                  style={({ isActive }) => ({
                    color: theme.text,
                    fontWeight: isActive ? "bold" : "normal",
                  })}
                  onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                  onMouseOut={(event) => onMouseOut(event)}
                >
                  Education
                </NavLink>
              </li>
              {/* Contact Me nav item */}
              <li>
                <NavLink
                  to="/contact"
                  style={({ isActive }) => ({
                    color: theme.text,
                    fontWeight: isActive ? "bold" : "normal",
                  })}
                  onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                  onMouseOut={(event) => onMouseOut(event)}
                >
                  Contact Me
                </NavLink>
              </li>
            </ul>
          </header>
        </div>
      </motion.div>
    );
  }
}

Header.propTypes = {
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

export default Header;
