import React, { Component } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
import { motion } from "framer-motion";
import "./PullRequestChart.css";
import PullRequestData from "../../shared/opensource/pull_requests.json";
import { fadeInBottom20pxDuration2s } from "../../shared/constants";

// Register components globally
Chart.register(ArcElement, Tooltip, Legend);

class PullRequestChart extends Component {
  render() {
    const data = {
      labels: ["Open", "Merged", "Closed"],
      datasets: [
        {
          data: [
            PullRequestData["open"],
            PullRequestData["merged"],
            PullRequestData["closed"],
          ],
          backgroundColor: ["#28a745", "#6f42c1", "#d73a49"],
          hoverBackgroundColor: ["#28a745dd", "#6f42c1dd", "#d73a49dd"],
        },
      ],
    };

    return (
      <div className="pr-chart">
        {/* Fade in from bottom effect */}
        <motion.div
          variants={fadeInBottom20pxDuration2s}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="pr-chart-header">Pull Request Distribution</h2>
        </motion.div>
        <Doughnut
          data={data}
          options={{
            padding: "0",
            margin: "0",
            responsive: true,
            maintainAspectRatio: true,
            animation: {
              duration: 4000,
            },
          }}
        />
      </div>
    );
  }
}

export default PullRequestChart;
