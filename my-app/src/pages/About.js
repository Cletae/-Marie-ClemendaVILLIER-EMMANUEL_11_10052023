import DataAbout from "../data/dataAbout.json";
import Accordion from "../components/accordion/Accordion";
import "../components/banner/Banner.css";
import BannerAbout from "../assets/images/bannerAbout.png";

function About() {
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
        {DataAbout.map((dataAbout) => {
          return (
            <div className="accordion-about" key={dataAbout.id}>
              <Accordion title={dataAbout.title}>{dataAbout.content}</Accordion>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default About;
