import React from "react";
import styles from "../styles/SearchBar.module.css";

function SearchBar({ placeholder, value, onChange }) {
  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={styles.searchInput}
      />
    </div>
  );
}

export default SearchBar;
