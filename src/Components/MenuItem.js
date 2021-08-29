const MenuItem = ({
  text,
  active,
  setImportedData,
  importedData,
  setData,
  timeframe,
  setActive,
}) => {
  const logout = () => {
    setData(null);
    setImportedData(null);
  };

  const handleClick = (e) => {
    setActive(e.target.innerText);
    timeframe > 0 ? setData(importedData.slice(0, timeframe)) : logout();
  };

  const className = active === text ? "active" : "";

  return (
    <p className={className} onClick={(e) => handleClick(e)}>
      {text}
    </p>
  );
};

export default MenuItem;
