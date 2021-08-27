import d3 from "d3";
import "../scripts/configureGraphs.js";
import { useState, useEffect } from "react";

import OptionCard from "./OptionCard";
import Dashboard from "./Dashboard";

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

  const dashboardProps = { data, setData, importedData };
  const optionCardProps = {
    text: "Upload..",
    onClick: selectFile,
  };

  return (
    <div className="App">
      {data ? (
        <Dashboard {...dashboardProps} />
      ) : (
        <OptionCard {...optionCardProps} />
      )}
    </div>
  );
};

export default App;
