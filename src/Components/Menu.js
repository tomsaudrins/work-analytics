import "../css/Menu.css";
import { FaChartBar } from "react-icons/fa";
const Menu = ({ onClick, importedData, setData }) => {
  return (
    <div className="sidebar">
      <p style={{ height: "44px", fontSize: "28px", paddingTop: "25px", color: "white" }}>
        <FaChartBar />
      </p>
      <a href="#main" className="active" onClick={() => setData(importedData.slice(0,7))}>Week</a>
      <a href="#news" onClick={() => setData(importedData.slice(0,30))}>Month</a>
      <a href="#contact" onClick={() => setData(importedData.slice(0,365))}>Year</a>
      <a href="#contact" onClick={() => setData(importedData)}>Total</a>
      <a href="#about" onClick={() => onClick(null)}>
        Logout
      </a>
    </div>
  );
};

export default Menu;
