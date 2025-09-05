import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Products() {
  //array of objects
  const products = [  
    { id: 1, name: "Laptop", category: "Electronics", stock: 20, price: 1000 },
    { id: 2, name: "Keyboard", category: "Electronics", stock: 50, price: 50 },
    { id: 3, name: "Shoes", category: "Fashion", stock: 15, price: 80 },
    { id: 4, name: "Book", category: "Stationery", stock: 100, price: 10 },
  ];
   
  let message = products.length === 0 ? <h3>Products are not found...</h3> : null;
   // falsy value:  empty , 0 , null , undefined , NAN 
  return (
    <>
      <div style={{ padding: "40px" }}>
        <h2 style={{color: "white" , backgroundColor: "black" , fontSize: "40px" , fontWeight: "bolder"}}>Products Inventory</h2>
        {message}
        {/* Table full width */}
        <table className="table table-bordered w-100" border="5" style={{ tableLayout: "fixed" }}>{/* table-bordered =  hr cell me border lines */}
          <thead className="table-dark">
            <tr>
              <th style={{ width: "10%" }}>ID</th>
              <th style={{ width: "30%" }}>Product Name</th>
              <th style={{ width: "20%" }}>Category</th>
              <th style={{ width: "20%" }}>Stock</th>
              <th style={{ width: "20%" }}>Price ($)</th>
            </tr>
          </thead>
          <tbody>{/* javascript .map() method - like a loop ---React me map() mostly UI generate karne ke liye use hota hai.---i jo har element ko iterate karta hai, callback function apply karta hai, aur ek new array return karta hai bina original array ko modify kiye.*/}
            {products.map((item) => (  
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
    </>
  );
}

export default Products;




{/* javascript .map() method - like a loop ---React me map() mostly UI generate karne ke liye use hota hai.---aik cheez ko doosri cheez me convert krna hn--aik array ko like ddosri row me convert krna hn----purpose: list render from array data--- directly used in jsx --- 
  
  key props:               <tr key={item.id}>
 jb b kis list ko ya tr ko render kr rahyn hn  item ky pass aik id hona chahiyn...Agar key nahi doge, React har update me puri list ko dobara render karega.Agar key doge (jaise item.id), React sirf usi row ko update karega jo change hui hai → fast performance.


 "Map ek higher-order function hai jo ek array ke har element ko iterate karta hai aur ek naya array banata hai. React me hum map use karte hain taake data arrays ko dynamically UI me render kar saken, jaise 100 products ko manually likhne ki bajaye map se table rows ban jati hain. Key prop isliye dete hain taake React efficiently track kare ke kaunsa row change hua hai."
  */}