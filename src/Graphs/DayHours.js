import React from "react";
import { PolarArea } from "react-chartjs-2";
import "../css/grid.css";

const calculateHours = (day) => {
  let [hours, minutes] = day["Hours"].split(":");
  return +hours + +minutes / 60;
};

const DayHours = ({ data }) => {
  const hourData = {
    // set sample values to zero in production
    Monday: 5,
    Tuesday: 7,
    Wednesday: 4,
    Thursday: 5,
    Friday: 8,
  };

  data.forEach((date) => {
    let day = new Date(date["Date"].split("/").reverse()).getDay();
    hourData[Object.keys(hourData)[day - 1]] += calculateHours(date);
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
        borderWidth: 1,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    indexAxis: "y",
    backgroundColor: "red",
    yAxis: {
      scaleLabel: {
        display: true,
        labelString: "Hours",
      },
    },
    scales: {
      ticks: {
        display: "auto",
      },
    },
    elements: {
      bar: {
        borderWidth: 1,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: "right",
        labels: {
          font: {
            family: "Poppins",
            weight: "100",
            color: "white",
          },
        },
      },
      title: {
        display: false,
        text: "Weekly hour distribution",
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
