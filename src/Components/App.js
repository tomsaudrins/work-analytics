import d3 from "d3";
import "../scripts/configureGraphs.js";
import { useState, useEffect, useLayoutEffect } from "react";

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
  function updateSize() {
    if (document.querySelector(".content") && window.innerWidth > 700) {
      var style = window.getComputedStyle(
        document.querySelector(".content"),
        null
      );
      document.querySelector(".sidebar").style.height =
        style.getPropertyValue("height");
    }
  }
  useLayoutEffect(() => {
    if (document.querySelector(".App").clientWidth > 700) {
      window.addEventListener("resize", updateSize);
      updateSize();
    } else {
      window.removeEventListener("resize", updateSize);
    }
    return () => window.removeEventListener("resize", updateSize);
  }, [data]);

  const dashboardProps = { data, setData, importedData };
  const optionCardProps = {
    text: "Upload..",
    onClick: selectFile,
  };

  console.log(importedData);

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
