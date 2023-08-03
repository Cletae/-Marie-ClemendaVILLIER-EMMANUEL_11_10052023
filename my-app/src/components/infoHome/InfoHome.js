import Data from "../../data/dataHouse.json";
import { useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import "./InfoHome.css";

function HouseDetails() {
  const { id } = useParams();
  const house = Data.find((item) => item.id === id);
  const starColor = {
    red: "#ff6060",
    grey: "#E3E3E3",
  };

  const stars = Array(5).fill(0);

  return (
    <div className="house-infos-container">
      <div className="house-infos-details">
        <h2 className="house-title">{house.title}</h2>
        <span className="house-location">{house.location}</span>
        <div className="house-tags">
          {house.tags.map((tag) => (
            <div className="tag" key={tag}>
              {tag}
            </div>
          ))}
        </div>
      </div>

      <div className="house-host-rating">
        <div className="host-infos-container">
          <span className="host-name">{house.host.name}</span>
          <img className="host-profil" alt="house" src={house.host.picture} />
        </div>
        <div className="host-rating">
          <div className="stars">
            {stars.map((_, index) => (
              <FaStar
                key={index}
                className="stars"
                color={house.rating > index ? starColor.red : starColor.grey}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HouseDetails;
