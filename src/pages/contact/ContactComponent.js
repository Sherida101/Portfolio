import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
// import BlogsImg from "./BlogsImg";
// import AddressImg from "./AddressImg";
import { motion } from "framer-motion";
import "./ContactComponent.css";
import { greeting, contactPageData } from "../../portfolio.js";
import PropTypes from "prop-types";
import mailBox from "../../assets/images/mail.svg";
import { fadeInBottom40pxDuration1s } from "../../shared/constants";

const ContactData = contactPageData.contactSection;
// const blogSection = contactPageData.blogSection;
const addressSection = contactPageData.addressSection;
const phoneSection = contactPageData.phoneSection;

class Contact extends Component {
  render() {
    const { theme } = this.props;
    return (
      <div className="contact-main">
        <Header theme={theme} />
        <div className="basic-contact">
          {/* Fade in from bottom effect */}
          <motion.div
            variants={fadeInBottom40pxDuration1s}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="contact-heading-div">
              <div className="contact-heading-img-div">
                <img
                  className="transparent-img"
                  src={require(
                    `../../assets/images/${ContactData["profile_image_path"]}`,
                  )}
                  alt="Profile photo"
                />
              </div>
              <div className="contact-heading-text-div">
                <h1
                  className="contact-heading-text"
                  style={{ color: theme.text }}
                >
                  {ContactData["title"]}
                </h1>
                <div
                  className="contact-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {ContactData["description"].split("\n").map((item, index) => (
                    <p key={index}> {item} </p>
                  ))}
                </div>
                <SocialMedia theme={theme} />
                <div className="resume-btn-div">
                  <Button
                    text="View my CV (Google Drive)"
                    newTab={true}
                    href={greeting.cvLink}
                    theme={theme}
                  />
                </div>
              </div>
            </div>
          </motion.div>
          {/* Fade in from bottom effect */}
          <motion.div
            variants={fadeInBottom40pxDuration1s}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="address-heading-div">
              <div className="contact-heading-img-div">
                <img
                  style={{
                    width: "80%",
                    height: "80%",
                    transform: "scale(0.9)",
                  }}
                  src={mailBox}
                  alt="mailbox"
                />
                {/* <img
											src={require(`../../assets/images/${addressSection["avatar_image_path"]}`)}
											alt=""
										/> */}
                {/* <AddressImg theme={theme} /> */}
              </div>
              <div className="address-heading-text-div">
                <h1
                  className="address-heading-text"
                  style={{ color: theme.text }}
                >
                  {addressSection["title"]}
                </h1>
                <p
                  className="contact-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {addressSection["subtitle"]}
                </p>
                <h1
                  className="address-heading-text"
                  style={{ color: theme.text }}
                >
                  {/* {phoneSection["title"]} */}
                </h1>
                <p
                  className="contact-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                  title={phoneSection["subtitle"]}
                >
                  {phoneSection["subtitle"]}
                </p>
                <div className="address-btn-div">
                  <Button
                    text="Visit on Google Maps"
                    newTab={true}
                    href={addressSection.location_map_link}
                    theme={theme}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

Contact.propTypes = {
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
  onToggle: PropTypes.func,
};
export default Contact;
