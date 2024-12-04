import React from 'react';
import Sidebar from '../componentes/plantilla/sidebar-wapper';

const Documentos = () => {
    return (
        <div className="d-flex">
            {/* Sidebar */}
            <div className="sidebar-container bg-light vh-100 p-0" style={{ flex: '0 0 250px' }}>
                <Sidebar />
            </div>

            {/* Contenido principal */}
            <div className="content-container p-4" style={{ flex: '1' }}>
                <h2>Documentos</h2>
                <p>
                    Este es el contenido relacionado con documentos.
                </p>
            </div>
        </div>
    );
};

export default Documentos;

