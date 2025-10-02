import React, { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import ProductForm from "../components/ProductForm";
import SearchBar from "../components/SearchBar";
import styles from "../styles/Products.module.css";

function Products() {
  const [products, setProducts] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [search, setSearch] = useState("");
  const [sortField, setSortField] = useState("");

  // ✅ Load products from localStorage
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("products")) || [];
    setProducts(stored);
  }, []);

  // ✅ Save products to localStorage whenever products change
  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  const addProduct = (newProduct) => {
    const productWithId = { id: Date.now(), ...newProduct }; // unique id
    setProducts([productWithId, ...products]);
    setShowForm(false);
  };

  // ✅ Filter + Sort
  const filteredProducts = products
    .filter((p) => p.name.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => {
      if (sortField === "price") return a.price - b.price;
      if (sortField === "stock") return a.stock - b.stock;
      return 0;
    });

  return (
    <div className={styles.container}>
      <h1>Products Inventory</h1>

      {/* Top Controls */}
      <div className={styles.topControls}>
        <SearchBar
          placeholder="Search product..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className={styles.sortButtons}>
          <button onClick={() => setSortField("price")}>Sort by Price</button>
          <button onClick={() => setSortField("stock")}>Sort by Stock</button>
        </div>

        <button className={styles.addBtn} onClick={() => setShowForm(true)}>
          Add Product
        </button>
      </div>

      {/* Product Form Modal */}
      {showForm && (
        <ProductForm
          onAddProduct={addProduct}
          onClose={() => setShowForm(false)}
        />
      )}

      {/* Products Grid */}
      <div className={styles.productsGrid}>
        {filteredProducts.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}

export default Products;
