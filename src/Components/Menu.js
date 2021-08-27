import "../css/Menu.css";

const Menu = ({ onClick }) => {
  return (
    <div className="sidebar">
      <p style={{ height: "44px", fontSize: "16px", paddingTop: "25px" }}>
        Data
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
