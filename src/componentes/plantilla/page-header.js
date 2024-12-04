import React from 'react';

const Header = () => {
    return (
        <div>
            <div className="main-container">
                <div className="page-header">
                    <div className="toggle-sidebar" id="toggle-sidebar">
                        <i className="bi bi-list" />
                    </div>
                    {/* Breadcrumb start */}
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <i className="bi bi-house" />
                        </li>
                        <li className="breadcrumb-item breadcrumb-active" aria-current="page">Pricing</li>
                    </ol>
                    {/* Breadcrumb end */}
                    {/* Header actions container start */}
                    <div className="header-actions-container">
                        {/* Search container start */}
                        <div className="search-container">
                            {/* Search input group start */}
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Search" />
                                <button className="btn" type="button">
                                    <i className="bi bi-search" />
                                </button>
                            </div>
                            {/* Search input group end */}
                        </div>
                        {/* Search container end */}
                        {/* Header actions start */}
                        <ul className="header-actions">
                            {/* Messages start */}
                            <li className="dropdown">
                                <a href="#" data-bs-toggle="dropdown" aria-haspopup="true">
                                    <i className="bi bi-bell fs-4 lh-1" />
                                </a>
                                <div className="dropdown-menu dropdown-menu-end shadow">
                                    <div className="dropdown-item">
                                        <div className="d-flex py-2 border-bottom">
                                            <i className="bi bi-person-circle fs-3 me-3 text-secondary" />
                                            <div className="m-0">
                                                <h6 className="mb-1">Sophie Michiels</h6>
                                                <p className="mb-2">Membership has been ended.</p>
                                                <p className="small m-0 text-secondary">Today, 07:30pm</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="dropdown-item">
                                        <div className="d-flex py-2 border-bottom">
                                            <i className="bi bi-person-circle fs-3 me-3 text-secondary" />
                                            <div className="m-0">
                                                <h6 className="mb-1">Sophie Michiels</h6>
                                                <p className="mb-2">Congratulate, James for new job.</p>
                                                <p className="small m-0 text-secondary">Today, 08:00pm</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="dropdown-item">
                                        <div className="d-flex py-2">
                                            <i className="bi bi-person-circle fs-3 me-3 text-secondary" />
                                            <div className="m-0">
                                                <h6 className="mb-1">Sophie Michiels</h6>
                                                <p className="mb-2">Lewis added new schedule release.</p>
                                                <p className="small m-0 text-secondary">Today, 09:30pm</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            {/* Messages end */}
                            <li className="dropdown d-none d-md-block">
                                <a href="#" id="countries" data-bs-toggle="dropdown" aria-haspopup="true">
                                    <i className="bi bi-globe fs-4" />
                                </a>
                                <div className="dropdown-menu dropdown-menu-end mini" aria-labelledby="countries">
                                    <div className="country-container">
                                        <a href="index.html">
                                            <i className="bi bi-flag-us fs-5 me-2" />
                                            English
                                        </a>
                                        <a href="index.html">
                                            <i className="bi bi-flag-in fs-5 me-2" />
                                            Hindi
                                        </a>
                                        <a href="index.html">
                                            <i className="bi bi-flag-br fs-5 me-2" />
                                            Portuguese
                                        </a>
                                        <a href="index.html">
                                            <i className="bi bi-flag-tr fs-5 me-2" />
                                            Turkish
                                        </a>
                                        <a href="index.html">
                                            <i className="bi bi-flag-ca fs-5 me-2" />
                                            French
                                        </a>
                                    </div>
                                </div>
                            </li>
                            <li className="dropdown">
                                <a href="#" id="userSettings" className="user-settings" data-bs-toggle="dropdown" aria-haspopup="true">
                                    <span className="user-name d-none d-md-block">Tony Robbins</span>
                                    <span className="avatar">
                                        <i className="bi bi-person-circle fs-3 text-secondary" />
                                        <span className="status busy" />
                                    </span>
                                </a>
                                <div className="dropdown-menu dropdown-menu-end" aria-labelledby="userSettings">
                                    <div className="header-profile-actions">
                                        <a href="profile.html">
                                            <i className="bi bi-person me-2" />
                                            Profile
                                        </a>
                                        <a href="account-settings.html">
                                            <i className="bi bi-gear me-2" />
                                            Settings
                                        </a>
                                        <a href="login.html">
                                            <i className="bi bi-box-arrow-right me-2" />
                                            Logout
                                        </a>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        {/* Header actions end */}
                    </div>
                    {/* Header actions container end */}
                </div>
            </div>
        </div>
    );
};

export default Header;

