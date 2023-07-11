import { NavLink } from "react-router-dom";
import logo from "../../assets/logos/logo_header.png";
import "./Header.css";

function Header() {
  let activeStyle = {
    textDecoration: "underline",
  };
  return (
    <header className="App-header">
      <img src={logo} className="kasa-logo" alt="logo" />
      <nav id="navbar">
        <ul id="nav-items">
          <li>
            <NavLink
              to="/"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
              end
            >
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/A_Propos"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
              end
            >
              A Propos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
