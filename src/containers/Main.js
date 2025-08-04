import React, { Component } from "react";
import { Route, Routes, HashRouter } from "react-router-dom";
import Home from "../pages/home/HomeComponent";
import Splash from "../pages/splash/Splash";
import Education from "../pages/education/EducationComponent";
import Experience from "../pages/experience/Experience";
import Opensource from "../pages/opensource/Opensource";
import Contact from "../pages/contact/ContactComponent";
import Projects from "../pages/projects/Projects";
import { settings } from "../portfolio.js";
import Error404 from "../pages/errors/error404/Error";
import PropTypes from "prop-types";
export default class Main extends Component {
  render() {
    const { theme } = this.props;
    if (settings.isSplash) {
      return (
        <div>
          <HashRouter basename="/">
            <Routes>
              <Route path="/" element={<Splash theme={theme} />} />
              <Route path="/home" element={<Home theme={theme} />} />
              <Route
                path="/experience"
                element={<Experience theme={theme} />}
              />
              <Route path="/education" element={<Education theme={theme} />} />
              <Route
                path="/opensource"
                element={<Opensource theme={theme} />}
              />
              <Route path="/contact" element={<Contact theme={theme} />} />
              <Route path="/splash" element={<Splash theme={theme} />} />
              <Route path="/projects" element={<Projects theme={theme} />} />
              <Route path="*" element={<Error404 theme={theme} />} />
            </Routes>
          </HashRouter>
        </div>
      );
    } else {
      return (
        <div>
          <HashRouter basename="/">
            <Routes>
              <Route path="/" element={<Home theme={theme} />} />
              <Route path="/home" element={<Home theme={theme} />} />
              <Route
                path="/experience"
                element={<Experience theme={theme} />}
              />
              <Route path="/education" element={<Education theme={theme} />} />
              <Route
                path="/opensource"
                element={<Opensource theme={theme} />}
              />
              <Route path="/contact" element={<Contact theme={theme} />} />
              {/* <Route
							path="/splash"
							element={<Splash theme={theme} />}
						/> */}
              <Route path="/projects" element={<Projects theme={theme} />} />
            </Routes>
          </HashRouter>
        </div>
      );
    }
  }
}

Main.propTypes = {
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
