import OptionCard from "./OptionCard";
import Location from "../Graphs/Location";
import d3 from "d3";
import { useState } from "react";
import WeekInfo from "../Graphs/WeekInfo";
import DayHours from "../Graphs/DayHours";
import Menu from "./Menu";
import InfoCards from "./InfoCards";
import LastFiveDays from "./LastFiveDays";

const App = () => {
  const [data, setData] = useState(null);

  const selectFile = () => {
    d3.csv("data.csv", (csvData) => {
      setData(csvData);
      console.log(data);
    });
  };

  return (
    <div className="App">
      <Menu onClick={setData} />
      <div className="content">
        <div style={{ display: "block", width: "100%", margin: "0 auto" }}>
          {data ? (
            ""
          ) : (
            <OptionCard
              title="Upload a new file"
              button_text="Select file..."
              onClick={selectFile}
            />
          )}
        </div>
        <div className="graphs">
          {data ? <InfoCards data={data} /> : ""}

          {data ? <WeekInfo data={data} /> : ""}
          {data ? <LastFiveDays data={data} /> : ""}

          {data ? <Location data={data} /> : ""}
          {data ? <DayHours data={data} /> : ""}
        </div>
      </div>
    </div>
  );
};

export default App;
