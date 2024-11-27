import React from "react";

const Sidebar = () => {
  return (
    <div>
      {/* Sidebar wrapper start */}
      <nav className="sidebar-wrapper">
        {/* Sidebar brand starts */}
        <div className="sidebar-brand">
          <a href="index.html" className="logo">
            <img src="assets/images/logo.svg" alt="Max Free Admin Dashboard" />
          </a>
        </div>
        {/* Sidebar brand ends */}
        {/* Sidebar menu starts */}
        <div className="sidebar-menu">
          <div className="sidebarMenuScroll">
            <ul>
              <li className="sidebar-dropdown">
                <a href="#">
                  <i className="bi bi-house" />
                  <span className="menu-text">Dashboards</span>
                </a>
                <div className="sidebar-submenu">
                  <ul>
                    <li>
                      <a href="index.html">Sales</a>
                    </li>
                    <li>
                      <a href="social.html">Social</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="sidebar-dropdown">
                <a href="#">
                  <i className="bi bi-handbag" />
                  <span className="menu-text">Product</span>
                </a>
                <div className="sidebar-submenu">
                  <ul>
                    <li>
                      <a href="orders.html">Order History</a>
                    </li>
                    <li>
                      <a href="products.html">Products</a>
                    </li>
                    <li>
                      <a href="view-cart.html">Shopping Cart</a>
                    </li>
                    <li>
                      <a href="checkout.html">Billing Details</a>
                    </li>
                    <li>
                      <a href="customers.html">Customers</a>
                    </li>
                    <li>
                      <a href="add-product.html">Add Product</a>
                    </li>
                    <li>
                      <a href="reviews.html">Reviews</a>
                    </li>
                  </ul>
                </div>
              </li>
              {/* Más ítems omitidos para brevedad */}
              <li>
                <a href="starter-page.html">
                  <i className="bi bi-hand-index-thumb" />
                  <span className="menu-text">Link</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* Sidebar menu ends */}
      </nav>
      {/* Sidebar wrapper end */}
    </div>
  );
};

export default Sidebar;
