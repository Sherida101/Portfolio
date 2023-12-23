import React, { Component } from "react";
import "./DegreeCard.css";
import "./Collapsible.css";
import { Fade, Flip } from "react-reveal";
import Collapsible from "./Collapsible"; //"react-collapsible";

class DegreeCard extends Component {
  render() {
    const degree = this.props.degree;
    const theme = this.props.theme;
    return (
      <div className="degree-card">
        {degree.logo_path && (
          <Flip left duration={2000}>
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
          </Flip>
        )}
        <Fade right duration={2000} distance="40px">
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
                {degree.descriptions.map((sentence) => {
                  return (
                    <p className="content-list" style={{ color: theme.text }}>
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
        </Fade>
      </div>
    );
  }
}

export default DegreeCard;
