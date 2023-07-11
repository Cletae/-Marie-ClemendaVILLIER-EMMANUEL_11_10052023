import "./Cards.css";
import { Link } from "react-router-dom";
import Data from "../../data/dataHouse.json";

function Cards() {
  return (
    <section className="card">
      <ul className="card-list">
        <li className="card-item">
          {Data.map((item) => {
            return (
              <Link
                to={`/house/${item.id}`}
                className="house-link"
                key={item.id}
              >
                <img
                  src={item.cover}
                  alt={item.title}
                  className="house-image"
                />
                <div className="card-info">
                  <p className="item-title">{item.title}</p>
                </div>
              </Link>
            );
          })}
        </li>
      </ul>
    </section>
  );
}

export default Cards;
