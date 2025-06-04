import "./EndingCard.css";

const EndingCard = ({ ending: { name, description, image }, reset }) => {
  return (
    <div className="ending-card">
      <span className="ending-title">{name}</span>
      <span>{description}</span>
      {/* {image}  */}
      <span className="ending-button" onClick={reset}>
        {"< "}Back to beginning
      </span>
    </div>
  );
};

export default EndingCard;
