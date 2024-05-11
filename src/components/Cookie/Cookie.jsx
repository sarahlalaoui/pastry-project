import "./Cookie.css"
import doublechocolate from "../../assets/cookie/double-chocolate.jpg" 
import peanut from "../../assets/cookie/peanut-butter.jpg"
import chocolate from "../../assets/cookie/chocolate-chip.jpg"
import oatmeal from "../../assets/cookie/oatmeal-raisin-cookie.jpg"


const Cookie = () => {
    return (
        <div>
           <div id="cookie-anchor"></div>
                <div id="cookie">
                    <h2 className="h2Cookie">Cookie</h2>
                    <div className="product-container">
                        <div className="double-chocolate">
                            <img src={doublechocolate} alt="double chocolate cookie" />
                            <p>Double Chocolate</p>
                            <p>$ 2.5</p>
                        </div>
                        <div className="peanut-butter">
                            <img src={peanut} alt="peanut butter cookie" />
                            <p>Peanut Butter</p>
                            <p>$ 2</p>
                        </div>
                        <div className="chocolate-chip">
                            <img src={chocolate} alt="chocolate chip cookie" />
                            <p>Chocolate Chip</p>
                            <p>$ 2</p>
                        </div>
                        <div className="oatmeal-raisin">
                            <img src={oatmeal} alt="oatmeal raisin cookie" />
                            <p>Oatmeal Raisin</p>
                            <p>$ 2.5</p>
                        </div>                          
                    </div>
                </div>
        </div>
    );
};

export default Cookie;