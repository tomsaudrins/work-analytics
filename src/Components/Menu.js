const Menu = ({ onClick }) => {
  return (
    <div className="sidebar">
      <a className="active" href="#home">
        Data visualizer
      </a>
      <a href="#main">Location</a>
      <a href="#news">Hours</a>
      <a href="#contact">Salary</a>
      <a href="#contact">Days</a>
      <a href="#about" onClick={() => onClick(null)}>
        Logout
      </a>
    </div>
  );
};

export default Menu;
