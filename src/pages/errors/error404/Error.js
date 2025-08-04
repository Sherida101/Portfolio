import React, { Component } from "react";
import Header from "../../../components/header/Header";
import Footer from "../../../components/footer/Footer";
import TopButton from "../../../components/topButton/TopButton";
import { motion } from "framer-motion";
import "./Error.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { fadeInBottom40pxDuration2s } from "../../../shared/constants";

export default class Error extends Component {
  render() {
    const { theme } = this.props;
    return (
      <div className="error-main">
        <Header theme={theme} />
        <div className="error-class">
          {/* Fade in from bottom effect */}
          <motion.div
            variants={fadeInBottom40pxDuration2s}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h1>Woops</h1>
            <h1 className="error-404">404</h1>
            <p>The requested page is unavailable at the moment!</p>
            <Link
              className="main-button"
              to="/home"
              style={{
                color: theme.body,
                backgroundColor: theme.text,
                border: `solid 1px ${theme.text}`,
                display: "inline-flex",
              }}
            >
              Go Home
            </Link>
          </motion.div>
        </div>
        <Footer theme={this.props.theme} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

Error.propTypes = {
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
