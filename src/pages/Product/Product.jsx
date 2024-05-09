import { Link } from "react-router-dom";
import "./Product.css";
import { NavLink } from "react-router-dom";
import Bread from "../../components/Bread/Bread";
import Cake from "../../components/Cake/Cake";
import Footer from "../../components/Footer/Footer";

const product = () => {
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
            <a href="#About">About us</a>
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

  
     
    <div className="menu-container">
      <div className="second-menu">
        <nav>
          <ul>
            <li className="navlist">
              <Link to="#bread-anchor">Bread</Link>
            </li>
            <li className="navlist">
              <Link to="#cake-anchor">Cake</Link>
            </li>
            <li className="navlist">
              <Link to="#cupcake-anchor">Cupcake</Link>
            </li>
            <li className="navlist">
              <Link to="#cookie-anchor">Cookie</Link>
            </li>
            <li className="navlist">
              <Link to="#donut-anchor">Donut</Link>
            </li>
            <li className="navlist">
              <Link to="#pie-anchor">Pie</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Bread></Bread>
      <Cake></Cake>
      <Footer></Footer>
    </div>
    </div>
   
   
  );
};

export default product;
