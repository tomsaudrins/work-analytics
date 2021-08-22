import OptionCard from "./OptionCard";

const App = () => {
  const selectFile = () => {
    let input = document.createElement("input");
    input.type = "file";
    input.click();
  };

  const proceed = () => {
    console.log("Proceed");
  };

  return (
    <div className="App">
      <h1 className="header">Work hour visualizer!</h1>
      <OptionCard
        title="Upload a new file"
        button_text="Select file..."
        onClick={selectFile}
      />
      <OptionCard
        title="Use our data sample"
        button_text="Next"
        onClick={proceed}
      />
    </div>
  );
};

export default App;
