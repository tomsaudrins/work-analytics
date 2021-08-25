const Card = ({ name, body }) => {
  return (
    <div className="card-component">
      <h2>{name}</h2>
      <h3>{body}</h3>
    </div>
  );
};
export default Card;
