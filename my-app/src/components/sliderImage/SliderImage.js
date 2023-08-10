import React, { useState } from "react";
import "./SliderImage.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function SliderImages(props) {
  const { pictures } = props;
  const [current, setCurrent] = useState(0);
  const length = pictures.length;

  console.log(pictures);

  const prev = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  const next = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  return (
    <div className="sliders">
      <img src={pictures[current]} className="slide-image" alt="slides" />
      <FaChevronLeft onClick={prev} className="left-arrow">
        Prev
      </FaChevronLeft>
      <FaChevronRight onClick={next} className="right-arrow">
        Next
      </FaChevronRight>
    </div>
  );
}

export default SliderImages;
