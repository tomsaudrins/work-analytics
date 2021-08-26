import getDay from "../Scripts/getDay";
import countHours from "../Scripts/countHours";

const Day = ({ Icon, day }) => {
  return (
    <div className="day" key={day["Date"]}>
      <h3 style={{ fontWeight: "normal" }}>
        <Icon />
        <span style={{ marginLeft: "5px" }}>{getDay(day)}</span>
        <span
          style={{
            marginLeft: "5px",
            float: "right",
            fontSize: "23px",
            color: "#00000061",
          }}
        >
          {countHours(day)} hr
        </span>
      </h3>
      <p>
        {day["Start time"]} - {day["End Time"]}
      </p>
    </div>
  );
};

export default Day;
