import countLocation from "../scripts/countLocation";
import Card from "./Card";
import countHours from "../scripts/countTotalHours";
import "../css/InfoCards.css";

const InfoCards = ({ data, currency, distance, salary }) => {
  const hours = countHours(data);
  const salaryToDisplay =
    `${currency} ` + Math.round(countHours(data) * salary * 100) / 100;
  const distanceToWork =
    "KM " +
    Math.round(countLocation(data)["Office"] * parseInt(distance) * 2 * 100) /
      100;
  const holidayPay =
    `${currency} ` + Math.round(countHours(data) * salary * 0.125 * 100) / 100;

  return (
    <div className="info-cards">
      <Card name="Total Hours" body={hours} />
      <Card name="Salary" body={salaryToDisplay} />
      <Card name="Holiday Pay" body={holidayPay} />
      <Card name="Distance Cycled" body={distanceToWork} />
    </div>
  );
};

export default InfoCards;
