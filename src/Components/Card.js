const Card = ({ name, body }) => {
  return (
    <div className="card-component">
      <h3 style={{ fontWeight: "normal" }}>{name}</h3>
      <h4 style={{ fontWeight: "bold" }}>{body}</h4>
    </div>
  );
};
export default Card;
