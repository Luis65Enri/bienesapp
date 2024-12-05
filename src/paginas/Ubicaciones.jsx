import React from 'react';
import Sidebar from '../componentes/plantilla/sidebar-wapper';



const Ubicaciones = () => {
    return (
        <div className="d-flex">
            {/* Sidebar */}
            <div className="sidebar-container bg-light vh-100 p-0" style={{ flex: '0 0 250px' }}>
                <Sidebar />
            </div>

            {/* Contenido principal */}
            <div className="content-container p-4" style={{ flex: '1' }}>
                <h2>Ubicaciones</h2>
                <p>
                    Este es el contenido relacionado con las ubicaciones.
                </p>
                <div className="content-wrapper-scroll">
                    {/* Content wrapper */}
                    <div className="content-wrapper">
                        {/* Row */}
                        <div className="row gx-3">
                            <div className="col-sm-12">
                                <div className="card">
                                    <div className="card-header">
                                        <div className="card-title">Información de la Ubicación</div>
                                    </div>
                                    <div className="card-body">
                                        <div className="row gx-3">
                                            {/* Información de la Ubicación */}
                                            <div className="col-sm-6">
                                                <div className="mb-3">
                                                    <label className="form-label">
                                                        Nombre de la Zona <span className="text-red">*</span>
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Ingrese el nombre de la zona"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="mb-3">
                                                    <label className="form-label">
                                                        Ciudad <span className="text-red">*</span>
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Ingrese el nombre de la ciudad"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="mb-3">
                                                    <label className="form-label">
                                                        Departamento <span className="text-red">*</span>
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Ingrese el nombre del departamento"
                                                    />
                                                </div>
                                            </div>

                                            {/* Botones */}
                                            <div className="col-sm-12">
                                                <div className="custom-btn-group flex-end">
                                                    <button type="button" className="btn btn-light">
                                                        Cancelar
                                                    </button>
                                                    <button type="button" className="btn btn-success">
                                                        Registrar Ubicación
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Ubicaciones;
