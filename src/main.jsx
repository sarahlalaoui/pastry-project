import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Product from './pages/Product/Product.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Contact from './pages/Contact/Contact.jsx'
import Admin from './pages/Admin/Admin.jsx'
import AdminDashboard from './pages/AdminDashboard/AdminDashboard.jsx'
import ManageProduct from './pages/ManageProduct/ManageProduct.jsx'
import CreateProduct from'./pages/CreateProduct/CreateProduct.jsx'





const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "/product",
    element: <Product></Product>,

  },
 
  {
    path: "/Contact",
    element: <Contact></Contact>,
  
  },
  {
    path: "/Admin",
    element: <Admin></Admin>,
  
  },
  {
    path: "/AdminDashboard",
    element: <AdminDashboard></AdminDashboard>,
  
  },
  {
    path: "/CreateProduct",
    element: <CreateProduct></CreateProduct>,
  
  },
  {
    path: "/ManageProduct",
    element: <ManageProduct></ManageProduct>,
  
  },

  
 
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
