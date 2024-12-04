import React from 'react';
import Sidebar from '../componentes/plantilla/sidebar-wapper';

const Contratos = () => {
    return (
        <div className="d-flex">
            {/* Sidebar */}
            <div className="sidebar-container bg-light vh-100 p-0" style={{ flex: '0 0 250px' }}>
                <Sidebar />
            </div>

            {/* Contenido principal */}
            <div className="content-container p-4" style={{ flex: '1' }}>
                <h2>Contratos</h2>
                <p>
                    Aquí va el contenido relacionado con los contratos.
                </p>
            </div>
        </div>
    );
};

export default Contratos;

