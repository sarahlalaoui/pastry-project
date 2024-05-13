import { useState } from "react";
import "./CreateProduct.css";
import axios from "axios";

const CreateProduct = () => {
  const [productImg, setProductImg] = useState("");
  const handleUpload = (e) => {
    setProductImg(URL.createObjectURL(e.target.files[0]));
  };
  const handlesubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const productname = formData.get("productname");
    const prix = formData.get("prix");
    
    

    const image = productImg
    formData.append("image",image)
    console.log(formData);

  axios
  .post("http://localhost:5000/product/", formData)
  .then((res)=>{console.log(res.Data)
  })
  .catch((err) =>console.log(err)
  
)}
  return (
    <div>
      <form onSubmit={(e)=>handlesubmit(e)}>
        
        <input type="text" placeholder="product name" name="productname" />
        <input type="text" placeholder="prix" name="prix"/>
        <div className="pfp">
          <input
            type="file"
            name="image"
            onChange={handleUpload}
            id="actual-btn"
            hidden
          />
          <img src={productImg} className="profile-img" alt="pfp" />
          <label htmlFor="actual-btn" className="upload-btn">
            {/* Add profile pic */}
          </label>
        </div>
        <button type="submit">Add a product</button>
      </form>
    </div>
  );
};

export default CreateProduct;
