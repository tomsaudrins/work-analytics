const countHours = (day) => {
  let total = 0;
  let [hours, minutes] = day["Hours"].split(":");
  total += +hours + +minutes / 60;
  return total;
};

export default countHours;
