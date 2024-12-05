import React, { useState } from 'react';
import Sidebar from '../componentes/plantilla/sidebar-wapper';
import Axios from 'axios';
import {propiedadguardar} from '../componentes/configuracion/apiUrls';

// Definir las funciones mostrarAlerta y propiedadguardar
const mostrarAlerta = (mensaje, tipo) => {
    alert(`${tipo.toUpperCase()}: ${mensaje}`);
};

const Propiedad = () => {
    const [nombre, setNombre] = useState("");
    const [categoria, setCategoria] = useState("");
    const [precio, setPrecio] = useState("");
    const [dimension, setDimension] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [estado, setEstado] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Validación de campos vacíos
            if (
                nombre === "" ||
                categoria === "" ||
                precio === "" ||
                dimension === "" ||
                descripcion === "" ||
                estado === ""
            ) {
                if (nombre === "") console.log("El campo 'nombre' está vacío");
                if (categoria === "") console.log("El campo 'categoria' está vacío");
                if (precio === "") console.log("El campo 'precio' está vacío");
                if (dimension === "") console.log("El campo 'dimesion' está vacío");
                if (descripcion === "") console.log("El campo 'descripcion' está vacío");
                if (estado === "") console.log("El campo 'estado' está vacío");
        
                mostrarAlerta("Complete los campos vacíos", "warning");
                return;
            }

            // Enviar los datos al servidor
            const response = await Axios.post(propiedadguardar, {
                nombre:nombre,
                categoria:categoria,
                precio:precio,
                dimension:dimension,
                descripcion:descripcion,
                estado:estado,
            });

            const data = response.data;
            console.log(data);

            mostrarAlerta("Propiedad guardada exitosamente", "success");

            // Resetear los campos del formulario
            setNombre("");
            setCategoria("");
            setPrecio("");
            setDescripcion("");
            setEstado("");
            setDimension("");
            console.log(response);
        } catch (error) {
            console.error("Error al guardar la propiedad:", error);
            mostrarAlerta(
                "Hubo un error al guardar la propiedad. Intente nuevamente.",
                "error"
            );
        }
    };

    // Variable form encapsula el formulario
    const form = (
        <form onSubmit={handleSubmit}>
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
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)}
                        />
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="mb-3">
                        <label className="form-label">
                            Categoría Propiedad<span className="text-red">*</span>
                        </label>
                        <select
                            className="form-control"
                            value={categoria}
                            onChange={(e) => setCategoria(e.target.value)}
                        >
                            <option value="">Seleccione la categoría</option>
                            <option value="Renta">Renta</option>
                            <option value="Venta">Venta</option>
                        </select>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="mb-3">
                        <label className="form-label">
                            Estado<span className="text-red">*</span>
                        </label>
                        <select
                            className="form-control"
                            value={estado}
                            onChange={(e) => setEstado(e.target.value)}
                        >
                            <option value="">Seleccione el estado</option>
                            <option value="Vendida">Vendida</option>
                            <option value="Disponible">Disponible</option>
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
                            value={precio}
                            onChange={(e) => setPrecio(e.target.value)}
                        />
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="mb-3">
                        <label className="form-label">Dimensión</label>
                        <div className="input-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Ingrese la dimensión de la propiedad"
                                value={dimension}
                                onChange={(e) => setDimension(e.target.value)}
                            />
                            <span className="input-group-text">m²</span>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12">
                    <div className="mb-0">
                        <label className="form-label">
                            Descripción de la propiedad <span className="text-red">*</span>
                        </label>
                        <textarea
                            rows="4"
                            className="form-control"
                            placeholder="Escriba la descripción de la propiedad"
                            value={descripcion}
                            onChange={(e) => setDescripcion(e.target.value)}
                        ></textarea>
                    </div>
                </div>
                <div className="col-sm-12 custom-btn-group d-flex justify-content-end">
                    <button type="button" className="btn btn-light me-3">Cancelar</button>
                    <button type="submit" className="btn btn-success">Guardar Propiedad</button>
                </div>
            </div>
        </form>
    );

    return (
        <div className="d-flex">
            <div className="sidebar-container bg-light vh-100 p-0" style={{ flex: '0 0 250px' }}>
                <Sidebar />
            </div>
            <div className="content-container p-4" style={{ flex: '1' }}>
                <h2>Propiedad</h2>
                <p>Este es el contenido relacionado con la propiedad.</p>
                <div className="content-wrapper-scroll">
                    <div className="content-wrapper">
                        <div className="row gx-3">
                            <div className="col-sm-12">
                                <div className="card">
                                    <div className="card-header">
                                        <div className="card-title">Información de la propiedad</div>
                                    </div>
                                    <div className="card-body">{form}</div>
                                </div>
                            </div>
                        </div>
                        <div className="app-footer">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Propiedad;
