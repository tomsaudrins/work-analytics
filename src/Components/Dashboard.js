import Graphs from "./Graphs";
import Menu from "./Menu";

const Dashboard = ({ data, setData, importedData }) => {
  return (
    <>
      <Menu onClick={setData} importedData={importedData} setData={setData} />
      <div className="content">{data ? <Graphs data={data} /> : ""}</div>
    </>
  );
};

export default Dashboard;
