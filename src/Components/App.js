import OptionCard from "./OptionCard";
import Location from "../graphs/Location";
import d3 from "d3";
import { useState, useEffect } from "react";
import WeekInfo from "../graphs/WeekInfo";
import DayHours from "../graphs/DayHours";
import Menu from "./Menu";
import InfoCards from "./InfoCards";
import LastFiveDays from "./LastFiveDays";
import { defaults } from "react-chartjs-2";

const App = () => {
  // move to other location later
  defaults.font.family = "Poppins";
  defaults.font.size = 16;
  defaults.color = "#fff";
  defaults.scales.radialLinear.ticks.display = false;

  const [importedData, setImportedData] = useState(null);
  const [data, setData] = useState(null);

  const selectFile = () => {
    d3.csv("data.csv", (csvData) => {
      setImportedData(csvData);
    });
  };

  useEffect(() => {
    setData(importedData ? importedData.slice(0, 7) : null);
  }, [importedData]);

  return (
    <div className="App">
      {data ? (
        <Menu onClick={setData} importedData={importedData} setData={setData} />
      ) : (
        ""
      )}
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

          <div className="row">
            {data ? <Location data={data} /> : ""}
            {data ? <DayHours data={data} /> : ""}
            {data ? <WeekInfo data={data} /> : ""}
          </div>
          <div className="row">{data ? <LastFiveDays data={data} /> : ""}</div>
        </div>
      </div>
    </div>
  );
};

export default App;
