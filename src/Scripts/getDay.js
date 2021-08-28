const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturtday",
  "Sunday",
];

const getDay = (date) => {
  console.log(
    new Date(
      Date.parse(date["Date"].split("/").reverse().join("-") + "T10:00:00")
    )
  );
  return days[
    new Date(
      Date.parse(date["Date"].split("/").reverse().join("-") + "T10:00:00")
    ).getDay() - 1
  ];
};

export default getDay;
