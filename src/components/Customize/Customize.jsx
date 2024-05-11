import "./Customize.css";
import Customise from "../../assets/customize.jpg";
import { Link } from "react-router-dom";

const Customize = () => {
  return (
    <div>
      <div className="customize">
        <img
          src={Customise}
          alt="customized macarons"
          width="1920"
          height="1280"
        />
        <h3>We Do Customize !</h3>
        <p>Contact us today and let us satisfy your sweet tooth.</p>

        <li className="btnCustomize">
          <Link to="/Contact">Contact Now</Link>
        </li>
      </div>
    </div>
  );
};

export default Customize;
