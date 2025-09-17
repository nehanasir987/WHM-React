import React from "react";
import styles from "../styles/ProductCard.module.css";

function ProductCard({ product }) {
  return (
    <div className={styles.card}>
      {product.image && <img src={product.image} alt={product.name} className={styles.image} />}
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p><strong>Category:</strong> {product.category}</p>
      <p><strong>Stock:</strong> {product.stock}</p>
      <p><strong>Price:</strong> ${product.price}</p>
    </div>
  );
}

export default ProductCard;
