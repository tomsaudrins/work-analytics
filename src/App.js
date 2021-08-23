import OptionCard from "./OptionCard";
import Location from "./Graphs/Location";
import d3 from "d3";
import { useState } from "react";
import WeekInfo from "./Graphs/WeekInfo";
import DayHours from "./Graphs/DayHours";
const App = () => {
  const [data, setData] = useState(null);

  const selectFile = () => {
    d3.csv("data.csv", (csvData) => {
      console.log(csvData);
      setData(csvData);
    });
  };

  const proceed = () => {
    console.log("Proceed");
  };

  return (
    <div className="App">
      <h1 className="header">Work hour visualizer!</h1>
      <OptionCard
        title="Upload a new file"
        button_text="Select file..."
        onClick={selectFile}
      />
      {/* <OptionCard
        title="Use our data sample"
        button_text="Next"
        onClick={proceed}
      /> */}

      <div>{data ? <Location data={data} /> : "No data loaded"}</div>
      <div>{data ? <WeekInfo data={data} /> : "No data loaded"}</div>
      <div>{data ? <DayHours data={data} /> : "No data loaded"}</div>
    </div>
  );
};

export default App;
