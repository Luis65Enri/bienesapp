import React from 'react';
import Sidebar from '../componentes/plantilla/sidebar-wapper';

const Pagos = () => {
    return (
        <div className="d-flex">
            {/* Sidebar */}
            <div className="sidebar-container bg-light vh-100 p-0" style={{ flex: '0 0 250px' }}>
                <Sidebar />
            </div>

            {/* Contenido principal */}
            <div className="content-container p-4" style={{ flex: '1' }}>
                <h2>Pagos</h2>
                <p>
                    Aquí va el contenido relacionado con los pagos.
                </p>
                <p>
    <div className="row gx-3">
        <div className="col-sm-12 col-12">
            <div className="card">
            <div className="card-header">
                <div className="card-title">Detalles de Facturacion</div>
            </div>
            <div className="card-body">
                {/* Row start */}
                <div className="row gx-3">
                <div className="col-sm-8 col-12">
                    {/* Row start */}
                    <div className="row gx-3">
                    <div className="col-sm-4 col-12">
                        <div className="mb-3">
                        <label className="form-label">Primer Nombre</label>
                        <input type="text" className="form-control" defaultValue=" " />
                        </div>
                    </div>
                    <div className="col-sm-4 col-12">
                        <div className="mb-3">
                        <label className="form-label">Primer Apellido</label>
                        <input type="text" className="form-control" defaultValue=" " />
                        </div>
                    </div>
                    <div className="col-sm-4 col-12">
                        <div className="mb-3">
                        <label className="form-label">Direccion</label>
                        <input type="text" className="form-control" defaultValue=" " />
                        </div>
                    </div>
                    <div className="col-sm-4 col-12">
                        <div className="mb-3">
                        <label className="form-label">Seleccione su pais</label>
                        <select className="form-select">
                            <option value="" selected>Seleccione un pais </option>
                            <option value="Honduras">Honduras</option>
                            <option value="Guatemala" >Guatemala</option>
                            <option value="El Salvador">El Salvador</option>
                            <option value="Panama">Panama</option>
                            <option value="Nicaragua">Nicaragua</option>
                            <option value="Costa Rica">Costa Rica</option>
                        </select>
                        </div>
                    </div>
                    <div className="col-sm-4 col-12">
                        <div className="mb-3">
                        <label className="form-label">Seleccione una Ciudad</label>
                        <select className="form-select">
                            <option value="" selected >Seleccione una Ciudad</option>
                            <option value="Francisco Morazan">Francisco Morazan</option>
                            <option value="Comayagua">Comayagua</option>
                            <option value="San Pedro Sula">San Pedro Sula</option>
                            <option value="Ceiba">Ceiba</option>
                        </select>
                        </div>
                    </div>
                    <div className="col-sm-4 col-12">
                        <div className="mb-3">
                        <label className="form-label">Codigo Postal</label>
                        <input type="text" className="form-control" defaultValue={" "} />
                        </div>
                    </div>
                    <div className="col-sm-4 col-12">
                        <div className="mb-3">
                        <label className="form-label">Celular</label>
                        <input type="text" className="form-control" defaultValue=" " />
                        </div>
                    </div>
                    <div className="col-sm-4 col-12">
                        <div className="mb-3">
                        <label className="form-label">Correo electronico</label>
                        <input type="email" className="form-control" defaultValue=" " />
                        </div>
                    </div>
                    <div className="col-xxl-12">
                        <div className="mb-2">
                        <label className="form-label">Comentarios</label>
                        <textarea rows={3} className="form-control" defaultValue="  " />
                        </div>
                    </div>
                    <div className="col-xxl-12">
                        <div className="form-check">
                        <input className="form-check-input" type="checkbox" defaultChecked />
                        <label className="form-check-label">Guardar esta direccion</label>
                        </div>
                    </div>
                    </div>
                    {/* Row end */}
                </div>
                <div className="col-sm-4 col-12">
                    {/* Products List */}
                    <div className="product-list-card">
                    <h5>Order List</h5>
                    <div className="product-list-block">
                        <img className="product-list-img" src="assets/images/food/img7.jpg" alt="Max Admin" />
                        <div className="product-list-details">
                        <h5 className="product-list-title">Barbecue Chicken Salad</h5>
                        <div className="product-list-price">$25.00</div>
                        </div>
                    </div>
                    <div className="product-list-block">
                        <img className="product-list-img" src="assets/images/food/img9.jpg" alt="Max Admin" />
                        <div className="product-list-details">
                        <h5 className="product-list-title">Harvest Cobb Salad</h5>
                        <div className="product-list-price">$15.00</div>
                        </div>
                    </div>
                    <div className="product-list-block">
                        <img className="product-list-img" src="assets/images/food/img2.jpg" alt="Max Admin" />
                        <div className="product-list-details">
                        <h5 className="product-list-title">Greek Salad</h5>
                        <div className="product-list-price">$28.00</div>
                        </div>
                    </div>
                    <div className="product-list-block">
                        <img className="product-list-img" src="assets/images/food/img6.jpg" alt="Max Admin" />
                        <div className="product-list-details">
                        <h5 className="product-list-title">Garden Chickpea Salad</h5>
                        <div className="product-list-price">$22.00</div>
                        </div>
                    </div>
                    </div>
                    <div className="mb-2">
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="paymentRadio" id="paymentRadio1" />
                        <label className="form-check-label" htmlFor="paymentRadio1">Pago en efectivo</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="paymentRadio" id="paymentRadio2" defaultChecked />
                        <label className="form-check-label" htmlFor="paymentRadio2">Tarjeta de credito/debito</label>
                    </div>
                    </div>
                </div>
                </div>
                {/* Row end */}
                {/* Row start */}
                <div className="row gx-3">
                <div className="col-xxl-12">
                    <div className="sub-total-container">
                    <div className="total">Total: </div>
                    <a href="#" className="btn btn-success btn-lg">Realizar Pago</a>
                    </div>
                </div>
                </div>
                {/* Row end */}
            </div>
            </div>
        </div>
    </div>
                </p>
            </div>
        </div>
    );
};

export default Pagos;
