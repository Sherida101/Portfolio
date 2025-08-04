import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import OpensourceCharts from "../../containers/opensourceCharts/OpensourceCharts";
import Organisations from "../../containers/organisations/Organisations";
import PullRequests from "../../containers/pullRequests/PullRequests";
import Issues from "../../containers/issues/Issues";
import TopButton from "../../components/topButton/TopButton";
import PropTypes from "prop-types";
import "./Opensource.css";

class Opensource extends Component {
  render() {
    const { theme, onToggle } = this.props;
    return (
      <div className="opensource-main">
        <Header theme={theme} />
        <Organisations theme={theme} />
        <OpensourceCharts theme={theme} />
        <PullRequests theme={theme} />
        <Issues theme={theme} />
        <Footer theme={theme} onToggle={onToggle} />
        <TopButton theme={theme} />
      </div>
    );
  }
}

Opensource.propTypes = {
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

export default Opensource;
