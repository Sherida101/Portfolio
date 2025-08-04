import React, { useState, useEffect } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import GithubRepoCard from "../../components/githubRepoCard/GithubRepoCard";
import PublicationCard from "../../components/publicationsCard/PublicationCard";
import Button from "../../components/button/Button";
import TopButton from "../../components/topButton/TopButton";
import { motion } from "framer-motion";
import {
  greeting,
  projectsHeader,
  publicationsHeader,
} from "../../portfolio.js";
import ProjectsData from "../../shared/opensource/projects.json";
import backupPublications from "../../shared/opensource/publications.json";
import PropTypes from "prop-types";
import "./Projects.css";
import ProjectsImg from "./ProjectsImg";
import {
  fadeInBottom40pxDuration2s,
  ColouredLine,
} from "../../shared/constants.js";
import ProjectsDropdown from "./ProjectsDropdown";

const Projects = ({ theme, onToggle }) => {
  const otherProjectsEntries = Object.entries(projectsHeader.otherProjects);
  const displayLimit = 10;
  const ORCID_ID = "0000-0002-4348-7387";
  const [orcidPubs, setOrcidPubs] = useState([]);

  useEffect(() => {
    const API_URL = `https://pub.orcid.org/v3.0/${ORCID_ID}/works`;

    let controller = new AbortController();

    const fetchFromORCID = async () => {
      try {
        const res = await fetch(API_URL, {
          headers: { Accept: "application/xml" },
          signal: controller.signal,
        });
        const xmlText = await res.text();

        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlText, "application/xml");
        const workSummaries = xmlDoc.getElementsByTagName("work:work-summary");

        const parsedPubs = Array.from(workSummaries).map((work, i) => {
          const title =
            work.getElementsByTagName("common:title")[0]?.textContent;
          const pubType =
            work.getElementsByTagName("common:work-type")[0]?.textContent ||
            "Publication";
          const url = work.getElementsByTagName("common:url")[0]?.textContent;
          const year = work.getElementsByTagName("common:year")[0]?.textContent;
          const journal =
            work.getElementsByTagName("work:journal-title")[0]?.textContent;
          const doi = Array.from(
            work.getElementsByTagName("common:external-id"),
          )
            .find(
              (id) =>
                id.getElementsByTagName("common:external-id-type")[0]
                  ?.textContent === "doi",
            )
            ?.getElementsByTagName("common:external-id-value")[0]?.textContent;

          return {
            id: `${i}`,
            name: title || "Untitled",
            type: pubType,
            url: url || (doi ? `https://doi.org/${doi}` : "#"),
            description: journal || "",
            createdAt: year ? `${year}-01-01` : "N/A",
          };
        });

        // Compare with backup
        const localTitles = backupPublications.data.map((pub) => pub.name);
        const newPubs = parsedPubs.filter(
          (pub) => !localTitles.includes(pub.name),
        );

        if (newPubs.length > 0) {
          console.log("🔄 New publications detected:", newPubs.length);
          // You can implement a manual or automated update step here
        }

        setOrcidPubs(parsedPubs);
      } catch (error) {
        console.warn("⚠️ ORCID fetch failed, using local backup.");
        setOrcidPubs(backupPublications.data);
      }
    };

    fetchFromORCID();

    return () => controller.abort();
  }, []);

  // Limit the number of projects displayed
  const limitedPubs = orcidPubs.slice(0, displayLimit);

  return (
    <div className="projects-main">
      <Header theme={theme} />
      <div className="basic-projects">
        {/* Fade in from bottom effect */}
        <motion.div
          variants={fadeInBottom40pxDuration2s}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="projects-heading-div">
            <div className="projects-heading-img-div">
              <ProjectsImg theme={theme} />
            </div>
            <div className="projects-heading-text-div">
              <h1
                className="projects-heading-text"
                style={{ color: theme.text }}
              >
                {projectsHeader.title}
              </h1>
              <div
                className="projects-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                <div>
                  {projectsHeader["description"]
                    .split("\n")
                    .map((item, index) => (
                      <p key={index}> {item} </p>
                    ))}
                </div>
                {/* Other Projects */}
                {otherProjectsEntries.length > 0 && (
                  <div className="other-projects">
                    <p>{projectsHeader["otherProjectsOverview"]}</p>
                    <ul>
                      {otherProjectsEntries.map(([title, url]) => (
                        <li key={title}>
                          <a
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="repo-cards-div-main">
        {ProjectsData.data.map((repo, index) => {
          return <GithubRepoCard key={index} repo={repo} theme={theme} />;
        })}
      </div>
      {/* Projects dropdown menu */}
      <ProjectsDropdown theme={theme} projects={greeting.projects} />
      {/* Divider */}
      <p className="margin-top-40px"></p>
      <ColouredLine color="#cedcee"></ColouredLine>
      {/* Publications */}
      <div className="basic-projects">
        {/* Fade in from bottom effect */}
        <motion.div
          variants={fadeInBottom40pxDuration2s}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="publications-heading-div">
            <div className="publications-heading-text-div">
              <h1
                className="publications-heading-text"
                style={{ color: theme.text }}
              >
                {publicationsHeader.title}
              </h1>
              <p
                className="projects-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                {publicationsHeader["description"]}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="repo-cards-div-main">
        {limitedPubs.map((repo) => (
          <PublicationCard key={repo.id} repo={repo} theme={theme} />
        ))}
      </div>{" "}
      <div className="center-button">
        <Button
          text={"View Full Publication List"}
          className="publication-button"
          href={`https://orcid.org/${ORCID_ID}`}
          newTab={true}
          theme={theme}
        />
      </div>
      {/* Footer and Top Button */}
      <Footer theme={theme} onToggle={onToggle} />
      <TopButton theme={theme} />
    </div>
  );
};

Projects.propTypes = {
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

export default Projects;
