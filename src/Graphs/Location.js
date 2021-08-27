import { Doughnut } from "react-chartjs-2";
import countLocation from "../scripts/countLocation";
import "../css/grid.css";
const Location = ({ data }) => {
  const locationData = countLocation(data);
  const dataSet = {
    labels: Object.keys(locationData),
    datasets: [
      {
        label: "Location informaton",
        data: Object.values(locationData),
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
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 0,
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
            weight: "100",
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
    <div className="locationInfo info-grid-one">
      <Doughnut data={dataSet} options={options} />
    </div>
  );
};
export default Location;
