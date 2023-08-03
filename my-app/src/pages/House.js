import { useParams, Navigate } from "react-router-dom";
import Data from "../data/dataHouse.json";
import SliderImages from "../components/sliderImage/SliderImage";
import HouseDetails from "../components/infoHome/InfoHome";
import Accordion from "../components/accordion/Accordion";

function House() {
  const { id } = useParams();
  const house = Data.find((item) => item.id === id);

  if (!house) return <Navigate to="/404" />;

  return (
    <div>
      <SliderImages pictures={house.pictures} />
      <HouseDetails />
      <div className="accordion-container">
        <Accordion title="Description">{house.description}</Accordion>
        <Accordion title="Equipements">
          {house.equipments.map((item) => (
            <div key={item}>{item}</div>
          ))}
        </Accordion>
      </div>
    </div>
  );
}

export default House;
