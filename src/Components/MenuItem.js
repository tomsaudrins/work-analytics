const MenuItem = ({
  text,
  active,
  importedData,
  setData,
  timeframe,
  setActive,
}) => {
  return (
    <p
      className={`${active === text ? "active" : ""}`}
      onClick={(e) => {
        setActive(e.target.innerText);
        timeframe > 0
          ? setData(importedData.slice(0, timeframe))
          : setData(null);
      }}
    >
      {text}
    </p>
  );
};

export default MenuItem;
