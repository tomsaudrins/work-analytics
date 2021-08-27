import "../css/Card.css";
import "../css/InfoCards.css";

const Card = ({ name, body }) => {
  return (
    <div className="card-component">
      <h3 className="name">{name}</h3>
      <h4 className="body">{body}</h4>
    </div>
  );
};
export default Card;
