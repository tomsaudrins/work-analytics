import InfoCards from "./InfoCards";
import LastFiveDays from "./LastFiveDays";
import Location from "../graphs/Location";
import WeekInfo from "../graphs/WeekInfo";
import DayHours from "../graphs/DayHours";
import "../css/Graphs.css";

const Graphs = (props) => {
  return (
    <div className="graphs">
      <InfoCards {...props} />
      <div className="row">
        <Location data={props.data} />
        <DayHours data={props.data} />
        <WeekInfo data={props.data} />
      </div>
      <div className="row">
        <LastFiveDays data={props.data} />
      </div>
    </div>
  );
};

export default Graphs;
