import "./Banner.css";
import bannerHome from "../../assets/images/bannerHome.png";

function Banner() {
  return (
    <>
      <div className="banner-container">
        <h1>Chez vous, partout et ailleurs</h1>
        <img src={bannerHome} className="banner-image" alt="home-background" />
      </div>
    </>
  );
}

export default Banner;
