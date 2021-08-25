const countLocation = (data) => {
  let locationData = {
    Office: 0,
    Home: 0,
  };
  data.forEach((location) => locationData[location["Location"]]++);
  return locationData;
};

export default countLocation;
