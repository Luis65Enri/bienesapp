import React from "react";

const Header = () => {
  return (
    <div>
      {/* Page header starts */}
      <div className="page-header">
        <div className="toggle-sidebar" id="toggle-sidebar">
          <i className="bi bi-list" />
        </div>
        {/* Breadcrumb start */}
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <i className="bi bi-house" />
          </li>
          <li className="breadcrumb-item breadcrumb-active" aria-current="page">
            /
          </li>
        </ol>
        {/* Breadcrumb end */}
        {/* Header actions container start */}
        <div className="header-actions-container">
          {/* Search container start */}
          <div className="search-container">
            {/* Search input group start */}
            <div className="input-group">
              <input type="text" className="form-control" placeholder="Buscar" />
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
              <a href="#" data-toggle="dropdown" aria-haspopup="true">
                <i className="bi bi-bell fs-4 lh-1" />
              </a>
              <div className="dropdown-menu dropdown-menu-end shadow">
                <div className="dropdown-item">
                  <div className="d-flex py-2 border-bottom">
                    <img
                      src="assets/images/user.png"
                      className="img-4x me-3 rounded-3"
                      alt="Free Admin Theme"
                    />
                    <div className="m-0">
                      <h6 className="mb-1">Sophie Michiels</h6>
                      <p className="mb-2">Membership has been ended.</p>
                      <p className="small m-0 text-secondary">Today, 07:30pm</p>
                    </div>
                  </div>
                </div>
                {/* Omitido para brevedad */}
              </div>
            </li>
            {/* Messages end */}
            <li className="dropdown d-none d-md-block">
              <a href="#" id="countries" data-toggle="dropdown" aria-haspopup="true">
                <img
                  src="assets/images/flags/1x1/gb.svg"
                  className="flag-img"
                  alt="Free Admin Dashboards"
                />
              </a>
              <div
                className="dropdown-menu dropdown-menu-end mini"
                aria-labelledby="countries"
              >
                <div className="country-container">
                  <a href="index.html">
                    <img src="assets/images/flags/1x1/us.svg" alt="Free Admin Dashboards" />
                  </a>
                  {/* Otros ítems omitidos */}
                </div>
              </div>
            </li>
            <li className="dropdown">
              <a
                href="#"
                id="userSettings"
                className="user-settings"
                data-toggle="dropdown"
                aria-haspopup="true"
              >
                <span className="user-name d-none d-md-block">Tony Robbins</span>
                <span className="avatar">
                  <img src="assets/images/user3.png" alt="Free Admin Templates" />
                  <span className="status busy" />
                </span>
              </a>
              <div
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="userSettings"
              >
                <div className="header-profile-actions">
                  <a href="profile.html">Perfil</a>
                  <a href="account-settings.html">Configuraciones</a>
                  <a href="login.html">Cerrar Sesion</a>
                </div>
              </div>
            </li>
          </ul>
          {/* Header actions end */}
        </div>
        {/* Header actions container end */}
      </div>
    </div>
  );
};

export default Header;
