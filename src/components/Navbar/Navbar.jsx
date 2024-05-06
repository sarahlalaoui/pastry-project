import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="container">
      <nav>
        <header>
          <h2>patisserie le mistral</h2>
          <ul className="list">
            <li className="navl">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="navl">
              <NavLink to="/About">About us</NavLink>
            </li>
            <li className="navl">
              <NavLink to="/product">our product</NavLink>
            </li>
            <li className="navl">
              <NavLink to="/Contact">Contact</NavLink>
            </li>
          </ul>
        </header>
    </nav>
    </div>
  );
};

export default Navbar;
