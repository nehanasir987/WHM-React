import { useState } from "react";

export default function DeliveryForm({ stores, onSave }) {
  const [form, setForm] = useState({
    salesman: "",
    store: "",
    product: "",
    qty: "",
    payment: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(form);
    setForm({ salesman: "", store: "", product: "", qty: "", payment: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="salesman" placeholder="Salesman Name" onChange={handleChange} />
      <select name="store" onChange={handleChange}>
        <option value="">Select Store</option>
        {stores.map((s) => (
          <option key={s.id} value={s.id}>{s.name}</option>
        ))}
      </select>
      <input name="product" placeholder="Product Name" onChange={handleChange} />
      <input name="qty" placeholder="Quantity" onChange={handleChange} />
      <select name="payment" onChange={handleChange}>
        <option value="Pending">Pending</option>
        <option value="Paid">Paid</option>
      </select>
      <button type="submit">Save Delivery</button>
    </form>
  );
}
