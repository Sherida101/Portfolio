import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import ExperienceAccordion from "../../containers/experienceAccordion/ExperienceAccordion.js";
import "./Experience.css";
import { experience } from "../../portfolio.js";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import careerProgress from "../../assets/images/career_progress.svg";
import { fadeInBottom40pxDuration2s } from "../../shared/constants";

class Experience extends Component {
  render() {
    const { theme } = this.props;
    return (
      <div className="experience-main">
        <Header theme={theme} />
        <div className="basic-experience">
          {/* Fade in from bottom effect */}
          <motion.div
            variants={fadeInBottom40pxDuration2s}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="experience-heading-div">
              <br></br>
              <br />
              <div className="experience-heading-img-div">
                <img src={careerProgress} alt="career-progress" />
                {/*  <img 
									src={require(`../../assets/images/${experience["career_progress.svg"]}`)}
									alt=""
								/>  */}
                {/* <ExperienceImg theme={theme} /> */}
              </div>
              <div className="experience-heading-text-div">
                <h1
                  className="experience-heading-text"
                  style={{ color: theme.text }}
                >
                  {experience.title}
                </h1>
                <h3
                  className="experience-heading-sub-text"
                  style={{ color: theme.text }}
                >
                  {experience["subtitle"]}
                </h3>
                <div
                  className="experience-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {experience["description"].split("\n").map((item, index) => (
                    <p key={index}> {item} </p>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        <ExperienceAccordion sections={experience["sections"]} theme={theme} />
        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

Experience.propTypes = {
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
  onToggle: PropTypes.func,
};

export default Experience;
