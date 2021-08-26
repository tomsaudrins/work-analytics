import { Doughnut } from "react-chartjs-2";
import countLocation from "../Scripts/countLocation";

const Location = ({ data }) => {
  const locationData = countLocation(data);
  const dataSet = {
    labels: Object.keys(locationData),
    datasets: [
      {
        label: "Location informaton",
        data: Object.values(locationData),
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
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
        position: "bottom",
        labels: {
          font: {
            family: "Roboto",
          },
        },
      },
      title: {
        display: true,
        text: "Weekly hour distribution",
      },
    },
  };

  return (
    <div className="locationInfo">
      <Doughnut data={dataSet} options={options} />
    </div>
  );
};
export default Location;
