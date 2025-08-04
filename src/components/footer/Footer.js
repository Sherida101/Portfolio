import React from "react";
import "./Footer.css";
import { motion } from "framer-motion";
import { greeting } from "../../portfolio.js";
import PropTypes from "prop-types";
import { fadeVariant } from "../../shared/constants.js";
export default function Footer(props) {
  return (
    <div className="footer-div">
      {/* Fade effect (basic fade-in effect) */}
      <motion.div
        variants={fadeVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <p className="footer-text" style={{ color: props.theme.secondaryText }}>
          &copy; {greeting.footer}
        </p>
      </motion.div>
    </div>
  );
}

Footer.propTypes = {
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
