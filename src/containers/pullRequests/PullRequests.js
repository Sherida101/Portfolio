import React, { Component } from "react";
import "./PullRequests.css";
import { motion } from "framer-motion";
import PullRequestCard from "../../components/pullRequestCard/PullRequestCard";
import pullRequestsData from "../../shared/opensource/pull_requests.json";
import PropTypes from "prop-types";
import { fadeInBottom20pxDuration2s } from "../../shared/constants";

class PullRequests extends Component {
  render() {
    const { theme } = this.props;
    const pullRequests = pullRequestsData["data"];
    return (
      <div>
        <div className="pull-requests-header-div">
          {/* Fade in from bottom effect */}
          <motion.div
            variants={fadeInBottom20pxDuration2s}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h1 className="pull-requests-header" style={{ color: theme.text }}>
              Pull Requests
            </h1>
          </motion.div>
        </div>
        <div className="pull-request-body-div">
          {pullRequests && pullRequests.length > 0 ? (
            pullRequests.map((pullRequest, index) => (
              <PullRequestCard key={index} pullRequest={pullRequest} />
            ))
          ) : (
            <p className="subTitle" style={{ color: theme.secondaryText }}>
              There are no pull requests to display.
            </p>
          )}
        </div>
      </div>
    );
  }
}

PullRequests.propTypes = {
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
export default PullRequests;
