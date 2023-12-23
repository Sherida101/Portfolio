import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import Educations from "../../containers/education/Educations";
import Certifications from "../../containers/certifications/Certifications";
import CompetitiveSites from "../../components/competitiveSites/CompetitiveSites";
import EducationImg from "./EducationImg";
import { competitiveSites } from "../../portfolio";
import "./EducationComponent.css";
import { Fade } from "react-reveal";

class Education extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="education-main">
        <Header theme={this.props.theme} />
        <div className="basic-education">
          <Fade bottom duration={2000} distance="40px">
            <div className="heading-text-div">
              <div className="heading-img-div">
                <h1 className="heading-text" style={{ color: theme.text }}>
                  Education
                  <EducationImg theme={theme} />
                </h1>
              </div>
            </div>

            <div className="heading-div">
              <Educations theme={this.props.theme} />
              <Certifications theme={this.props.theme} />
            </div>
          </Fade>
          <div className="heading-text-div">
            <h3 className="heading-sub-text" style={{ color: theme.text }}>
              Competitive Sites
            </h3>
            <CompetitiveSites logos={competitiveSites.competitiveSites} />
          </div>
        </div>
        <Footer theme={this.props.theme} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Education;
