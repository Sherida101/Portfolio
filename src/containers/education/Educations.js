import React, { Component } from "react";
import "./Educations.css";
import DegreeCard from "../../components/degreeCard/DegreeCard.js";
import { degrees } from "../../portfolio";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { fadeInBottom20pxDuration2s } from "../../shared/constants";

class Educations extends Component {
  render() {
    const { theme } = this.props;
    return (
      <div className="main" id="educations" style={{ marginTop: 0 }}>
        <div className="educations-header-div">
          {/* Fade in from bottom effect */}
          <motion.div
            variants={fadeInBottom20pxDuration2s}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h1 className="educations-header" style={{ color: theme.text }}>
              Qualifications
            </h1>
          </motion.div>
        </div>
        <div className="educations-body-div">
          {degrees.degrees.map((degree, index) => {
            return <DegreeCard key={index} degree={degree} theme={theme} />;
          })}
        </div>
      </div>
    );
  }
}

Educations.propTypes = {
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

export default Educations;
