const getDay = (date) => {
  return (
    new Date(
      Date.parse(date["Date"].split("/").reverse().join("-") + "T10:00:00")
    ).getDay() - 1
  );
};

export default getDay;
