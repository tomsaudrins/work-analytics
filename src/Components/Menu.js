import "../css/Menu.css";
import { FaChartBar } from "react-icons/fa";
import { useState } from "react";
import MenuItem from "./MenuItem";

const Menu = ({ importedData, setData }) => {
  const [active, setActive] = useState("Week");
  const itemProps = {
    active,
    setData,
    importedData,
    setActive,
  };

  return (
    <div className="sidebar">
      <p className="logo">
        <FaChartBar />
      </p>

      <MenuItem {...itemProps} timeframe="7" text="Week" />
      <MenuItem {...itemProps} timeframe="30" text="Month" />
      <MenuItem {...itemProps} timeframe="365" text="Year" />
      <MenuItem {...itemProps} timeframe="0" text="Logout" />
    </div>
  );
};

export default Menu;
