import { useState } from "react";
import "./Admin.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Admin = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
const navigate =useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/auth/login", formData)
      .then((res) => {
        localStorage.setItem("token",res.data.token)
        localStorage.setItem("user",res.data.user)
        navigate('/AdminDashboard')
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="admin-container">
      <h1 className="admin-heading">Admin</h1>
      <form onSubmit={handleSubmit} className="admin-form">
        <div className="form-group">
          <label htmlFor="email" className="form-label">
          email :
          </label>
          <input
            type="text"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password" className="form-label">
            password :
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>
        <button type="submit" className="submit-button">
          connexion
        </button>
      </form>
    </div>
  );
};

export default Admin;
