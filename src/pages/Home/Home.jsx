import "./Home.css";
import pic from "../../assets/pic.png";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Home = () => {
  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Optional smooth scrolling behavior
    });
  };

  // Show/hide the scroll-to-top button based on the scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollToTopBtn = document.getElementById("scrollToTopBtn");
      if (scrollToTopBtn) {
        if (
          document.body.scrollTop > 20 ||
          document.documentElement.scrollTop > 20
        ) {
          scrollToTopBtn.style.display = "block";
        } else {
          scrollToTopBtn.style.display = "none";
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <div className="pic" style={{ backgroundImage: `url(${pic})` }}>
        <div className="text">
          <h2>the Artistry of Pastry Making</h2>
          <p>
            Indulge in our meticulously crafted pastries, where tradition meets
            innovation. From flaky croissants to fresh fruit tarts, each bite
            tells a story of culinary excellence. Join us on a journey of
            gastronomic delight and experience the magic of pastry perfection.
          </p>
          <Link to="/Contact">
            {" "}
            <button>Contact us</button>
          </Link>
          <button id="scrollToTopBtn" title="Go to top" onClick={scrollToTop}>
            &#8593;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
