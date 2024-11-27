import React from 'react';

const Sidebar = () => {
    return (
        <div>
            <nav className="sidebar-wrapper">
                {/* Sidebar brand starts */}
                <div className="sidebar-brand">
                    <a href="" className="logo">
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
                                            <a href="">Order History</a>
                                        </li>
                                        <li>
                                            <a href="">Products</a>
                                        </li>
                                        <li>
                                            <a href="">Shopping Cart</a>
                                        </li>
                                        <li>
                                            <a href="">Billing Details</a>
                                        </li>
                                        <li>
                                            <a href="">Customers</a>
                                        </li>
                                        <li>
                                            <a href="">Add Product</a>
                                        </li>
                                        <li>
                                            <a href="">Reviews</a>
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
                                            <a href="">Widgets</a>
                                        </li>
                                        <li>
                                            <a href="">Graph Widgets</a>
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
                                            <a href="">Accordions</a>
                                        </li>
                                        <li>
                                            <a href="">Alerts</a>
                                        </li>
                                        <li>
                                            <a href="">Buttons</a>
                                        </li>
                                        <li>
                                            <a href="">Badges</a>
                                        </li>
                                        <li>
                                            <a href="">Cards</a>
                                        </li>
                                        <li>
                                            <a href="">Carousel</a>
                                        </li>
                                        <li>
                                            <a href="">Dropdowns</a>
                                        </li>
                                        <li>
                                            <a href="">Icons</a>
                                        </li>
                                        <li>
                                            <a href="">Modals</a>
                                        </li>
                                        <li>
                                            <a href="">Off Canvas</a>
                                        </li>
                                        <li>
                                            <a href="">Placeholders</a>
                                        </li>
                                        <li>
                                            <a href="">Progress Bars</a>
                                        </li>
                                        <li>
                                            <a href="">Spinners</a>
                                        </li>
                                        <li>
                                            <a href="">Tabs</a>
                                        </li>
                                        <li>
                                            <a href="">Tooltips</a>
                                        </li>
                                        <li>
                                            <a href="">Typography</a>
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
                                            <a href="">Create Invoice</a>
                                        </li>
                                        <li>
                                            <a href="">View Invoice</a>
                                        </li>
                                        <li>
                                            <a href="">Invoice List</a>
                                        </li>
                                        <li>
                                            <a href="">Subscribers</a>
                                        </li>
                                        <li>
                                            <a href="">Contacts</a>
                                        </li>
                                        <li>
                                            <a href="" className="current-page">Pricing</a>
                                        </li>
                                        <li>
                                            <a href="">Profile</a>
                                        </li>
                                        <li>
                                            <a href="">Account Settings</a>
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
                                            <a href="">Daygrid View</a>
                                        </li>
                                        <li>
                                            <a href="">External Draggable</a>
                                        </li>
                                        <li>
                                            <a href="">Google Calendar</a>
                                        </li>
                                        <li>
                                            <a href="">List View</a>
                                        </li>
                                        <li>
                                            <a href="">Selectable</a>
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
                                            <a href="">Form Inputs</a>
                                        </li>
                                        <li>
                                            <a href="">Checkbox &amp; Radio</a>
                                        </li>
                                        <li>
                                            <a href="">File Input</a>
                                        </li>
                                        <li>
                                            <a href="">Validations</a>
                                        </li>
                                        <li>
                                            <a href="">Bootstrap Select</a>
                                        </li>
                                        <li>
                                            <a href="">Date Time Pickers</a>
                                        </li>
                                        <li>
                                            <a href="">Input Masks</a>
                                        </li>
                                        <li>
                                            <a href="">Summernote</a>
                                        </li>
                                        <li>
                                            <a href="">Form Layout</a>
                                        </li>
                                        <li>
                                            <a href="">Form Layout 2</a>
                                        </li>
                                        <li>
                                            <a href="">Form Layout 3</a>
                                        </li>
                                        <li>
                                            <a href="">Form Layout Horizontal</a>
                                        </li>
                                        <li>
                                            <a href="">Form Layout Tabs</a>
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
                                            <a href="">Tables</a>
                                        </li>
                                        <li>
                                            <a href="">Data Tables</a>
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
                                            <a href="">Apex</a>
                                        </li>
                                        <li>
                                            <a href="">Morris</a>
                                        </li>
                                        <li>
                                            <a href="">Maps</a>
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
                                            <a href="">Default Layout</a>
                                        </li>
                                        <li>
                                            <a href="">Grid Layout</a>
                                        </li>
                                        <li>
                                            <a href="">Mega Menu</a>
                                        </li>
                                        <li>
                                            <a href="">Full Screen</a>
                                        </li>
                                        <li>
                                            <a href="">Toggle Screen</a>
                                        </li>
                                        <li>
                                            <a href="">Welcome Layout</a>
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
                                            <a href="">Login</a>
                                        </li>
                                        <li>
                                            <a href="">Signup</a>
                                        </li>
                                        <li>
                                            <a href="">Error</a>
                                        </li>
                                        <li>
                                            <a href="">Maintenance</a>
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

        </div>
    );
};
export default Sidebar;

