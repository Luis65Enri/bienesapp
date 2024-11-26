import React from "react"

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
      {/* Sidebar brand starts */}
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
            <li className="sidebar-dropdown">
              <a href="#">
                <i className="bi bi-gem" />
                <span className="menu-text">Widgets</span>
              </a>
              <div className="sidebar-submenu">
                <ul>
                  <li>
                    <a href="widgets.html">Widgets</a>
                  </li>
                  <li>
                    <a href="graph-widgets.html">Graph Widgets</a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="sidebar-dropdown">
              <a href="#">
                <i className="bi bi-collection" />
                <span className="menu-text">UI Elements</span>
              </a>
              <div className="sidebar-submenu">
                <ul>
                  <li>
                    <a href="accordions.html">Accordions</a>
                  </li>
                  <li>
                    <a href="alerts.html">Alerts</a>
                  </li>
                  <li>
                    <a href="buttons.html">Buttons</a>
                  </li>
                  <li>
                    <a href="badges.html">Badges</a>
                  </li>
                  <li>
                    <a href="cards.html">Cards</a>
                  </li>
                  <li>
                    <a href="carousel.html">Carousel</a>
                  </li>
                  <li>
                    <a href="dropdowns.html">Dropdowns</a>
                  </li>
                  <li>
                    <a href="icons.html">Icons</a>
                  </li>
                  <li>
                    <a href="modals.html">Modals</a>
                  </li>
                  <li>
                    <a href="offcanvas.html">Off Canvas</a>
                  </li>
                  <li>
                    <a href="placeholders.html">Placeholders</a>
                  </li>
                  <li>
                    <a href="progress.html">Progress Bars</a>
                  </li>
                  <li>
                    <a href="spinners.html">Spinners</a>
                  </li>
                  <li>
                    <a href="tabs.html">Tabs</a>
                  </li>
                  <li>
                    <a href="tooltips.html">Tooltips</a>
                  </li>
                  <li>
                    <a href="typography.html">Typography</a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="sidebar-dropdown active">
              <a href="#">
                <i className="bi bi-stickies" />
                <span className="menu-text">Pages</span>
              </a>
              <div className="sidebar-submenu">
                <ul>
                  <li>
                    <a href="create-invoice.html">Create Invoice</a>
                  </li>
                  <li>
                    <a href="view-invoice.html">View Invoice</a>
                  </li>
                  <li>
                    <a href="invoice-list.html">Invoice List</a>
                  </li>
                  <li>
                    <a href="subscribers.html">Subscribers</a>
                  </li>
                  <li>
                    <a href="contacts.html">Contacts</a>
                  </li>
                  <li>
                    <a href="pricing.html" className="current-page">Pricing</a>
                  </li>
                  <li>
                    <a href="profile.html">Profile</a>
                  </li>
                  <li>
                    <a href="account-settings.html">Account Settings</a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="sidebar-dropdown">
              <a href="#">
                <i className="bi bi-calendar4" />
                <span className="menu-text">Calendars</span>
              </a>
              <div className="sidebar-submenu">
                <ul>
                  <li>
                    <a href="calendar.html">Daygrid View</a>
                  </li>
                  <li>
                    <a href="calendar-external-draggable.html">External Draggable</a>
                  </li>
                  <li>
                    <a href="calendar-google.html">Google Calendar</a>
                  </li>
                  <li>
                    <a href="calendar-list-view.html">List View</a>
                  </li>
                  <li>
                    <a href="calendar-selectable.html">Selectable</a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="sidebar-dropdown">
              <a href="#">
                <i className="bi bi-columns-gap" />
                <span className="menu-text">Forms</span>
              </a>
              <div className="sidebar-submenu">
                <ul>
                  <li>
                    <a href="form-inputs.html">Form Inputs</a>
                  </li>
                  <li>
                    <a href="form-checkbox-radio.html">Checkbox &amp; Radio</a>
                  </li>
                  <li>
                    <a href="form-file-input.html">File Input</a>
                  </li>
                  <li>
                    <a href="form-validations.html">Validations</a>
                  </li>
                  <li>
                    <a href="bs-select.html">Bootstrap Select</a>
                  </li>
                  <li>
                    <a href="date-time-pickers.html">Date Time Pickers</a>
                  </li>
                  <li>
                    <a href="input-mask.html">Input Masks</a>
                  </li>
                  <li>
                    <a href="summernote.html">Summernote</a>
                  </li>
                  <li>
                    <a href="form-layout1.html">Form Layout</a>
                  </li>
                  <li>
                    <a href="form-layout2.html">Form Layout 2</a>
                  </li>
                  <li>
                    <a href="form-layout3.html">Form Layout 3</a>
                  </li>
                  <li>
                    <a href="form-layout4.html">Form Layout Horizontal</a>
                  </li>
                  <li>
                    <a href="form-layout5.html">Form Layout Tabs</a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="sidebar-dropdown">
              <a href="#">
                <i className="bi bi-window-split" />
                <span className="menu-text">Tables</span>
              </a>
              <div className="sidebar-submenu">
                <ul>
                  <li>
                    <a href="tables.html">Tables</a>
                  </li>
                  <li>
                    <a href="data-tables.html">Data Tables</a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="sidebar-dropdown">
              <a href="#">
                <i className="bi bi-pie-chart" />
                <span className="menu-text">Graphs &amp; Maps</span>
              </a>
              <div className="sidebar-submenu">
                <ul>
                  <li>
                    <a href="apex.html">Apex</a>
                  </li>
                  <li>
                    <a href="morris.html">Morris</a>
                  </li>
                  <li>
                    <a href="maps.html">Maps</a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="sidebar-dropdown">
              <a href="#">
                <i className="bi bi-layout-sidebar" />
                <span className="menu-text">Layouts</span>
              </a>
              <div className="sidebar-submenu">
                <ul>
                  <li>
                    <a href="layout.html">Default Layout</a>
                  </li>
                  <li>
                    <a href="layout-grid.html">Grid Layout</a>
                  </li>
                  <li>
                    <a href="layout-mega-menu.html">Mega Menu</a>
                  </li>
                  <li>
                    <a href="layout-full-screen.html">Full Screen</a>
                  </li>
                  <li>
                    <a href="layout-toggle-screen.html">Toggle Screen</a>
                  </li>
                  <li>
                    <a href="layout-welcome.html">Welcome Layout</a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="sidebar-dropdown">
              <a href="#">
                <i className="bi bi-x-diamond" />
                <span className="menu-text">Authentication</span>
              </a>
              <div className="sidebar-submenu">
                <ul>
                  <li>
                    <a href="login.html">Login</a>
                  </li>
                  <li>
                    <a href="signup.html">Signup</a>
                  </li>
                  <li>
                    <a href="error.html">Error</a>
                  </li>
                  <li>
                    <a href="maintenance.html">Maintenance</a>
                  </li>
                </ul>
              </div>
            </li>
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
  )
  export default sidebar
