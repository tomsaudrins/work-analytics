import "../css/Menu.css";
import { FaChartBar } from "react-icons/fa";
import { useState } from "react";
import MenuItem from "./MenuItem";

const Menu = (props) => {
  const [active, setActive] = useState("Week");
  const menuProps = { ...props, active, setActive };

  return (
    <div className="sidebar">
      <p className="logo">
        <FaChartBar />
      </p>

      <MenuItem {...menuProps} timeframe="7" text="Week" />
      <MenuItem {...menuProps} timeframe="30" text="Month" />
      <MenuItem {...menuProps} timeframe="365" text="Year" />
      <MenuItem {...menuProps} timeframe="0" text="Logout" />
    </div>
  );
};

export default Menu;
