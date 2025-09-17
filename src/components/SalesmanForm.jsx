import React, { useState, useEffect } from "react";
import styles from "../pages/SalesmanForm.module.css";

export default function SalesmanForm({ onSave, onClose, initialData }) {
  const [form, setForm] = useState({
    id: "",
    name: "",
    phone: "",
    region: "",
    email: "",
    cnic: "",
    joiningDate: "",
    salary: "",
    commission: "",
    status: "Active",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Pre-fill form when editing
  useEffect(() => {
    if (initialData) {
      setForm(initialData);
    }
  }, [initialData]);

  // 🔑 ID Generator (random number 1 se 9999 tak)
  const generateId = () => {
    return Math.floor(Math.random() * 9999) + 1;
  };

  const validateForm = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.phone.trim()) newErrors.phone = "Phone is required";
    if (!form.region.trim()) newErrors.region = "Region is required";
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!form.cnic.trim()) newErrors.cnic = "CNIC is required";
    if (!form.joiningDate) newErrors.joiningDate = "Joining date is required";
    if (!form.salary || form.salary <= 0) newErrors.salary = "Valid salary is required";
    if (!form.commission || form.commission < 0) newErrors.commission = "Valid commission is required";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    if (validateForm()) {
      const salesmanData = {
        ...form,
      };
      onSave(salesmanData);
      onClose();
    }
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.card}>
        <div className={styles.header}>
          <h4>{initialData ? "Edit Salesman" : "Add New Salesman"}</h4>
          <button type="button" onClick={onClose} className={styles.closeBtn}>
            &times;
          </button>
        </div>

        <form onSubmit={handleSubmit} className={styles.form}>
          {/* 👇 Notice: yahan ID ka input hata diya hai, user id fill nahi karega */}
             
          <div className={styles.formGroup}>
            <input
              name="id"
              placeholder="id *"
              value={form.id}
              onChange={handleChange}
              className={errors.phone ? styles.errorInput : ""}
            />
            {errors.id && <span className={styles.errorText}>{errors.id}</span>}
          </div>
          <div className={styles.formGroup}>
            <input
              name="name"
              placeholder="Full Name *"
              value={form.name}
              onChange={handleChange}
              className={errors.name ? styles.errorInput : ""}
            />
            {errors.name && <span className={styles.errorText}>{errors.name}</span>}
          </div>
          
          <div className={styles.formGroup}>
            <input
              name="phone"
              placeholder="Phone Number *"
              value={form.phone}
              onChange={handleChange}
              className={errors.phone ? styles.errorInput : ""}
            />
            {errors.phone && <span className={styles.errorText}>{errors.phone}</span>}
          </div>
          
          <div className={styles.formGroup}>
            <input
              name="email"
              placeholder="Email *"
              value={form.email}
              onChange={handleChange}
              className={errors.email ? styles.errorInput : ""}
            />
            {errors.email && <span className={styles.errorText}>{errors.email}</span>}
          </div>
          
          <div className={styles.formGroup}>
            <input
              name="cnic"
              placeholder="CNIC *"
              value={form.cnic}
              onChange={handleChange}
              className={errors.cnic ? styles.errorInput : ""}
            />
            {errors.cnic && <span className={styles.errorText}>{errors.cnic}</span>}
          </div>
          
          <div className={styles.formGroup}>
            <label>Joining Date *</label>
            <input
              type="date"
              name="joiningDate"
              value={form.joiningDate}
              onChange={handleChange}
              className={errors.joiningDate ? styles.errorInput : ""}
            />
            {errors.joiningDate && <span className={styles.errorText}>{errors.joiningDate}</span>}
          </div>
          
          <div className={styles.formGroup}>
            <input
              name="region"
              placeholder="Region *"
              value={form.region}
              onChange={handleChange}
              className={errors.region ? styles.errorInput : ""}
            />
            {errors.region && <span className={styles.errorText}>{errors.region}</span>}
          </div>
          
          <div className={styles.formGroup}>
            <input
              type="number"
              name="salary"
              placeholder="Salary *"
              value={form.salary}
              onChange={handleChange}
              className={errors.salary ? styles.errorInput : ""}
            />
            {errors.salary && <span className={styles.errorText}>{errors.salary}</span>}
          </div>
          
          <div className={styles.formGroup}>
            <input
              type="number"
              name="commission"
              placeholder="Commission % *"
              value={form.commission}
              onChange={handleChange}
              className={errors.commission ? styles.errorInput : ""}
            />
            {errors.commission && <span className={styles.errorText}>{errors.commission}</span>}
          </div>
          
          <div className={styles.formGroup}>
            <select
              name="status"
              value={form.status}
              onChange={handleChange}
            >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>

          <div className={styles.actions}>
            <button type="submit" className={styles.saveBtn}>
              {initialData ? "Update" : "Save"}
            </button>
            <button type="button" onClick={onClose} className={styles.cancelBtn}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
