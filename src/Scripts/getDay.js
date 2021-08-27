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
  return days[new Date(date["Date"].split("/").reverse()).getDay() - 1];
};

export default getDay;
