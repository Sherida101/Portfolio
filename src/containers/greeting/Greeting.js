import React from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
// import Button from "../../components/button/Button";
import { greeting } from "../../portfolio";
import { motion } from "framer-motion";
// import FeelingProud from "./FeelingProud";
import PropTypes from "prop-types";
import programmerImage from "../../assets/images/programmer3.svg";
import {
  fadeInBottom40pxDuration2s,
  ColouredLine,
} from "../../shared/constants";

export default function Greeting(props) {
  const { theme } = props;

  return (
    // Fade in from bottom effect
    <motion.div
      variants={fadeInBottom40pxDuration2s}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1 className="greeting-text" style={{ color: theme.text }}>
                {greeting.title}
              </h1>
              <h2
                className="greeting-currentJobStatus"
                style={{ color: theme.text }}
              >
                {greeting.currentJobStatus}
              </h2>
              <p
                className="greeting-text-p subTitle"
                style={{ color: theme.secondaryText }}
              >
                {greeting.subTitle}
              </p>
              <p
                className="greeting-text-p subTitle"
                style={{ color: theme.secondaryText }}
              >
                {greeting.subTitle2}
              </p>
              <SocialMedia theme={theme} />
              {/* <div className="portfolio-repo-btn-div">
                <Button
                  text="⭐ Star Me On Github"
                  newTab={true}
                  href={greeting.portfolio_repository}
                  theme={theme}
                  className="portfolio-repo-btn"
                />
              </div> */}
              {/* <div className="button-greeting-div">
              <Button text="Contact me" href="#contact" />
              <Button text="See my resume" newTab={true} href={greeting.cvLink} />
            </div> */}
            </div>
          </div>

          <div className="greeting-image-div">
            <img alt="aspirations" src={programmerImage}></img>
            {/* <FeelingProud theme={theme} /> */}
          </div>
        </div>
      </div>
      <ColouredLine color="#cedcee"></ColouredLine>
    </motion.div>
  );
}

Greeting.propTypes = {
  theme: PropTypes.shape({
    text: PropTypes.string.isRequired,
    secondaryText: PropTypes.string.isRequired,
  }).isRequired,
};
