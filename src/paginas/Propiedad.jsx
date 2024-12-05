import React from 'react';
import Sidebar from '../componentes/plantilla/sidebar-wapper';

const Propiedad = () => {
    return (
        <div className="d-flex">
            {/* Sidebar */}
            <div className="sidebar-container bg-light vh-100 p-0" style={{ flex: '0 0 250px' }}>
                <Sidebar />
            </div>

            {/* Contenido principal */}
            <div className="content-container p-4" style={{ flex: '1' }}>
                <h2>Propiedad</h2>
                <p>
                    Este es el contenido relacionado con la propiedad.
                </p>
                <p>
        <div className="content-wrapper-scroll">
        {/* Content wrapper */}
        <div className="content-wrapper">
            {/* Row */}
            <div className="row gx-3">
            <div className="col-sm-12">
                <div className="card">
                <div className="card-header">
                    <div className="card-title">Informacion de la propiedad</div>
                </div>
                <div className="card-body">
                    <div className="row gx-3">
                    {/* General Information */}
                    <div className="col-sm-6">
                        <div className="card-border">
                        <div className="card-border-title">Informacion General</div>
                        <div className="card-border-body">
                            <div className="row gx-3">
                            <div className="col-sm-6">
                                <div className="mb-3">
                                <label className="form-label">
                                    Nombre de la propiedad <span className="text-red">*</span>
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Ingrese el nombre de la propiedad"
                                />
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="mb-3">
                                <label className="form-label">
                                    Categoria Propiedad<span className="text-red">*</span>
                                </label>
                                <select className="form-control">
                                    <option value="">Seleccione la categoria</option>
                                    <option value="Mobiles">Renta</option>
                                    <option value="Books">Venta</option>
                                </select>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="mb-3">
                                <label className="form-label">
                                    Precio de la propiedad <span className="text-red">*</span>
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Ingrese el precio de la propiedad"
                                />
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="mb-3">
                                <label className="form-label">Descuento</label>
                                <div className="input-group">
                                    <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Ingrese el descuento de la propiedad"
                                    />
                                    <span className="input-group-text">%</span>
                                </div>
                                </div>
                            </div>
                            <div className="col-sm-12">
                                <div className="mb-0">
                                <label className="form-label">
                                    Descripcion de la propiedad <span className="text-red">*</span>
                                </label>
                                <textarea
                                    rows="4"
                                    className="form-control"
                                    placeholder="Escriba la descripcion de la propiedad"
                                ></textarea>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    {/* Product Images */}
                    <div className="col-sm-12">
                        <div className="card-border">
                        <div className="card-border-title">Imagen de la propiedad</div>
                        <div className="card-border-body">
                            <div id="dropzone" className="dropzone-dark">
                            <form
                                action="/upload"
                                className="dropzone needsclick dz-clickable"
                            >
                                <div className="dz-message needsclick">
                                <button type="button" className="dz-button">
                                    Suelte archivos o haga click para cargar.
                                </button>
                                <br />
                                <span className="note needsclick">
                                    (Esto solo es un prototipo. La seleccion de archivos{" "}
                                    <strong>no</strong> actualiza.)
                                </span>
                                </div>
                            </form>
                            </div>
                        </div>
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className="col-sm-12">
                        <div className="custom-btn-group flex-end">
                        <button type="button" className="btn btn-light">
                            Cancelar
                        </button>
                        <a href="products.html" className="btn btn-success">
                            Agregar Producto
                        </a>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
            {/* Footer */}
            <div className="app-footer">
            <span>© Bootstrap Gallery 2023</span>
            </div>
        </div>
        </div>
                </p>
            </div>
        </div>
    );
};

export default Propiedad;
