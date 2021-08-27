import countLocation from "../scripts/countLocation";
import Card from "./Card";
import countHours from "../scripts/countTotalHours";
import "../css/InfoCards.css";

const InfoCards = ({ data }) => {
  const hours = countHours(data);
  const salary = "DKK " + Math.round(countHours(data) * 145 * 100) / 100;
  const distance =
    "KM " + Math.round(countLocation(data)["Office"] * 12.2 * 100) / 100;
  const holidayPay =
    "DKK " + Math.round(countHours(data) * 145 * 0.125 * 100) / 100;

  return (
    <div className="info-cards">
      <Card name="Total Hours" body={hours} />
      <Card name="Salary" body={salary} />
      <Card name="Holiday Pay" body={holidayPay} />
      <Card name="Distance Cycled" body={distance} />
    </div>
  );
};

export default InfoCards;
