import { useState } from "react";

export default function StoreForm({ onSave }) {
  const [form, setForm] = useState({
    name: "",
    area: "",
    address: "",
    owner: "",
    payment: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(form);
    setForm({ name: "", area: "", address: "", owner: "", payment: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Store Name" onChange={handleChange} />
      <input name="area" placeholder="Area" onChange={handleChange} />
      <input name="address" placeholder="Address" onChange={handleChange} />
      <input name="owner" placeholder="Owner" onChange={handleChange} />
      <input name="payment" placeholder="Payment Terms" onChange={handleChange} />
      <button type="submit">Save Store</button>
    </form>
  );
}
