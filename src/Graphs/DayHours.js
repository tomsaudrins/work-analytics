import React from "react";
import { PolarArea } from "react-chartjs-2";
import "../css/grid.css";
import getDay from "../scripts/getDay";
import countHours from "../scripts/countHours";

const DayHours = ({ data }) => {
  const hourData = {
    Monday: 0,
    Tuesday: 0,
    Wednesday: 0,
    Thursday: 0,
    Friday: 0,
  };

  data.forEach((date) => {
    let day = getDay(date);
    hourData[Object.keys(hourData)[day]] += countHours(date);
  });

  const dataSet = {
    labels: Object.keys(hourData),
    datasets: [
      {
        data: Object.values(hourData),

        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(153, 102, 255, 0.5)",
        ],

        borderWidth: 0,
      },
    ],
  };

  const options = {
    scales: {
      yAxes: {
        display: false,
        ticks: {
          color: "red",
          display: false,
          backdropColor: "#27293d",
          z: 1000,
        },
      },
    },
    maintainAspectRatio: false,
    indexAxis: "y",
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          font: {
            family: "Poppins",
            weight: "100",
            color: "red",
          },
        },
      },
      title: {
        display: true,
        text: "Hour distribution",
      },
    },
  };

  return (
    <div className="dayHoursInfo info-grid-two">
      <PolarArea data={dataSet} options={options} />
    </div>
  );
};

export default DayHours;
