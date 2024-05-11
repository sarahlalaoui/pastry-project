import "./Donut.css"
import dipdonut from "../../assets/donut/chocolate-dip.jpg"
import sugar from "../../assets/donut/sugar-cream.jpg"
import sprinkle from "../../assets/donut/chocolate-sprinkle.jpg"
import coconut from "../../assets/donut/coconut.jpg"
import blueberry from "../../assets/donut/blueberry.jpg"


const Donut = () => {
    return (
        <div>
            <div id="donut-anchor"></div>
                <div id="donut">
                    <h2 className="h2Donut">Donut</h2>
                    <div className="product-container">
                        <div className="chocolate-dip">
                           <img src={dipdonut} alt="chocolate dip donut" />
                            <p>Chocolate Dip</p>
                            <p>$ 2.5</p>
                        </div>
                        <div className="sugar">             
                            <img src={sugar} alt="sugar cream donut" />
                            <p>Sugar Cream</p>
                            <p>$ 2</p>
                        </div>
                        <div className="chocolate-sprinkle">
                           <img src={sprinkle} alt="chocolate sprinkle donut" />
                            <p>Chocolate Sprinkle</p>
                            <p>$ 2.2</p>
                        </div>
                        <div className="coconut-fill">
                            <img src={coconut} alt="coconut fill donut" />
                            <p>Coconut Filled</p>
                            <p>$ 2.5</p>
                        </div> 
                        <div className="blueberry">
                           <img src={blueberry} alt="blueberry donut" />
                            <p>Blueberry Cream</p>
                            <p>$ 2.8</p>
                        </div>                          
                    </div>
                </div>
        </div>
    );
};

export default Donut;