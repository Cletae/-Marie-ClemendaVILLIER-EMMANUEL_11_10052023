import React, { useState } from "react";
import "./SliderImage.css";
import chevronLeft from "../../assets/images/chevron-left.svg";
import chevronRight from "../../assets/images/chevron-right.svg";

function SliderImages(props) {
  const { pictures } = props;
  const [current, setCurrent] = useState(0);
  const length = pictures.length;

  const prev = () => {
    if (current > 0) {
      setCurrent(current - 1);
    } else {
      setCurrent(length - 1);
    }
  };
  const next = () => {
    if (current < length - 1) {
      setCurrent(current + 1);
    } else {
      setCurrent(0);
    }
  };

  return (
    <div className="sliders">
      <img src={pictures[current]} className="slide-image" alt="slides" />
      {length > 1 && (
        <div className="controls">
          <img
            src={chevronLeft}
            alt="chevronLeft"
            onClick={prev}
            className="left-arrow"
          ></img>
          <div className="slide-counter">
            {current + 1} / {pictures.length}
          </div>
          <img
            src={chevronRight}
            alt="chevronRight"
            onClick={next}
            className="right-arrow"
          ></img>
        </div>
      )}
    </div>
  );
}

export default SliderImages;
