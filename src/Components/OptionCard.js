import "../css/OptionCard.css";

const OptionCard = ({ title, button_text, onClick }) => {
  return (
    <div className="card">
      <h2 className="card-header">{title}</h2>
      <button className="select-button" onClick={onClick}>
        {button_text}
      </button>
    </div>
  );
};

export default OptionCard;
