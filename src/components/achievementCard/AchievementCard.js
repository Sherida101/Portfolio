import React from "react";
import PropTypes from "prop-types";

export default function AchievementCard({ key, cardInfo }) {
  function openUrlInNewTab(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }

  return (
    <div className="certificate-card" key={key}>
      <div className="certificate-image-div">
        <img src={cardInfo.image} alt="image" className="card-image"></img>
      </div>
      <div className="certificate-detail-div">
        <h5 className="card-title">{cardInfo.title}</h5>
        <p className="card-subtitle">{cardInfo.description}</p>
      </div>
      <div className="certificate-card-footer">
        {cardInfo.footer.map((v, i) => {
          return (
            <p key={i} onClick={() => openUrlInNewTab(v.url)}>
              {v.name}
            </p>
          );
        })}
      </div>
    </div>
  );
}

AchievementCard.propTypes = {
  key: PropTypes.string.isRequired,
  cardInfo: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    footer: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
      }),
    ).isRequired,
  }).isRequired,
};
