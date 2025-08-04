import React from "react";
import "./PublicationCard.css";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { fadeInBottom40pxDuration2s } from "../../shared/constants";

export default function PublicationCard({ repo, theme }) {
  function openRepoinNewTab(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }

  return (
    <div
      className="publication-card-div"
      style={{ backgroundColor: theme.highlight }}
    >
      {/* Fade in from bottom effect */}
      <motion.div
        variants={fadeInBottom40pxDuration2s}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div key={repo.id} onClick={() => openRepoinNewTab(repo.url)}>
          <div className="publication-name-div">
            <p className="publication-name" style={{ color: theme.text }}>
              {repo.name}
            </p>
          </div>
          <p className="publication-description" style={{ color: theme.text }}>
            {repo.description}
          </p>
          <div className="publication-details">
            {repo.note && (
              <p
                className="publication-note"
                style={{ color: theme.secondaryText }}
              >
                {repo.note}
              </p>
            )}
            <p
              className="publication-creation-date subTitle"
              style={{ color: theme.secondaryText }}
            >
              Published on {repo.createdAt.split("T")[0]}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

PublicationCard.propTypes = {
  repo: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    note: PropTypes.string,
    url: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
  }),
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
