import { Link } from "react-router-dom";
import "./Cards.css";

function Cards(props) {
  const card = props.card;
  return (
    <div key={card.id} className="card-wrapper">
      <Link to={`/house/${card.id}`} className="house-link" key={card.id}>
        <div className="card-info">
          <p className="item-title">{card.title}</p>
        </div>
        <img src={card.cover} alt={card.title} className="house-image" />
      </Link>
    </div>
  );
}

export default Cards;
