import React, { Component } from "react";
import "./Organisations.css";
import { motion } from "framer-motion";
import OrganisationList from "../../components/organisationList/OrganisationList";
import OrganisationsData from "../../shared/opensource/organisations.json";
import PropTypes from "prop-types";
import { fadeInBottom20pxDuration2s } from "../../shared/constants";

class Organisations extends Component {
  render() {
    const { theme } = this.props;
    return (
      <div id="organisations">
        <div className="organisations-header-div">
          {/* Fade in from bottom effect */}
          <motion.div
            variants={fadeInBottom20pxDuration2s}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h1 className="organisations-header" style={{ color: theme.text }}>
              Contributed Organisations
            </h1>
          </motion.div>
        </div>
        <OrganisationList logos={OrganisationsData["data"]} />
      </div>
    );
  }
}

Organisations.propTypes = {
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

export default Organisations;
