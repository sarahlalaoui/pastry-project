import About from "./components/About Us/About";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import "./App.css";
import Gallery from "./components/Gallery/Gallery";
import Maps from "./components/maps/Maps";
import Footer from "./components/Footer/Footer";



const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Home></Home>

      <div className="about-container">
        <About></About>
      </div>

      <Gallery></Gallery>
      <Maps></Maps>


      
      <Footer></Footer>
    
   
   
      
    </div>
  );
};

export default App;
