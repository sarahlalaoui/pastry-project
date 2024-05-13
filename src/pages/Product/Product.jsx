import { Link } from "react-router-dom";
import "./Product.css";
import { NavLink } from "react-router-dom";
import Bread from "../../components/Bread/Bread";
import Cake from "../../components/Cake/Cake";
import Footer from "../../components/Footer/Footer";
import Cupcake from "../../components/Cupcake/Cupcake";
import Cookie from "../../components/Cookie/Cookie";
import Donut from "../../components/Donut/Donut";
import Pie from "../../components/Pie/Pie";
import Customize from "../../components/Customize/Customize";

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
              <Link to="#Bread">Bread</Link>
            </li>
            <li className="navlist">
              <Link to="#cake">Cake</Link>
            </li>
            <li className="navlist">
              <Link to="#cupcake">Cupcake</Link>
            </li>
            <li className="navlist">
              <Link to="#cookie">Cookie</Link>
            </li>
            <li className="navlist">
              <Link to="#donut">Donut</Link>
            </li>
            <li className="navlist">
              <Link to="#pie">Pie</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Bread></Bread>
      <Cake></Cake>
      <Cupcake></Cupcake>
      <Cookie></Cookie>
      <Donut></Donut>
      <Pie></Pie>
      <Customize></Customize>
      <Footer></Footer>
    </div>
    </div>
   
   
  );
};

export default product;
