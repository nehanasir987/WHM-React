// components/Auth/Register.jsx

function Registers() {   // components name must be capital 
 return (
    <div className="container mt-4">
      <h2 className="mb-4">Dashboard</h2>
      
      <div className="row">
        {/* Card 1 */}
        <div className="col-md-4">
          <div className="card text-center shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Total Products</h5>
              <p className="display-6">120</p>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="col-md-4">
          <div className="card text-center shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Total Stock</h5>
              <p className="display-6">4000</p>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="col-md-4">
          <div className="card text-center shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Low Stock Items</h5>
              <p className="display-6">5</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// JSX = Javascript XML that is the combination of JS & HTML-like Syntax.
// Browser does not understand JSX directly, so Babel/React compiler converts it into plain JavaScript.

export default Registers
