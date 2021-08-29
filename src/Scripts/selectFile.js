const processData = (content) => {
  content = content.split("\r\n").map((item) => item.split(","));

  let keys = content.shift();
  let data = [];

  content.forEach((item) => {
    data.push(Object.assign(...keys.map((k, i) => ({ [k]: item[i] }))));
  });
  return data;
};

const selectFile = (e, distance, currency, salary, setImportedData) => {
  if (!distance || !currency || !salary)
    return alert("Please fill in all the fields");
  let input = document.createElement("input");
  input.type = "file";
  input.onchange = (e) => {
    const reader = new FileReader();
    reader.readAsText(e.target.files[0], "UTF-8");

    reader.onload = (readerEvent) => {
      let data = processData(readerEvent.target.result);
      setImportedData(data);
    };
  };

  input.click();
  e.preventDefault();
};

export default selectFile;
