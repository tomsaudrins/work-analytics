import Graphs from "./Graphs";
import Menu from "./Menu";

const Dashboard = ({
  data,
  setData,
  importedData,
  currency,
  distance,
  salary,
}) => {
  return (
    <>
      <Menu onClick={setData} importedData={importedData} setData={setData} />
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
