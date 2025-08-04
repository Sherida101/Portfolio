import React from "react";
import "./TalkCard.css";
import PropTypes from "prop-types";

export default function TalkCard({ key, talkDetails }) {
  return (
    <div>
      <div className="container" key={key}>
        <div className="rectangle">
          <div className="diagonal-fill"></div>
          <div className="talk-card-title">{talkDetails.title}</div>
          <p className="talk-card-subtitle">{talkDetails.subtitle}</p>

          <div className="card-footer-button-div">
            <a href={talkDetails.slides_url} target="_" className="talk-button">
              Slides
            </a>
            <a href={talkDetails.event_url} target="_" className="talk-button">
              Event
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

TalkCard.propTypes = {
  key: PropTypes.int.isRequired,
  talkDetails: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    slides_url: PropTypes.string.isRequired,
    event_url: PropTypes.string.isRequired,
  }).isRequired,
};
