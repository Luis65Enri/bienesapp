import React from 'react';

const Sidebar = () => {
    return (
        <div>
            <nav className="sidebar-wrapper d-flex flex-column bg-light" style={{ height: '100vh' }}>
                {/* Sidebar brand */}
                <div
                    className="sidebar-brand d-flex align-items-center p-3 bg-white"
                    style={{ borderBottom: '1px solid #ddd' }}
                >
                    <a
                        href="home"
                        className="logo d-flex align-items-center text-decoration-none w-100"
                        style={{ overflow: 'hidden' }}
                    >
                        <i
                            className="bi bi-building"
                            style={{ fontSize: '36px', marginRight: '10px', color: '#555' }}
                        ></i>
                        <span
                            className="fw-bold fs-5 text-dark"
                            style={{ whiteSpace: 'nowrap' }}
                        >
                            SERVITECH
                        </span>
                    </a>
                </div>

                {/* Sidebar menu */}
                <div
                    className="sidebar-menu flex-grow-1 overflow-auto"
                    style={{ maxHeight: 'calc(100vh - 70px)', padding: '10px' }}
                >
                    <ul className="list-unstyled">
                        <li className="sidebar-dropdown mb-2">
                            <a href="categoria" className="text-decoration-none d-flex align-items-center">
                                <i className="bi bi-house-door me-2" />
                                <span className="menu-text">Categoria Propiedad</span>
                            </a>
                        </li>
                        <li className="sidebar-dropdown mb-2">
                            <a href="contratos" className="text-decoration-none d-flex align-items-center">
                                <i className="bi bi-file-earmark-text me-2" />
                                <span className="menu-text">Contratos</span>
                            </a>
                        </li>
                        <li className="sidebar-dropdown mb-2">
                            <a href="pagos" className="text-decoration-none d-flex align-items-center">
                                <i className="bi bi-credit-card me-2" />
                                <span className="menu-text">Pagos</span>
                            </a>
                        </li>
                        <li className="sidebar-dropdown mb-2">
                            <a href="propiedad" className="text-decoration-none d-flex align-items-center">
                                <i className="bi bi-building me-2" />
                                <span className="menu-text">Propiedad</span>
                            </a>
                        </li>
                        <li className="sidebar-dropdown mb-2">
                            <a href="ubicaciones" className="text-decoration-none d-flex align-items-center">
                                <i className="bi bi-pin-map me-2" />
                                <span className="menu-text">Ubicaciones</span>
                            </a>
                        </li>
                        <li className="sidebar-dropdown mb-2">
                            <a href="venta" className="text-decoration-none d-flex align-items-center">
                                <i className="bi bi-cart-check me-2" />
                                <span className="menu-text">Ventas</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Sidebar;
