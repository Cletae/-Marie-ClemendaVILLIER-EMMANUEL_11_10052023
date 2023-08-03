import "./Accordion.css";
import { useState } from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };

  return (
    <div className="accordion-house">
      <div className="item">
        <div className="accordion-house-title" onClick={toggle}>
          <h2>{title}</h2>
          <span>{open ? <FaChevronUp /> : <FaChevronDown />}</span>
        </div>

        <div className={open ? "accordion-content show" : "accordion-content"}>
          {children}
        </div>
      </div>
    </div>
  );
}

export default Accordion;
