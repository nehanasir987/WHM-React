import React from "react";

const Dashboard = () => {
  let date = new Date();
   
  let total_product = 255;
   let Total_Stock = 55;
    let Low_Stock_items = 89;

  return (
    <React.Fragment>
      <br />
      <br />
   
      <p>
        The Current Date is {date.toLocaleDateString()}
        <br />
        The Current Time is {date.toLocaleTimeString()}
      </p>

      <h1>Ware-House-Stock</h1>

      <div className="dashboard-card container mt-4">

        <div className="row">
          {/* Column 1 */}
          <div className="col-md-4">
            <div className="card">
              <img
                src="https://plus.unsplash.com/premium_photo-1663091967607-2e15b89f4d6e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8d2FyZWhvdXNlfGVufDB8fDB8fHww"
                className="card-img-top"
                alt="Card 1"
              />
              <div className="card-body">
                <h5 className="card-title">Product-1</h5>
                <h6 className="card-text">
                  Total Product: {total_product}
                  <br />
                  Total Stock: {Total_Stock}
                  <br />
                  Low Stock items: {Low_Stock_items}
                </h6>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>

          {/* Column 2 */}
          <div className="col-md-4">
            <div className="card">
              <img
                src="https://images.unsplash.com/photo-1569062980724-23e1063d8790?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2FyZWhvdXNlJTIwcHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D"
                className="card-img-top"
                alt="Card 2"
              />
              <div className="card-body">
                <h5 className="card-title">Product-2</h5>
                <h6 className="card-text">
                Total Product: {total_product}
                <br />
                Total Stock: {Total_Stock}
                <br />
                Low Stock items: {Low_Stock_items}

                </h6>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>

          {/* Column 3 */}
          <div className="col-md-4">
            <div className="card">
            <img
                src="https://images.unsplash.com/photo-1724709162875-fe100dd0e04b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHdhcmVob3VzZSUyMHByb2R1Y3R8ZW58MHx8MHx8fDA%3D"
                className="card-img-top"
                alt="Card 3"
              />
              <div className="card-body">
                <h5 className="card-title">Product-3</h5>
                <h6 className="card-text">
                  Total Product: {total_product}
                  <br />
                  Total Stock: {Total_Stock}
                  <br />
                  Low Stock items: {Low_Stock_items}
                </h6>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Dashboard;


























{/* React me jab hum multiple elements return karte hain ek component se, to ek parent element zaroori hota hai.
  return (
  <h1>Hello</h1>
  <p>World</p>
); ===========Error
Hum usually sab ko ek <div> ke andar wrap kar dete hain: jis sy DOM  me div add ho jata hn unnecessary hota hn......

<React.Fragment> ya shorthand <>...</> use karke hum multiple elements group kar sakte hain without extra DOM node:

it is used to return a multiple jsx element without extra DOM Wrapper*/}