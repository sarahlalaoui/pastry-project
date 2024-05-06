import { Link } from "react-router-dom";
import "./Product.css";

const product = () => {
  return (
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
    </div>
  );
};

export default product;
