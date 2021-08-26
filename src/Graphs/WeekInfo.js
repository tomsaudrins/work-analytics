import React from "react";
import { Bar } from "react-chartjs-2";

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
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
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
    indexAxis: "y",
    elements: {
      bar: {
        borderWidth: 1,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: "Work day distribution",
      },
    },
  };
  return (
    <div className="weekInfo">
      <Bar data={dataSet} options={options} />
    </div>
  );
};

export default WeekInfo;
