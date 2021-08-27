import d3 from "d3";
import "../scripts/configureGraphs.js";
import { useState, useEffect } from "react";
import Menu from "./Menu";
import Graphs from "./Graphs";
import OptionCard from "./OptionCard";

const App = () => {
  const [importedData, setImportedData] = useState(null);
  const [data, setData] = useState(null);

  const selectFile = () => {
    d3.csv("data.csv", (csvData) => {
      setImportedData(csvData.reverse());
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
        {data ? <Graphs data={data} /> : ""}
      </div>
    </div>
  );
};

export default App;
