import "../scripts/configureGraphs.js";
import { useState, useEffect, useLayoutEffect } from "react";
import Login from "./Login";
import Dashboard from "./Dashboard";

const App = () => {
  const [importedData, setImportedData] = useState(null);
  const [data, setData] = useState(null);
  const [currency, setCurrency] = useState("");
  const [distance, setDistance] = useState("");
  const [salary, setSalary] = useState("");

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

  const dashboardProps = {
    data,
    setData,
    importedData,
    currency,
    distance,
    salary,
    setSalary,
    setImportedData,
  };
  const loginProps = {
    distance,
    setDistance,
    currency,
    importedData,
    setImportedData,
    setCurrency,
    salary,
    setSalary,
  };

  return (
    <div className="App">
      {data && distance && salary && currency ? (
        <Dashboard {...dashboardProps} />
      ) : (
        <Login {...loginProps} />
      )}
    </div>
  );
};

export default App;
