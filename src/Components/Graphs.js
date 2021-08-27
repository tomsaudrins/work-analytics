import InfoCards from "./InfoCards";
import LastFiveDays from "./LastFiveDays";
import Location from "../graphs/Location";
import WeekInfo from "../graphs/WeekInfo";
import DayHours from "../graphs/DayHours";

const Graphs = ({ data }) => {
  return (
    <div className="graphs">
      <InfoCards data={data} />
      <div className="row">
        <Location data={data} />
        <DayHours data={data} />
        <WeekInfo data={data} />
      </div>
      <div className="row">
        <LastFiveDays data={data} />
      </div>
    </div>
  );
};

export default Graphs;
