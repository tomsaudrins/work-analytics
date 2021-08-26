import countLocation from "../scripts/countLocation";
import Card from "./Card";
import countHours from "../scripts/countTotalHours";
import "../css/InfoCards.css";
const InfoCards = ({ data }) => {
  return (
    <div className="info-cards">
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
