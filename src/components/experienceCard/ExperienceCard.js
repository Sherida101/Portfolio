import React, { Component } from "react";
import PropTypes from "prop-types";
import "./ExperienceCard.css";

class ExperienceCard extends Component {
  render() {
    const { theme, experience } = this.props;
    return (
      <div
        className="experience-card"
        style={{ border: `1px solid ${experience["color"]}` }}
      >
        <div className="experience-card-logo-div">
          <img
            className="experience-card-logo"
            src={require(`../../assets/images/${experience["logo_path"]}`)}
            alt=""
          />
        </div>
        <div className="experience-card-body-div">
          <div className="experience-card-header-div">
            <div className="experience-card-heading-left">
              <h3
                className="experience-card-title"
                style={{ color: theme.text }}
              >
                {experience["title"]}
              </h3>
              <p
                className="experience-card-company"
                style={{ color: theme.text }}
              >
                <a
                  href={experience["company_url"]}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {experience["company"]}
                </a>
              </p>
            </div>
            <div className="experience-card-heading-right">
              <p
                className="experience-card-duration"
                style={{ color: theme.secondaryText }}
              >
                {experience["duration"]}
              </p>
              <p
                className="experience-card-location"
                style={{ color: theme.secondaryText }}
              >
                {experience["location"]}
              </p>
            </div>
          </div>
          <p
            className="experience-card-description"
            style={{ color: theme.text }}
          >
            {Array.isArray(experience.description)
              ? experience.description.map((item, index) => (
                  <p key={index}>{"\u273F " + item}</p>
                ))
              : experience.description
                  .split("\n")
                  .map((item, index) => <p key={index}>{"\u273F " + item}</p>)}
          </p>
        </div>
      </div>
    );
  }
}

ExperienceCard.propTypes = {
  experience: PropTypes.shape({
    title: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    company_url: PropTypes.string.isRequired,
    logo_path: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    description: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.string),
    ]).isRequired,
    color: PropTypes.string.isRequired,
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

export default ExperienceCard;
