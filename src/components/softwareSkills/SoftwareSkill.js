import React from "react";
import "./SoftwareSkill.css";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import PropTypes from "prop-types";

class SoftwareSkill extends React.Component {
  render() {
    const { logos } = this.props;
    return (
      <div>
        <div className="software-skills-main-div">
          <ul className="dev-icons">
            {/* {skillsSection.softwareSkills.map(skills => {
            return (
              <li className="software-skill-inline" name={skills.skillName}>
                <i className={skills.fontAwesomeClassname}></i>
              </li>
            );
          })} */}
            {logos.map((logo) => {
              return (
                <OverlayTrigger
                  key={logo.skillName}
                  placement={"top"}
                  overlay={
                    <Tooltip id={`tooltip-top`}>
                      <strong>{logo.skillName}</strong>
                    </Tooltip>
                  }
                >
                  <li className="software-skill-inline" name={logo.skillName}>
                    <span
                      className="iconify"
                      data-icon={logo.fontAwesomeClassname}
                      style={logo.style}
                      data-inline="false"
                    ></span>
                  </li>
                </OverlayTrigger>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

SoftwareSkill.propTypes = {
  logos: PropTypes.arrayOf(
    PropTypes.shape({
      logo_path: PropTypes.string,
      alt_name: PropTypes.string,
      title: PropTypes.string,
      subtitle: PropTypes.string,
      duration: PropTypes.string,
      descriptions: PropTypes.arrayOf(PropTypes.string),
      website_link: PropTypes.string,
    }),
  ),
};
export default SoftwareSkill;
