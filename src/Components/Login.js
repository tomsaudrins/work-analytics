import "../css/Login.css";
import d3 from "d3";

const Login = ({
  distance,
  setDistance,
  currency,
  setCurrency,
  importedData,
  setImportedData,
  salary,
  setSalary,
}) => {
  const selectFile = (e) => {
    e.preventDefault();
    d3.csv("data.csv", (csvData) => {
      setImportedData(csvData.reverse());
    });
  };

  return (
    <form>
      <h2>Data for calculations</h2>
      <div className="form-group">
        <label htmlFor="distance">Distance KM</label>
        <input
          type="number"
          className="form-control"
          id="distance"
          value={distance}
          onChange={(e) => setDistance(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="distance">Hourly salary</label>
        <input
          type="number"
          className="form-control"
          id="salary"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="currency">Currency</label>
        <select
          className="form-control"
          id="currency"
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
        >
          <option></option>
          <option>DKK</option>
          <option>EUR</option>
          <option>GBP</option>
          <option>USD</option>
        </select>
      </div>
      {currency && salary && distance ? (
        <div className="form-group">
          <button onClick={(e) => selectFile(e)} type="submit">
            {importedData ? "File loaded!" : "Upload a file"}
          </button>
          <button onClick={(e) => selectFile(e)} type="submit">
            Use sample data
          </button>
        </div>
      ) : (
        ""
      )}
    </form>
  );
};

export default Login;
