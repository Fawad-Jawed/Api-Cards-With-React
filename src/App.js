import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./layouts/navbar";
import Footer from "./layouts/footer";

function App() {
  const [products, setProducts] = useState([]);

  const getApiData = () => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const addToCart = (itemName) => {
    alert(`${itemName} has been added to the cart!`);
  };

  useEffect(() => {
    getApiData();
  }, []);

  return (
    <>
    <Navbar />

    <div className="container mx-auto p-8">
      <h1 className="text-6xl font-bold mb-4 text-center">Product List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white border rounded-lg shadow-md p-4"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-48 object-cover mb-4 rounded"
            />
            <h2 className="text-lg font-semibold">{product.title}</h2>
            <p className="text-gray-700">Description: {product.description.substring(0, 100)}...</p>
            <p className="text-xl font-bold">${product.price}</p>
            <button onClick={() => addToCart(product.title)} className="mt-2 bg-black text-white py-2 px-4 rounded">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>

    <Footer />
    </>
  );
}

export default App;