import React from "react";

const Card = () => {
    return (
        <div className="main-container">
        {/* Page header starts */}
        <header className="page-header">
            {/* Sidebar toggle */}
            <button
            className="toggle-sidebar"
            id="toggle-sidebar"
            aria-label="Toggle Sidebar"
            >
            <i className="bi bi-list"></i>
            </button>

            {/* Breadcrumb */}
            <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item">
                <a href="#">
                    <i className="bi bi-house"></i>
                </a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                Billing Details
                </li>
            </ol>
            </nav>

            {/* Header actions */}
            <div className="header-actions-container">
            {/* Search */}
            <div className="search-container">
                <div className="input-group">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Search"
                    aria-label="Search"
                />
                <button className="btn" type="button">
                    <i className="bi bi-search"></i>
                </button>
                </div>
            </div>

            {/* Notifications */}
            <ul className="header-actions">
                <li className="dropdown">
                <a
                    href="#"
                    id="notifications"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                    <i className="bi bi-bell fs-4 lh-1"></i>
                </a>
                <div
                    className="dropdown-menu dropdown-menu-end shadow"
                    aria-labelledby="notifications"
                >
                    {/* Notification items */}
                    <div className="dropdown-item">
                    <div className="d-flex py-2 border-bottom">
                        <img
                        src="assets/images/user.png"
                        className="img-4x me-3 rounded-3"
                        alt="User"
                        />
                        <div>
                        <h6 className="mb-1">Sophie Michiels</h6>
                        <p className="mb-2">Membership has been ended.</p>
                        <p className="small text-secondary">Today, 07:30 PM</p>
                        </div>
                    </div>
                    </div>
                </div>
                </li>

                {/* User Settings */}
                <li className="dropdown">
                <a
                    href="#"
                    id="userSettings"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                    <span className="user-name d-none d-md-block">
                    Tony Robbins
                    </span>
                    <span className="avatar">
                    <img src="assets/images/user3.png" alt="User Avatar" />
                    <span className="status busy"></span>
                    </span>
                </a>
                <div
                    className="dropdown-menu dropdown-menu-end"
                    aria-labelledby="userSettings"
                >
                    <a href="profile.html" className="dropdown-item">
                    Perfil
                    </a>
                    <a href="account-settings.html" className="dropdown-item">
                    Configuracion
                    </a>
                    <a href="login.html" className="dropdown-item">
                    Logout
                    </a>
                </div>
                </li>
            </ul>
            </div>
        </header>
        {/* Page header ends */}

        {/* Main content */}
        <main className="content-wrapper">
            {/* Row */}
            <div className="row gx-3">
            {/* Billing details */}
            <div className="col-12">
                <div className="card">
                <div className="card-header">
                    <h2 className="card-title">Billing Details</h2>
                </div>
                <div className="card-body">
                    <div className="row gx-3">
                    {/* Form fields */}
                    <div className="col-sm-8">{/* Additional fields */}</div>

                    {/* Product list */}
                    <div className="col-sm-4">
                        <h5>Order List</h5>
                        {/* Products */}
                    </div>
                    </div>
                    {/* Order summary */}
                    <div className="row">
                    <div className="col-12">
                        <div className="sub-total-container">
                        <span className="total">Order Total: $90.00</span>
                        <button className="btn btn-success btn-lg">
                            Place Order
                        </button>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </main>

        {/* Footer */}
        <footer className="app-footer">
            <span>© Bootstrap Gallery 2023</span>
        </footer>
        </div>
    );
    };

    export default Card;

