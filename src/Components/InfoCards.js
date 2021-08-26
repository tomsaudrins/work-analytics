import countLocation from "../Scripts/countLocation";
import Card from "./Card";
import countHours from "../Scripts/countTotalHours";

const InfoCards = ({ data }) => {
  return (
    <div className="cardContainer">
      <Card name="Total Hours" body={countHours(data)} />
      <Card
        name="Salary"
        body={"DKK " + Math.round(countHours(data) * 145 * 100) / 100}
      />

      <Card
        name="Holiday Pay"
        body={"DKK " + Math.round(countHours(data) * 145 * 0.125 * 100) / 100}
      />

      <Card
        name="Distance Cycled"
        body={
          "KM " + Math.round(countLocation(data)["Office"] * 12.2 * 100) / 100
        }
      />
    </div>
  );
};

export default InfoCards;
