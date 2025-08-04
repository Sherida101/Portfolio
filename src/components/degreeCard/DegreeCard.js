import React, { Component } from "react";
import PropTypes from "prop-types";
import "./DegreeCard.css";
import "./Collapsible.css";
import { motion } from "framer-motion";
import Collapsible from "./Collapsible"; //"react-collapsible";
import {
  flipLeftVariant,
  fadeRight40pxDuration2s,
} from "../../shared/constants";
class DegreeCard extends Component {
  render() {
    const { degree, theme } = this.props;
    return (
      <div className="degree-card">
        {degree.logo_path && (
          // Flip left effect
          <motion.div
            variants={flipLeftVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div style={{ backfaceVisibility: "hidden" }}>
              <div className="card-img">
                <img
                  style={{
                    maxWidth: "100%",
                    maxHeight: "100%",
                    transform: "scale(0.9)",
                  }}
                  src={require(`../../assets/images/${degree.logo_path}`)}
                  alt={degree.alt_name}
                />
              </div>
            </div>
          </motion.div>
        )}

        {/* Fade right effect */}
        <motion.div
          variants={fadeRight40pxDuration2s}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div
            className="card-body"
            style={{ width: degree.logo_path ? "90%" : "100%" }}
          >
            {/* <div
              className="body-header"
              style={{ backgroundColor: theme.headerColor }}
            >
              <div className="body-header-title">
                <h2 className="card-title" style={{ color: theme.text }}>
                  {degree.title}
                </h2>
                <h3 className="card-subtitle" style={{ color: theme.text }}>
                  {degree.subtitle}
                </h3>
              </div>
              <div className="body-header-duration">
                <h3 className="duration" style={{ color: theme.text }}>
                  {degree.duration}
                </h3>
              </div>
            </div> */}

            <Collapsible
              // trigger={degree.title}
              triggerElementProps={{ degree: degree, theme: theme }}
              triggerStyle={{ backgroundColor: theme.headerColor }}
              onOpen={() => {
                document.getElementsByClassName("card-img")[0].style.width =
                  "200px";
              }}
              onClose={() => {
                document.getElementsByClassName("card-img")[0].style.width =
                  "100px";
              }}
            >
              <div className="body-content">
                {degree.descriptions.map((sentence, index) => {
                  return (
                    <p
                      key={index}
                      className="content-list"
                      style={{ color: theme.text }}
                    >
                      {sentence}
                    </p>
                  );
                })}
                {degree.website_link && (
                  <a
                    href={degree.website_link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div
                      className="visit-btn"
                      style={{ backgroundColor: theme.headerColor }}
                    >
                      <p className="btn" style={{ color: theme.text }}>
                        Visit Website
                      </p>
                    </div>
                  </a>
                )}
              </div>
            </Collapsible>
          </div>
        </motion.div>
      </div>
    );
  }
}

DegreeCard.propTypes = {
  degree: PropTypes.shape({
    logo_path: PropTypes.string,
    alt_name: PropTypes.string,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    descriptions: PropTypes.arrayOf(PropTypes.string).isRequired,
    website_link: PropTypes.string,
  }).isRequired,
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

export default DegreeCard;
