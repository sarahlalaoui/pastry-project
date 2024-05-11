import "./AdminDashboard.css";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const Navigate = useNavigate()
  return (
    <div className="admin-dashboard">
      <div className="dashboard-navigation">
        <button onClick={()=>Navigate("/CreateProduct")}>Create Product</button>
        <button onClick={()=>Navigate("/ManageProduct")}>Manage Product</button>
      </div>
    </div>
    
  );
};

export default AdminDashboard;
