import React, { Component } from "react";
import "./Certifications.css";
import { motion } from "framer-motion";
import { certifications } from "../../portfolio";
import CertificationCard from "../../components/certificationCard/CertificationCard";
import PropTypes from "prop-types";
import { fadeInBottom20pxDuration2s } from "../../shared/constants";
class Certifications extends Component {
  render() {
    const { theme } = this.props;
    return (
      <div className="main" id="certs" style={{ marginTop: 0 }}>
        <div className="certs-header-div">
          {/* Fade in from bottom effect */}
          <motion.div
            variants={fadeInBottom20pxDuration2s}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h1 className="certs-header" style={{ color: theme.text }}>
              Certifications
            </h1>
          </motion.div>
        </div>
        <div className="certs-body-div">
          {certifications.certifications.map((cert, index) => {
            return (
              <CertificationCard key={index} certificate={cert} theme={theme} />
            );
          })}
        </div>
      </div>
    );
  }
}

Certifications.propTypes = {
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

export default Certifications;
