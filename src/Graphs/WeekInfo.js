import React from "react";
import { Bar } from "react-chartjs-2";
import "../css/grid.css";
const WeekInfo = ({ data }) => {
  const dayCount = {
    Monday: 0,
    Tuesday: 0,
    Wednesday: 0,
    Thursday: 0,
    Friday: 0,
  };

  data.forEach((date) => {
    let day = new Date(
      Date.parse(date["Date"].split("/").reverse().join("-") + "T10:00:00")
    ).getDay();
    dayCount[Object.keys(dayCount)[day - 1]]++;
  });

  const dataSet = {
    labels: Object.keys(dayCount),
    datasets: [
      {
        data: Object.values(dayCount),
        label: "Days worked",
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(153, 102, 255, 0.5)",
        ],
      },
    ],
  };
  const options = {
    maintainAspectRatio: false,
    indexAxis: "y",
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          font: {
            family: "Poppins",
          },
        },
      },
      title: {
        display: true,
        text: "Day distribution",
        fontFamily: "Poppins",
        fontStyle: "italic",
      },
    },
  };
  return (
    <div className="weekInfo info-grid-two">
      <Bar data={dataSet} options={options} />
    </div>
  );
};

export default WeekInfo;
