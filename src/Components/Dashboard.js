import Graphs from "./Graphs";
import Menu from "./Menu";

const Dashboard = ({
  data,
  setData,
  importedData,
  currency,
  distance,
  salary,
  setImportedData,
}) => {
  return (
    <>
      <Menu
        onClick={setData}
        setImportedData={setImportedData}
        importedData={importedData}
        setData={setData}
      />
      <div className="content">
        {data ? (
          <Graphs
            data={data}
            currency={currency}
            distance={distance}
            salary={salary}
          />
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default Dashboard;
