import "./Cake.css";
import lemon from "../../assets/cake/cake-lemon.jpg";
import pistachio from "../../assets/cake/chocolate-pistachio.jpg";
import peanut from "../../assets/cake/peanut-butter.jpg";
import vanilla from "../../assets/cake/cake-vanilla-chocolate-chip.jpg";
import raspberry from "../../assets/cake/chocolate-raspberry.jpg";
import miniegg from "../../assets/cake/miniegg.jpg";

const Cake = () => {
  return (
    <div>
      <div id="cake-anchor"></div>
      <div id="cake">
        <h2 className="cake">Cake</h2>
        <div className="product-container">
          <div className="lemon-cake">
            <img src={lemon} alt="lemon cake" />
            <p>Lemon Orange</p>
            <p>From $65</p>
          </div>
          <div className="chocolate-pistachio">
            <img src={pistachio} alt="chocolate pistachio cake" />
            <p>Chocolate Pistachio</p>
            <p>From $70</p>
          </div>
          <div className="peanut-butter">
            <img src={peanut} alt="peanut butter cake" />
            <p>Peanut Butter</p>
            <p>From $70</p>
          </div>
          <div className="vanilla-chocolate-chip">
            <img src={vanilla} alt="vanilla chocolate chip cake" />
            <p>Vanilla Chocolate Chip</p>
            <p>From $60</p>
          </div>
          <div className="chocolate-raspberry">
            <img src={raspberry} alt="chocolate raspberry cake" />
            <p>Chocolate Raspberry</p>
            <p>From $65</p>
          </div>
          <div className="miniegg">
            <img src={miniegg.jpg} alt="miniegg cake" />
            <p>Miniegg</p>
            <p>From $80</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cake;
