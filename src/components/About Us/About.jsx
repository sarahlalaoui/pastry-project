
import "./About.css";
import baker from "../../assets/baker.jpg"

const About = () => {
    return (
       
             <div className="about" id="About">
                <section>
                    <h2>About Us</h2>
                    <p>We are a company that primarily specializes in bread among other things. We cater to many banquet halls, restaurants and grocery stores across the GTA. and have been doing so successfully for over 40 years! </p>
                    <p>We spend a large amount time in bakeries, and indulge in our own creations as well as other desserts in the city. We continue to grow every year with the dedication of our workers and most importantly with you, our customers.</p>
                </section>
         <img src={baker} alt="baker" />
            </div>
        
    );
};

export default About;