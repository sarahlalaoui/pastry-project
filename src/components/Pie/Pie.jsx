import "./Pie.css"
import apple from "../../assets/pie/apple.jpg"
import Oreo from "../../assets/pie/oreo.jpg"
import cherry from "../../assets/pie/cherry.jpg"
import lime from "../../assets/pie/lime.jpg"
import pecan from "../../assets/pie/pecan.jpg"

const Pie = () => {
    return (
        <div>
           <div id="pie-anchor"></div>
                <div id="pie">
                    <h2>Pie</h2>
                    <div className="product-container">
                        <div className="apple-pie">
                           <img src={apple}  alt="apple pie" width="720" height="720" />
                            <p>Apple</p>
                            <p>$ 25</p>
                        </div>
                        <div className="Oreo">
                            <img src={Oreo} alt="oreo pie" width="720" height="720" />
                            <p>Oreo Cookie</p>
                            <p>$ 27</p>
                        </div>
                        <div className="cherry">
                            <img src={cherry} alt="cherry pie" width="720" height="720" />
                            <p>Cherry</p>
                            <p>$ 26</p>
                        </div>
                        <div className="lime">
                            <img src={lime}  alt="lime pie" width="720" height="720" />
                            <p>Lime</p>
                            <p>$ 21</p>
                        </div> 
                        <div className="pecan">
                            <img src={pecan} alt="pecan pie" width="360" height="360"/>
                            <p>Pecan</p>
                            <p>$ 30</p>
                        </div>                          
                    </div>
                </div>
        </div>
    );
};

export default Pie;