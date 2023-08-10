// import about from "../data/about.json";
import Accordion from "../components/accordion/Accordion";
import "../components/banner/Banner.css";
import BannerAbout from "../assets/images/bannerAbout.png";
import { useState, useEffect } from "react";

function About() {
  const [abouts, setAbouts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(
    function () {
      fetch("/data/dataAbout.json")
        .then(function (res) {
          if (res.ok) {
            return res.json();
          }
        })
        .then(function (data) {
          setIsLoading(false);
          setAbouts(data);
        });
    },
    [isLoading]
  );

  return (
    <div>
      <div>
        <img
          src={BannerAbout}
          className="banner-image"
          alt="about-background"
        />
      </div>
      <div className="accordion-about-container">
        {abouts.map((about) => {
          return (
            <div className="accordion-about" key={about.id}>
              <Accordion title={about.title}>{about.content}</Accordion>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default About;
