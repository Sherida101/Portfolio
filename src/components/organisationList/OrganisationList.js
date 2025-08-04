import React, { Component } from "react";
import "./OrganisationList.css";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { fadeInBottom40pxDuration2s } from "../../shared/constants";

class OrganisationList extends Component {
  render() {
    const { logos } = this.props;
    return (
      <div className="organisations-main-div">
        <ul className="dev-icons-orgs">
          {logos.map((logo) => {
            return (
              <OverlayTrigger
                key={logo["login"]}
                placement={"top"}
                style={{ marginBottom: "5px" }}
                overlay={
                  <Tooltip id={`tooltip-top`}>
                    <strong>{logo["login"]}</strong>
                  </Tooltip>
                }
              >
                <li className="organisations-inline" name={logo["login"]}>
                  {/* Fade in from bottom effect */}
                  <motion.div
                    variants={fadeInBottom40pxDuration2s}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                  >
                    <img
                      className="organisations-img"
                      src={logo["avatarUrl"]}
                      alt={logo["login"]}
                    />
                  </motion.div>
                </li>
              </OverlayTrigger>
            );
          })}
        </ul>
      </div>
    );
  }
}

OrganisationList.propTypes = {
  logos: PropTypes.arrayOf(
    PropTypes.shape({
      login: PropTypes.string.isRequired,
      avatarUrl: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default OrganisationList;
