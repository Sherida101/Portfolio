import React, { Component } from "react";
import PullRequestChart from "../../components/pullRequestChart/PullRequestChart.js";
import IssueChart from "../../components/issueChart/IssueChart.js";
import { motion } from "framer-motion";
import "./OpensourceCharts.css";
import PropTypes from "prop-types";
import { fadeInBottom20pxDuration2s } from "../../shared/constants";

class OpensourceCharts extends Component {
  render() {
    const { theme } = this.props;
    return (
      <div className="main-div">
        <div className="os-charts-header-div">
          {/* Fade in from bottom effect */}
          <motion.div
            variants={fadeInBottom20pxDuration2s}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h1 className="os-charts-header" style={{ color: theme.text }}>
              Contributions
            </h1>
          </motion.div>
        </div>
        <div className="os-charts-body-div">
          <PullRequestChart />
          <IssueChart />
        </div>
      </div>
    );
  }
}

OpensourceCharts.propTypes = {
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

export default OpensourceCharts;
