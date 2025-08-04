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
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { fadeInBottom40pxDuration2s } from "../../shared/constants";

class Education extends Component {
  render() {
    const { theme } = this.props;
    return (
      <div className="education-main">
        <Header theme={this.props.theme} />
        <div className="basic-education">
          {/* Fade in from bottom effect */}
          <motion.div
            variants={fadeInBottom40pxDuration2s}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
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
          </motion.div>
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

Education.propTypes = {
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

export default Education;
