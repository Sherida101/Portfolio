import React, { Component } from "react";
import ExperienceCard from "../../components/experienceCard/ExperienceCard.js";
import "./ExperienceAccordion.css";
import { Accordion, Panel } from "baseui/accordion";
import PropTypes from "prop-types";

class ExperienceAccordion extends Component {
  render() {
    const { theme, sections } = this.props;
    return (
      <div className="experience-accord">
        <Accordion>
          {sections.map((section, index) => {
            return (
              <Panel
                className="accord-panel"
                title={section["title"]}
                key={`${index}-${section.title}`}
                overrides={{
                  Header: {
                    style: () => ({
                      backgroundColor: `${theme.body}`,
                      border: `1px solid ${theme.headerColor}`,
                      borderRadius: `5px`,
                      marginBottom: `3px`,
                      fontFamily: "Google Sans Regular",
                    }),
                  },
                  Content: {
                    style: () => ({
                      backgroundColor: `${theme.body}`,
                    }),
                  },
                }}
              >
                {section["experiences"].map((experience, index) => {
                  return (
                    <ExperienceCard
                      experience={experience}
                      theme={theme}
                      key={`${experience.company}-${experience.duration}-${index}`}
                    />
                  );
                })}
              </Panel>
            );
          })}
        </Accordion>
      </div>
    );
  }
}

ExperienceAccordion.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      experiences: PropTypes.arrayOf(
        PropTypes.shape({
          jobTitle: PropTypes.string,
          company: PropTypes.string.isRequired,
          duration: PropTypes.string.isRequired,
          description: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.arrayOf(PropTypes.string),
          ]).isRequired,
        }),
      ).isRequired,
    }),
  ).isRequired,
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

export default ExperienceAccordion;
