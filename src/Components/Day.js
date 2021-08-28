import getDay from "../scripts/getDay";
import countHours from "../scripts/countHours";
import days from "../scripts/days";
import "../css/Day.css";
const Day = ({ Icon, day }) => {
  return (
    <div className="day" key={day["Date"]}>
      <h3 style={{ fontWeight: 100 }}>
        <Icon />
        <span style={{ marginLeft: "5px" }}>{days[getDay(day)]}</span>
        <span className="hours">{countHours(day)} hr</span>
      </h3>
      <p>
        {day["Start Time"]} - {day["End Time"]}
      </p>
    </div>
  );
};

export default Day;
