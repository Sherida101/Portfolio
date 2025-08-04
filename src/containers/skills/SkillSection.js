import React, { Component } from "react";
import "./Skills.css";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import { skills } from "../../portfolio";
import { motion } from "framer-motion";
import DataScienceImg from "./DataScienceImg";
import FullStackDevImg from "./FullStackDevImg";
// import DBManagementImg from "./DBManagementImg";
import GraphicDesignImg from "./GraphicDesignImg";
import UIDesignImg from "./UIDesignImg";
import UXDesignImg from "./UXDesignImg";
import PropTypes from "prop-types";
import mobileDevelopment from "../../assets/images/mobile_development.svg";
import projectManagement from "../../assets/images/project_management.svg";
import {
  fadeLeft20pxDuration2s,
  fadeRight20pxDuration2s,
  fadeRight20pxDuration15s,
} from "../../shared/constants";

function GetSkillSvg(props) {
  if (props.fileName === "DataScienceImg")
    return <DataScienceImg theme={props.theme} />;
  else if (props.fileName === "FullStackDevImg")
    return <FullStackDevImg theme={props.theme} />;
  else if (props.fileName === "UXDesignImg")
    return <UXDesignImg theme={props.theme} />;
  else if (props.fileName === "UIDesignImg")
    return <UIDesignImg theme={props.theme} />;
  else if (props.fileName === "DBManagementImg")
    // return <DBManagementImg theme={props.theme} />;
    return (
      <img
        width="400"
        height="400"
        alt="Database icon"
        style={{ marginLeft: "150px" }}
        src={require("../../assets/images/database_img.png")}
      ></img>
    );
  else if (props.fileName === "MobileAppDevelopmentImg")
    return (
      <img alt="Mobile application development" src={mobileDevelopment}></img>
    );
  else if (props.fileName === "ProjectManagementImg")
    return <img alt="Project management" src={projectManagement}></img>;
  return <GraphicDesignImg theme={props.theme} />;
}

GetSkillSvg.propTypes = {
  fileName: PropTypes.string.isRequired,
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

class SkillSection extends Component {
  render() {
    const { theme } = this.props;
    return (
      <div>
        {skills.data.map((skill, index) => {
          return (
            <div className="skills-main-div" key={index}>
              {/* Fade left effect */}
              <motion.div
                variants={fadeLeft20pxDuration2s}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }} // animate once when 30% visible
              >
                <div className="skills-image-div">
                  <GetSkillSvg fileName={skill.fileName} theme={theme} />
                </div>
              </motion.div>

              <div className="skills-text-div">
                {/* Fade right effect */}
                <motion.div
                  variants={fadeRight20pxDuration2s}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <h1 className="skills-heading" style={{ color: theme.text }}>
                    {skill.title}
                  </h1>
                </motion.div>

                {/* Fade right effect */}
                <motion.div
                  variants={fadeRight20pxDuration15s}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <SoftwareSkill logos={skill.softwareSkills} />
                </motion.div>

                {/* Fade right effect */}
                <motion.div
                  variants={fadeRight20pxDuration2s}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <div>
                    {skill.skills.map((skillSentence, idx) => {
                      return (
                        <p
                          key={idx}
                          className="subTitle skills-text"
                          style={{ color: theme.secondaryText }}
                        >
                          {skillSentence}
                        </p>
                      );
                    })}
                  </div>
                </motion.div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

SkillSection.propTypes = {
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

export default SkillSection;
