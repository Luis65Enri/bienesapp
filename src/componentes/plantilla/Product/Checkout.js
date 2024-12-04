import React from 'react';
import BillingForm from './BillingForm';
import OrderList from './OrderList';
import OrderSummary from './OrderSummary';

const Checkout = () => {
  const orderItems = [
    { id: 1, name: "Barbecue Chicken Salad", price: 25.00, image: "assets/images/food/img7.jpg" },
    { id: 2, name: "Harvest Cobb Salad", price: 15.00, image: "assets/images/food/img9.jpg" },
    { id: 3, name: "Greek Salad", price: 28.00, image: "assets/images/food/img2.jpg" },
    { id: 4, name: "Garden Chickpea Salad", price: 22.00, image: "assets/images/food/img6.jpg" },
  ];

  const total = orderItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="content-wrapper">
      <div className="row gx-3">
        <div className="col-sm-12 col-12">
          <div className="card">
            <div className="card-header">
              <div className="card-title">Billing Details</div>
            </div>
            <div className="card-body">
              <div className="row gx-3">
                <div className="col-sm-8 col-12">
                  <BillingForm />
                </div>
                <div className="col-sm-4 col-12">
                  <OrderList items={orderItems} />
                </div>
              </div>
              <OrderSummary total={total} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const BillingForm = () => (
    <div className="row gx-3">
      <div className="col-sm-4 col-12">
        <div className="mb-3">
          <label className="form-label">First Name</label>
          <input type="text" className="form-control" defaultValue="Abigale" />
        </div>
      </div>
      <div className="col-sm-4 col-12">
        <div className="mb-3">
          <label className="form-label">Last Name</label>
          <input type="text" className="form-control" defaultValue="Heaney" />
        </div>
      </div>
      <div className="col-sm-4 col-12">
        <div className="mb-3">
          <label className="form-label">Company Name</label>
          <input type="text" className="form-control" defaultValue="Max" />
        </div>
      </div>
      <div className="col-sm-4 col-12">
        <div className="mb-3">
          <label className="form-label">House No</label>
          <input type="text" className="form-control" defaultValue="27-950" />
        </div>
      </div>
      <div className="col-sm-4 col-12">
        <div className="mb-3">
          <label className="form-label">Select Country</label>
          <select className="form-select" defaultValue="USA">
            <option value="">Select Country</option>
            <option value="USA">USA</option>
            <option value="Brazil">Brazil</option>
            <option value="India">India</option>
            <option value="Indonesia">Indonesia</option>
            <option value="UK">United Kingdom</option>
          </select>
        </div>
      </div>
      <div className="col-sm-4 col-12">
        <div className="mb-3">
          <label className="form-label">Select City</label>
          <select className="form-select" defaultValue="Chicago">
            <option value="">Select City</option>
            <option value="Chicago">Chicago</option>
            <option value="San Diego">San Diego</option>
            <option value="Houston">Houston</option>
            <option value="New York">New York</option>
            <option value="Los Angeles">Los Angeles</option>
          </select>
        </div>
      </div>
      <div className="col-sm-4 col-12">
        <div className="mb-3">
          <label className="form-label">Postal Code</label>
          <input type="text" className="form-control" defaultValue="98980" />
        </div>
      </div>
      <div className="col-sm-4 col-12">
        <div className="mb-3">
          <label className="form-label">Phone</label>
          <input type="text" className="form-control" defaultValue="0000-0000-00" />
        </div>
      </div>
      <div className="col-sm-4 col-12">
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" className="form-control" defaultValue="info@example.com" />
        </div>
      </div>
      <div className="col-xxl-12">
        <div className="mb-2">
          <label className="form-label">Notes about your order</label>
          <textarea rows="3" className="form-control" defaultValue="Quick Delivery"></textarea>
        </div>
      </div>
      <div className="col-xxl-12">
        <div className="form-check">
          <input className="form-check-input" type="checkbox" defaultChecked />
          <label className="form-check-label">Save this Address</label>
        </div>
      </div>
    </div>
  );

const OrderList = ({ items }) => (
    <div className="product-list-card">
      <h5>Order List</h5>
      {items.map(item => (
        <div className="product-list-block" key={item.id}>
          <img className="product-list-img" src={item.image} alt={item.name} />
          <div className="product-list-details">
            <h5 className="product-list-title">{item.name}</h5>
            <div className="product-list-price">${item.price.toFixed(2)}</div>
          </div>
        </div>
      ))}
    </div>
);

  
const OrderSummary = ({ total }) => (
    <div className="row gx-3">
      <div className="col-xxl-12">
        <div className="sub-total-container">
          <div className="total">Order Total: ${total.toFixed(2)}</div>
          <a href="#" className="btn btn-success btn-lg">Place Order</a>
        </div>
      </div>
    </div>
);


export default Checkout;
