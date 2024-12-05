import React from 'react';
import Sidebar from '../componentes/plantilla/sidebar-wapper';

const Ventas = () => {
    return (
        <div className="d-flex">
            {/* Sidebar */}
            <div className="sidebar-container bg-light vh-100 p-0" style={{ flex: '0 0 250px' }}>
                <Sidebar />
            </div>

            {/* Contenido principal */}
            <div className="content-container p-4" style={{ flex: '1' }}>
                <h2>Ventas</h2>
                <div className="content-wrapper-scroll">
                    {/* Content wrapper */}
                    <div className="content-wrapper">
                        {/* Row */}
                        <div className="row gx-3">
                            <div className="col-sm-12">
                                <div className="card">
                                    <div className="card-header">
                                        <div className="card-title">Información de la Venta</div>
                                    </div>
                                    <div className="card-body">
                                        <div className="row gx-3">
                                            {/* Información de la Venta */}
                                            <div className="col-sm-6">
                                                <div className="mb-3">
                                                    <label className="form-label">
                                                        Fecha de Venta <span className="text-red">*</span>
                                                    </label>
                                                    <input
                                                        type="date"
                                                        className="form-control"
                                                        placeholder="Seleccione la fecha de la venta"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="mb-3">
                                                    <label className="form-label">
                                                        Monto Total <span className="text-red">*</span>
                                                    </label>
                                                    <input
                                                        type="number"
                                                        className="form-control"
                                                        placeholder="Ingrese el monto total de la venta"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="mb-3">
                                                    <label className="form-label">
                                                        Estado de la Venta <span className="text-red">*</span>
                                                    </label>
                                                    <select className="form-control">
                                                        <option value="">Seleccione el estado</option>
                                                        <option value="Completada">Completada</option>
                                                        <option value="Pendiente">Pendiente</option>
                                                        <option value="Cancelada">Cancelada</option>
                                                    </select>
                                                </div>
                                            </div>

                                            {/* Botones */}
                                            <div className="col-sm-12">
                                                <div className="custom-btn-group flex-end">
                                                    <button type="button" className="btn btn-light">
                                                        Cancelar
                                                    </button>
                                                    <button type="button" className="btn btn-success">
                                                        Registrar Venta
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

export default Ventas;
