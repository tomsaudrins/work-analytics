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
        backgroundColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="locationInfo">
      <Doughnut data={dataSet} />;
    </div>
  );
};
export default Location;
