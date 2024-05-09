import { useRef } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import contactImg from "../../assets/contactImg.jpg";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { NavLink } from "react-router-dom";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_YOUR_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_YOUR_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          toast.success("Email sent successfully!");
        },
        (error) => {
          console.log("FAILED...", error.text);
          toast.error("Failed to send email");
        }
      );
  };

  const whatsappNumber = "213775352854";

  const handleWhatsAppClick = () => {
    const whatsappURL = `https://wa.me/${whatsappNumber}`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <div className="global-contact">
      <div className="nav-conatcat">
       <nav>
      <header>
        <h2>patisserie le mistral</h2>
        <ul className="list">
          <li className="navl">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="navl">
            <a href="#About">About us</a>
          </li>
          <li className="navl">
            <NavLink to="/product">our product</NavLink>
          </li>
          <li className="navl">
            <NavLink to="/Contact">Contact</NavLink>
          </li>
        </ul>
        </header>
        </nav>
        </div>

    <section className="contact" id="contact">
      <ToastContainer />
      <div className="contact-container">
        <div>
          <h1>Contact Us </h1>
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="name" placeholder="Name" required/>
            <input type="email" name="email" placeholder="Email" required/>
            <input type="text" name="subject" placeholder="Subject" required/>
            <textarea name="message" placeholder="Message" required/>
            <input id="submit-btn" type="submit" value="Send" />
            <p>OR</p>
            <button id="whats-btn" onClick={handleWhatsAppClick}>Contact us with WhatsApp</button>
          </form>
        </div>
        <div className="contact-pic">
          <img src={contactImg} alt="" />
        </div>
      </div>
    </section>
    </div>
  );
};

export default Contact;
