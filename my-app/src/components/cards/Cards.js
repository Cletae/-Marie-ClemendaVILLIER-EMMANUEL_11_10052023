import "./Cards.css";
import { Link } from "react-router-dom";
// import Data from "../../data/dataHouse.json";

function Cards(props) {
  const card = props.card;
  return (
    <div key={card.id} className="card">
      <Link to={`/house/${card.id}`} className="house-link" key={card.id}>
        <img src={card.cover} alt={card.title} className="house-image" />
        <div className="card-info">
          <p className="item-title">{card.title}</p>
        </div>
      </Link>
    </div>
  );
}

export default Cards;
