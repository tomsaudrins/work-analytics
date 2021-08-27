import "../css/Card.css";
const Card = ({ name, body }) => {
  return (
    <div className="card-component">
      <h3 style={{}}>{name}</h3>
      <h4 style={{ fontWeight: 300 }}>{body}</h4>
    </div>
  );
};
export default Card;