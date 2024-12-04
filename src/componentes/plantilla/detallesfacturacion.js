import React from "react";

const Details = () => {
  return (
    // Row start
    <div className="row gx-3">
      <div className="col-sm-12 col-12">
        <div className="card">
          <div className="card-header">
            <div className="card-title">Billing Details</div>
          </div>
          <div className="card-body">
            {/* Row start */}
            <div className="row gx-3">
              <div className="col-sm-8 col-12">
                {/* Row start */}
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
                      <select className="form-select">
                        <option value="">Select Country</option>
                        <option value="USA" selected>USA</option>
                        <option value="Brazil">Brazil</option>
                        <option value="India">India</option>
                        <option value="Indonesia">Indonesia</option>
                        <option value="United Kingdom">United Kingdom</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-sm-4 col-12">
                    <div className="mb-3">
                      <label className="form-label">Select City</label>
                      <select className="form-select">
                        <option value="">Select City</option>
                        <option value="Chicago" selected>Chicago</option>
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
                      <input type="text" className="form-control" defaultValue={98980} />
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
                      <textarea rows={3} className="form-control" defaultValue="Quick Delivery" />
                    </div>
                  </div>
                  <div className="col-xxl-12">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" defaultChecked />
                      <label className="form-check-label">Save this Address</label>
                    </div>
                  </div>
                </div>
                {/* Row end */}
              </div>
              <div className="col-sm-4 col-12">
                {/* Products List */}
                <div className="product-list-card">
                  <h5>Order List</h5>
                  <div className="product-list-block">
                    <img className="product-list-img" src="assets/images/food/img7.jpg" alt="Max Admin" />
                    <div className="product-list-details">
                      <h5 className="product-list-title">Barbecue Chicken Salad</h5>
                      <div className="product-list-price">$25.00</div>
                    </div>
                  </div>
                  <div className="product-list-block">
                    <img className="product-list-img" src="assets/images/food/img9.jpg" alt="Max Admin" />
                    <div className="product-list-details">
                      <h5 className="product-list-title">Harvest Cobb Salad</h5>
                      <div className="product-list-price">$15.00</div>
                    </div>
                  </div>
                  <div className="product-list-block">
                    <img className="product-list-img" src="assets/images/food/img2.jpg" alt="Max Admin" />
                    <div className="product-list-details">
                      <h5 className="product-list-title">Greek Salad</h5>
                      <div className="product-list-price">$28.00</div>
                    </div>
                  </div>
                  <div className="product-list-block">
                    <img className="product-list-img" src="assets/images/food/img6.jpg" alt="Max Admin" />
                    <div className="product-list-details">
                      <h5 className="product-list-title">Garden Chickpea Salad</h5>
                      <div className="product-list-price">$22.00</div>
                    </div>
                  </div>
                </div>
                <div className="mb-2">
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="paymentRadio" id="paymentRadio1" />
                    <label className="form-check-label" htmlFor="paymentRadio1">Paypal</label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="paymentRadio" id="paymentRadio2" defaultChecked />
                    <label className="form-check-label" htmlFor="paymentRadio2">Cash On Delivery</label>
                  </div>
                </div>
              </div>
            </div>
            {/* Row end */}
            {/* Row start */}
            <div className="row gx-3">
              <div className="col-xxl-12">
                <div className="sub-total-container">
                  <div className="total">Order Total: $90.00</div>
                  <a href="#" className="btn btn-success btn-lg">Place Order</a>
                </div>
              </div>
            </div>
            {/* Row end */}
          </div>
        </div>
      </div>
    </div>
    // Row end
  );
};

export default Details;
