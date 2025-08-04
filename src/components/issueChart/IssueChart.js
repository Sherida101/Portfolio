import React, { Component } from "react";
import { Doughnut } from "react-chartjs-2";
import { motion } from "framer-motion";
import "./IssueChart.css";
import IssueData from "../../shared/opensource/issues.json";
import { fadeInBottom20pxDuration2s } from "../../shared/constants";
class IssueChart extends Component {
  render() {
    const data = {
      labels: ["Open", "Closed"],
      datasets: [
        {
          data: [IssueData["open"], IssueData["closed"]],
          backgroundColor: ["#28a745", "#d73a49"],
          hoverBackgroundColor: ["#28a745dd", "#d73a49dd"],
        },
      ],
    };

    return (
      <div className="issue-chart">
        {/* Fade in from bottom effect */}
        <motion.div
          variants={fadeInBottom20pxDuration2s}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="issue-chart-header">Issue Distribution</h2>
        </motion.div>
        <Doughnut
          data={data}
          options={{
            margin: "0",
            padding: "0",
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

export default IssueChart;
