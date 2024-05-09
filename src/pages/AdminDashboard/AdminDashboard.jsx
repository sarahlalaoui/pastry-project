import "./AdminDashboard.css";
import CreateProduct from "../CreateProduct/CreateProduct";
import ManageProduct from "../ManageProduct/ManageProduct";

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <div className="dashboard-navigation">
        <button onClick={CreateProduct}>Create Product</button>
        <button onClick={ManageProduct}>Manage Product</button>
      </div>
    </div>
  );
};

export default AdminDashboard;
