import "./Footer.css";
import logoFooter from "../../assets/logos/logo_footer.png";

function Footer() {
  return (
    <footer>
      <img src={logoFooter} className="logo_footer" alt="logo" />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}
export default Footer;