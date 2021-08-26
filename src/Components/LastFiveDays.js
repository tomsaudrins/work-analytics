import { FaHome, FaBuilding } from "react-icons/fa";
import Day from "./Day";

const LastFiveDays = ({ data }) => {
  let lastFiveDays = data.reverse().slice(0, 5);
  return (
    <div className="lastFiveDays">
      <h3>Last five days</h3>
      {lastFiveDays.map((day) => {
        return (
          <Day
            key={day["Date"]}
            day={day}
            Icon={day["Location"] === "Home" ? FaHome : FaBuilding}
          />
        );
      })}
    </div>
  );
};
export default LastFiveDays;
