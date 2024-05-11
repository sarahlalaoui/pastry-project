
import "./Cupcake.css"
import banana from "../../assets/cupcake/banana-caramel-fudge-cupcake.jpg";
import birthday from "../../assets/cupcake/birthdaycake.jpg";
import redvelvet from "../../assets/cupcake/chocolate-red-velvet.jpg";
import pumpkin from "../../assets/cupcake/pumpkin-spice-cupcake.jpg";
import coconut from "../../assets/cupcake/coconut-caramel.jpg";
import nutella from "../../assets/cupcake/banananutella.jpg";
import raspberry from "../../assets/cupcake/raspberry-cheesecake.jpg";

const Cupcake = () => {
    return (
    <div>
        <div id="cupcake-anchor"></div>
                <div id="cupcake">
                    <h2 className="h2Cupcake">Cupcake</h2>
                    <div className="product-container">
                        <div className="banana-fudge">                        
                           <img src={banana} alt="banana caramel fudge cupcake" />
                            <p>Banana Caramel</p>
                            <p>$ 4.5</p>
                        </div>
                        <div className="birthday">
                           <img src={birthday} alt="birthday cupcake" />
                            <p>Birthday Special</p>
                            <p>$ 5</p>
                        </div>
                        <div className="velvet">
                           <img src={redvelvet} alt="red velvet cupcake" />
                            <p>Red Velvet</p>
                            <p>$5.5</p>
                        </div>
                        <div className="pumpkin">
                           <img src={pumpkin} alt="pumpkin cupcake" />
                            <p>Pumpkin Spice</p>
                            <p>$ 6.5</p>
                        </div>    
                        <div className="coconut">
                            <img src={coconut} alt="coconut caramel cupcake" />
                            <p>Coconut Caramel</p>
                            <p>$ 6</p>
                        </div>
                        <div className="banana-nutella">
                            <img src={nutella} alt="banana nutella cupcake" />
                            <p>Banana Nutella</p>
                            <p>$ 5.5</p>
                        </div>     
                        <div className="raspberry-cheesecake">
                           <img src={raspberry} alt="raspberry cheesecake cupcake" />
                            <p>Raspberry Cheesecake</p>
                            <p>$ 5.5</p>
                        </div>          
                    </div>
                </div>
                </div>
    );
};

export default Cupcake;