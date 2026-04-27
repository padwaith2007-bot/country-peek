import { NavLink } from "react-router-dom";
import "../styles/App.css";

function Header() {
  return (
    <header className="header">
      <NavLink to="/" className="header__brand">
        CountryPeek
      </NavLink>

      <nav className="header__nav">
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/favourites">
          Favourites
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;