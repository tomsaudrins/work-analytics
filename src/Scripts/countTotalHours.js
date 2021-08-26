const countTotalHours = (data) => {
  let total = 0;
  data.forEach((day) => {
    let [hours, minutes] = day["Hours"].split(":");
    total += +hours + +minutes / 60;
  });
  return total;
};

export default countTotalHours;
