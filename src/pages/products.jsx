import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function Products() {
  const navigate = useNavigate(); // ✅ initialize navigate

  // initial products
  const [products, setProducts] = useState([
    { id: 1, name: "Laptop", category: "Electronics", stock: 20, price: 1000 },
    { id: 2, name: "Keyboard", category: "Electronics", stock: 50, price: 50 },
    { id: 3, name: "Shoes", category: "Fashion", stock: 15, price: 80 },
    { id: 4, name: "Book", category: "Stationery", stock: 100, price: 10 },
  ]);

  const [search, setSearch] = useState(""); // search term
  const [sortField, setSortField] = useState(""); // sort field

  // Filtered and sorted products
  const filteredProducts = products
    .filter((item) => 
      item.name.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => {
      if (sortField === "price") return a.price - b.price;
      if (sortField === "stock") return a.stock - b.stock;
      return 0; // no sorting
    });

  return (
    <div style={{ padding: "40px" }}>
      <h2 style={{ color: "white", backgroundColor: "black", fontSize: "40px", fontWeight: "bolder" }}>
        Products Inventory
      </h2>

      {/* Search input */}
      <div style={{ margin: "20px 0" }}>
        <input 
          type="text" 
          placeholder="Search product..." 
          value={search} 
          onChange={(e) => setSearch(e.target.value)} 
          className="form-control"
        />
      </div>

      {/* Sort buttons */}
      <div style={{ margin: "20px 0" }}>
        <button onClick={() => setSortField("price")} className="btn btn-primary me-2">Sort by Price</button>
        <button onClick={() => setSortField("stock")} className="btn btn-secondary">Sort by Stock</button>
      </div>

       {/* Add Product button */}
      <div style={{ margin: "20px 0" }}>
        <button 
          className="btn btn-success" 
          onClick={() => navigate("/add-product")} // navigate to Add Product page
        >
          Add Product
        </button>
      </div>

      {filteredProducts.length === 0 ? <h3>Products are not found...</h3> : null}

      <table className="table table-bordered w-100" border="5" style={{ tableLayout: "fixed" }}>
        <thead className="table-dark">
          <tr>
            <th style={{ width: "10%" }}>ID</th>
            <th style={{ width: "30%" }}>Product Name</th>
            <th style={{ width: "20%" }}>Category</th>
            <th style={{ width: "20%" }}>Stock</th>
            <th style={{ width: "20%" }}>Price ($)</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.category}</td>
              <td>{item.stock}</td>
              <td>{item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Products;
