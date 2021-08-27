import "../css/Menu.css";
import { FaChartBar } from "react-icons/fa";
const Menu = ({ onClick }) => {
  return (
    <div className="sidebar">
      <p style={{ height: "44px", fontSize: "28px", paddingTop: "25px", color: "white" }}>
        <FaChartBar />
      </p>
      <a href="#main">Week</a>
      <a href="#news">Month</a>
      <a href="#contact">Year</a>
      <a href="#contact">Total</a>
      <a href="#about" onClick={() => onClick(null)}>
        Logout
      </a>
    </div>
  );
};

export default Menu;
