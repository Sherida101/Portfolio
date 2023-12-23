import React, { Component } from "react";
import "./Skills.css";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import { skills } from "../../portfolio";
import { Fade } from "react-reveal";
import DataScienceImg from "./DataScienceImg";
import FullStackDevImg from "./FullStackDevImg";
// import DBManagementImg from "./DBManagementImg";
import GraphicDesignImg from "./GraphicDesignImg";

function GetSkillSvg(props) {
  if (props.fileName === "DataScienceImg")
    return <DataScienceImg theme={props.theme} />;
  else if (props.fileName === "FullStackDevImg")
    return <FullStackDevImg theme={props.theme} />;
  else if (props.fileName === "DBManagementImg")
    // return <DBManagementImg theme={props.theme} />;
    return (
      <img
        width="500"
        height="500"
        alt="Database icon"
        style={{ marginLeft: "150px" }}
        src={require("../../assets/images/database_img.png")}
      ></img>
    );
  else if (props.fileName === "MobileAppDevelopmentImg")
    return (
      <img
        alt="Project management"
        src={require("../../assets/images/mobile_development.svg")}
      ></img>
    );
  else if (props.fileName === "ProjectManagementImg")
    return (
      <img
        alt="Project management"
        src={require("../../assets/images/project_management.svg")}
      ></img>
    );
  return <GraphicDesignImg theme={props.theme} />;
}

class SkillSection extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div>
        {skills.data.map((skill) => {
          return (
            <div className="skills-main-div">
              <Fade left duration={2000}>
                <div className="skills-image-div">
                  {/* <img
                    alt="Aaliyah is Analysing Data"
                    src={require(`../../assets/images/${skill.imagePath}`)}
                  ></img> */}
                  <GetSkillSvg fileName={skill.fileName} theme={theme} />
                </div>
              </Fade>

              <div className="skills-text-div">
                <Fade right duration={1000}>
                  <h1 className="skills-heading" style={{ color: theme.text }}>
                    {skill.title}
                  </h1>
                </Fade>
                <Fade right duration={1500}>
                  <SoftwareSkill logos={skill.softwareSkills} />
                </Fade>
                <Fade right duration={2000}>
                  <div>
                    {skill.skills.map((skillSentence) => {
                      return (
                        <p
                          className="subTitle skills-text"
                          style={{ color: theme.secondaryText }}
                        >
                          {skillSentence}
                        </p>
                      );
                    })}
                  </div>
                </Fade>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default SkillSection;
