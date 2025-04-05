import React from "react";
import "./App.css";

const products = [
  {
    name: "Red Kurti",
    price: "₹699",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Denim Jacket",
    price: "₹1199",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Printed T-Shirt",
    price: "₹499",
    image: "https://via.placeholder.com/150",
  },
];

function App() {
  return (
    <div className="App">
      <h1 style={{ textAlign: "center", margin: "20px" }}>Fathima's Clothing Shop</h1>
      <div style={{ display: "flex", justifyContent: "center", gap: "30px", flexWrap: "wrap" }}>
        {products.map((item, index) => (
          <div key={index} style={{ border: "1px solid #ccc", padding: "10px", width: "200px", borderRadius: "8px" }}>
            <img src={item.image} alt={item.name} style={{ width: "100%", height: "auto" }} />
            <h3>{item.name}</h3>
            <p>{item.price}</p>
            <button style={{ backgroundColor: "#007bff", color: "white", padding: "5px 10px", border: "none", borderRadius: "4px" }}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
