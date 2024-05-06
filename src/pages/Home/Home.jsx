import "./Home.css";
import pic from "../../assets/pic.png";
const Home = () => {
  return (
    <div>
      <div className="pic" style={{ backgroundImage: `url(${pic})` }}>
        <div className="text">
          <h2>The Best Bakery in Toronto</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure
            obcaecati aliquid cumque nam, rem dolores pariatur quibusdam amet,
            Adipisci, eaque esse!
          </p>
          <button>Contact us</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
