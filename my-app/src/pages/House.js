import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import SliderImages from "../components/sliderImage/SliderImage";
import Accordion from "../components/accordion/Accordion";
import "./Pages.css";

function House() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const onNavigate = useNavigate();

  useEffect(
    function () {
      fetch("/data/dataHouse.json")
        .then(function (res) {
          if (res.ok) {
            return res.json();
          }
        })
        .then(function (data) {
          setIsLoading(false);
          const element = data.find((item) => item.id === id);
          if (!element) {
            onNavigate("error");
          }
          setData(element);
        });
    },
    [id, isLoading, onNavigate]
  );

  const starColor = {
    red: "#ff6060",
    grey: "#E3E3E3",
  };
  const stars = Array(5).fill(0);

  return (
    <>
      {!isLoading && (
        <div>
          <SliderImages pictures={data.pictures} />

          {/* House Details */}
          <div className="house-infos-container">
            <div className="house-infos-details">
              <h2 className="house-title">{data.title}</h2>
              <span className="house-location">{data.location}</span>
              <div className="house-tags">
                {data.tags.map((tag) => (
                  <div className="tag" key={tag}>
                    {tag}
                  </div>
                ))}
              </div>
            </div>

            <div className="house-host-rating">
              <div className="host-infos-container">
                <span className="host-name">{data.host.name}</span>
                <img
                  className="host-profil"
                  alt="house"
                  src={data.host.picture}
                />
              </div>
              <div className="host-rating">
                <div className="stars">
                  {stars.map((_, index) => (
                    <FaStar
                      key={index}
                      className="stars"
                      color={
                        data.rating > index ? starColor.red : starColor.grey
                      }
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="accordion-container">
            <Accordion title="Description">{data.description}</Accordion>
            <Accordion title="Equipements">
              {data.equipments.map((item) => (
                <div key={item}>{item}</div>
              ))}
            </Accordion>
          </div>
        </div>
      )}
    </>
  );
}

export default House;
