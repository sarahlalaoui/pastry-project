import "./Gallery.css"
import cake from "../../assets/pictures/cake.jpg"
import bread from "../../assets/pictures/bread.jpg"
import cupcake from "../../assets/pictures/cupcake.jpg"
import slice from "../../assets/pictures/slice-bread.jpg"
import cookie from "../../assets/pictures/cookie.jpg"
import pie from "../../assets/pictures/pie.jpg"
import donut from "../../assets/pictures/donut.jpg"
import macaron from "../../assets/pictures/macaron.jpg"
import { Link } from "react-router-dom"

const Gallery = () => {
    return (
        <div className="gallery-container">
                <h2>Our Featured Products</h2>
                <div className="gallery">
                    <div className="top">
                       
                            <img src={cake} alt="" />
                            <img src={bread} alt="bread" />
                            <img src={cupcake} alt="cupcake" />
                            <img src={slice} alt="slice breade" />
                        
                    </div>
                    <div className="bottom">
                        <img src={cookie} alt="" />
                        <img src={pie} alt="" />
                        <img src={donut} alt="" />
                        <img src={macaron} alt="" />
                        
                    </div>
                </div>
                <Link ><button className="button">Check see Our product</button></Link>
            </div>
    );
};

export default Gallery;