import React, { useState, useEffect } from "react";
import SalesmanForm from "../components/SalesmanForm";
import styles from "./SalesmanForm.module.css";

function Salesmen() {
  const [salesmen, setSalesmen] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editSalesman, setEditSalesman] = useState(null);
  const [notification, setNotification] = useState({ show: false, message: "", type: "" });
  const [searchId, setSearchId] = useState(""); // ✅ Search input state

  // Load data from localStorage on mount
  useEffect(() => {
    const savedSalesmen = localStorage.getItem("salesmen");
    if (savedSalesmen) {
      setSalesmen(JSON.parse(savedSalesmen));
    }
  }, []);

  // Save data to localStorage whenever salesmen changes
  useEffect(() => {
    localStorage.setItem("salesmen", JSON.stringify(salesmen));
  }, [salesmen]);

  const showNotification = (message, type) => {
    setNotification({ show: true, message, type });
    setTimeout(() => setNotification({ show: false, message: "", type: "" }), 3000);
  };

  // Save (Add / Update)
  const handleSave = (newSalesman) => {
    if (editSalesman) {
      const updated = salesmen.map((s) =>
        s.id === editSalesman.id ? { ...s, ...newSalesman } : s
      );
      setSalesmen(updated);
      setEditSalesman(null);
      showNotification("Salesman updated successfully!", "success");
    } else {
      const newEntry = { id: Date.now(), ...newSalesman };
      setSalesmen([...salesmen, newEntry]);
      showNotification("Salesman added successfully!", "success");
    }
    setShowForm(false);
  };

  // Delete
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this salesman?")) {
      setSalesmen(salesmen.filter((s) => s.id !== id));
      showNotification("Salesman deleted successfully!", "info");
    }
  };

  // Edit
  const handleEdit = (salesman) => {
    setEditSalesman(salesman);
    setShowForm(true);
  };

  // ✅ Filter by search ID
  const filteredSalesmen = searchId
    ? salesmen.filter((s) => String(s.id) === searchId)
    : salesmen;

  return (
    <div className={styles.container}>
      {notification.show && (
        <div className={`${styles.notification} ${styles[notification.type]}`}>
          {notification.message}
        </div>
      )}

      <div className={styles.topBar}>
        <h2 className={styles.pageTitle}>Salesmen Management</h2>
      </div>

      <div className={styles.topControls}>
        <p className={styles.totalCount}>
          Total Salesmen: <b>{salesmen.length}</b>
        </p>

        <input
          type="text"
          placeholder="Search by ID"
          value={searchId}
          onChange={(e) => setSearchId(e.target.value)}
          className={styles.searchBar}
        />
      </div>

      {/* Modal Form */}
      {showForm && (
        <SalesmanForm
          onSave={handleSave}
          onClose={() => {
            setShowForm(false);
            setEditSalesman(null);
          }}
          initialData={editSalesman}
        />
      )}

      {/* Salesmen Table */}
      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Phone</th>
              <th>CNIC</th>
              <th>Email</th>
              <th>Region</th>
              <th>Salary</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredSalesmen.length > 0 ? (
              filteredSalesmen.map((s) => (
                <tr key={s.id}>
                  <td>{s.id}</td>
                  <td>{s.name}</td>
                  <td>{s.phone}</td>
                  <td>{s.cnic}</td>
                  <td>{s.email}</td>
                  <td>{s.region}</td>
                  <td>${s.salary}</td>
                  <td>
                    <span
                      className={
                        s.status === "Active"
                          ? styles.activeStatus
                          : styles.inactiveStatus
                      }
                    >
                      {s.status}
                    </span>
                  </td>
                  <td>
                    <div className={styles.actionButtons}>
                      <button
                        className={styles.editBtn}
                        onClick={() => handleEdit(s)}
                      >
                        Edit
                      </button>
                      <button
                        className={styles.deleteBtn}
                        onClick={() => handleDelete(s.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="9" className={styles.noData}>
                  {searchId
                    ? "No record found with this ID."
                    : "No salesmen found. Click 'Add New Salesman' to create one."}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* ✅ Fixed Bottom Button */}
      <div className={styles.fixedBottom}>
        <button
          className={styles.addBtn}
          onClick={() => {
            setEditSalesman(null);
            setShowForm(true);
          }}
        >
          ➕ Add New Salesman
        </button>
      </div>
    </div>
  );
}

export default Salesmen;
