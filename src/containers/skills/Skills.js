import React from "react";
import "./Skills.css";
import SkillSection from "./SkillSection";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { fadeInBottom20pxDuration2s } from "../../shared/constants";

export default function Skills({ theme }) {
  return (
    <div className="main" id="skills">
      <div className="skills-header-div">
        {/* Fade in from bottom effect */}
        <motion.div
          variants={fadeInBottom20pxDuration2s}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h1 className="skills-header" style={{ color: theme.text }}>
            Competencies & Skills
          </h1>
        </motion.div>
      </div>
      <SkillSection theme={theme} />
    </div>
  );
}

Skills.propTypes = {
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
