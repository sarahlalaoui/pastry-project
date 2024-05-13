
import "./Bread.css";
import plain from "../../assets/bread/plain-bread.jpg";
import Italian from "../../assets/bread/italian-bread.jpg";
import corn from "../../assets/bread/corn.jpg";
import whole from "../../assets/bread/whole-wheat.jpg";


const Bread = () => {
  return (
    <div className="product">
      <div id="bread-anchor"></div>
      <div id="bread">
        <h2 className="h2Bread">Bread</h2>
        <div className="product-container">
          <div className="plain-bread">
            <img src={plain} alt="plain bread" />
            <p>Plain Bread</p>
          </div>

          <div className="italian-bread">
            <img src={Italian} alt="Italian bread" />
            <p>Italian Bread</p>
          </div>

          <div className="corn-bread">
            <img src={corn} alt="corn bread" />
            <p>Corn Bread</p>
          </div>
          <div className="whole-wheat-bread">
            <img src={whole} alt="whole wheat bread" />
            <p>Whole Wheat Bread</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bread;
