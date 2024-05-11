import { useState } from 'react';
import "./ManageProduct.css" ;

const ManageProduct = () => {
    // State to hold the list of products
    const [products, setProducts] = useState([
        { id: 1, name: 'Product 1', price: 10 },
        { id: 2, name: 'Product 2', price: 20 },
        // Add more products as needed
    ]);

    // Function to modify a product
    const modifyProduct = (id, newName, newPrice) => {
        setProducts(products.map(product => {
            if (product.id === id) {
                return { ...product, name: newName, price: newPrice };
            }
            return product;
        }));
    };

    // Function to delete a product
    const deleteProduct = (id) => {
        setProducts(products.filter(product => product.id !== id));
    };

    return (
        <div>
            <h1>Manage Products</h1>
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        <span>{product.name} - ${product.price}</span>
                        {/* Input fields to modify product */}
                        <input type="text" placeholder="New Name" onChange={(e) => modifyProduct(product.id, e.target.value, product.price)} />
                        <input type="number" placeholder="New Price" onChange={(e) => modifyProduct(product.id, product.name, e.target.value)} />
                        {/* Button to delete product */}
                        <button onClick={() => deleteProduct(product.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ManageProduct;
