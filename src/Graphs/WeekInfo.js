import React from "react";
import { Bar } from "react-chartjs-2";
import "../css/grid.css";
const WeekInfo = ({ data }) => {
  const dayCount = {
    // set sample values to zero in production
    Monday: 5,
    Tuesday: 5,
    Wednesday: 5,
    Thursday: 5,
    Friday: 5,
  };

  data.forEach((date) => {
    let day = new Date(date["Date"].split("/").reverse()).getDay();
    //console.log(day);
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
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
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
        display: false,
        text: "Weekly day distribution",
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
