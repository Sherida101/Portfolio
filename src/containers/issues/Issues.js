import React, { Component } from "react";
import "./Issues.css";
import { motion } from "framer-motion";
import IssueCard from "../../components/issueCard/IssueCard";
import issuesData from "../../shared/opensource/issues.json";
import PropTypes from "prop-types";
import { fadeInBottom20pxDuration2s } from "../../shared/constants";

class Issues extends Component {
  render() {
    const { theme } = this.props;
    const issues = issuesData["data"];

    return (
      <div>
        <div className="issues-header-div">
          {/* Fade in from bottom effect */}
          <motion.div
            variants={fadeInBottom20pxDuration2s}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h1 className="issues-header" style={{ color: theme.text }}>
              Issues
            </h1>
          </motion.div>
        </div>
        <div className="issues-body-div">
          {issues && issues.length > 0 ? (
            issues.map((issue, index) => (
              <IssueCard key={index} issue={issue} />
            ))
          ) : (
            <p className="subTitle" style={{ color: theme.secondaryText }}>
              There are no issues to display.
            </p>
          )}
        </div>
      </div>
    );
  }
}

Issues.propTypes = {
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

export default Issues;
