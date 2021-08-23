import { Doughnut } from "react-chartjs-2";

const Location = ({ data }) => {
  const locationData = {
    Office: 0,
    Home: 0,
  };

  data.forEach((location) => locationData[location["Location"]]++);

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

  return (
    <div className="locationInfo">
      <Doughnut data={dataSet} />
    </div>
  );
};
export default Location;
