import React from "react";

 function Salesmen() {
  return (
    <div className="container mt-4">
      <h3>Salesmen Page</h3>
      <p>show salesmen Data.</p>

      <form>
        <input type="text" placeholder="Enter name" className="form-control mb-2" />
        <input type="text" placeholder="Enter phone" className="form-control mb-2" />
        <button type="button" className="btn btn-primary">
          Add Salesman
        </button>
      </form>

      <table className="table table-bordered mt-3">
        <thead className="table-light">
          <tr>
            <th>Name</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Ali</td>
            <td>03001234567</td>
          </tr>
          <tr>
            <td>Ahmed</td>
            <td>03111234567</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}


export default Salesmen;
