const MenuItem = ({
  text,
  active,
  importedData,
  setData,
  timeframe,
  setActive,
}) => {
  const handleClick = (e) => {
    setActive(e.target.innerText);
    timeframe > 0 ? setData(importedData.slice(0, timeframe)) : setData(null);
  };

  const className = active === text ? "active" : "";

  return (
    <p className={className} onClick={(e) => handleClick(e)}>
      {text}
    </p>
  );
};

export default MenuItem;
