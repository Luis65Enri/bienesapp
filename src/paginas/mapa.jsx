// import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
// import { jwtDecode } from "jwt-decode";
// import "leaflet/dist/leaflet.css";
// import { Button } from "primereact/button";
// import { InputText } from "primereact/inputtext";
// import React, { useState } from "react";
// import {
//     MapContainer,
//     Marker,
//     Popup,
//     TileLayer,
//     useMapEvents,
// } from "react-leaflet";
// import Modal from "react-modal";
// import { useNavigate } from "react-router-dom";
// import { CrearCliente } from "../../configuracion/apiUrls";
// import "../../styles/Login/registroCliente.css";
// import { mostraAlerta } from "../alerts/sweetAlert";
// import { AxiosPublico } from "../axios/Axios";

// const MapClickHandler = ({ setPosition, setDirecciones }) => {
//     useMapEvents({
//         click: ({ latlng }) => {
//         const { lat, lng } = latlng;
//         setPosition({
//             lat: parseFloat(lat.toFixed(4)),
//             lng: parseFloat(lng.toFixed(4)),
//         });
//         setDirecciones([
//             { direccion: "", longitud: lng.toString(), latitud: lat.toString() },
//         ]);
//         },
//     });
//     return null;
//     };


//     const requestGeolocation = () => {
//         if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(
//             ({ coords }) => {
//             const { latitude, longitude } = coords;
//             setPosition({
//                 lat: parseFloat(latitude.toFixed(4)),
//                 lng: parseFloat(longitude.toFixed(4)),
//             });
//             setDirecciones([
//                 {
//                 direccion: "",
//                 longitud: longitude.toString(),
//                 latitud: latitude.toString(),
//                 },
//             ]);
//             },
//             (error) => {
//             console.error("Error obteniendo la ubicación", error);
//             alert("No se pudo obtener la ubicación actual.");
//             }
//         );
//         } else {
//         alert("Geolocalización no es soportada por tu navegador");
//         }
//     };
//     const updateLocation = () => {
//         if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(
//             ({ coords }) => {
//             const { latitude, longitude } = coords;
//             setPosition({
//                 lat: parseFloat(latitude.toFixed(4)),
//                 lng: parseFloat(longitude.toFixed(4)),
//             });
//             setDirecciones([
//                 {
//                 direccion: "",
//                 longitud: longitude.toString(),
//                 latitud: latitude.toString(),
//                 },
//             ]);
//             },
//             (error) => {
//             console.error("Error actualizando la ubicación", error);
//             alert("No se pudo actualizar la ubicación.");
//             }
//         );
//         } else {
//         alert("Geolocalización no es soportada por tu navegador");
//         }
//     };


//     // Manejo de direcciones
//     const handleDireccionChange = (index, field, value) => {
//         const newDirecciones = [...direcciones];
//         newDirecciones[index][field] = value;
//         setDirecciones(newDirecciones);
//     };



//         // Validación de direcciones
//         const validarDireccion = (direccion, index) => {
//             const direccionValida = validarCampo(direccion.direccion, Dirección ${index} tiene el campo "direccion" vacío);
//             const longitudValida = validarCampo(direccion.longitud, Dirección ${index} tiene el campo "longitud" vacío);
//             const latitudValida = validarCampo(direccion.latitud, Dirección ${index} tiene el campo "latitud" vacío);
//             return direccionValida && longitudValida && latitudValida;
//         };

//         if (direcciones.length === 0 || direcciones.some((d, index) => !validarDireccion(d, index))) {
//             mostraAlerta("Complete todos los campos", "warning");
//             return;
//         }

//         try {

//             {/* Direcciones */}
//             <div className="direccion-field-container">
//             <label>Direcciones</label>
//             {direcciones.map((direccion, index) => (
//                 <div key={direccion-${index}} className="direccion-column">
//                 <InputText
//                     value={direccion.direccion}
//                     onChange={(e) =>
//                     handleDireccionChange(index, "direccion", e.target.value)
//                     }
//                     placeholder="Dirección"
//                     className="mb-3"
//                 />
//                 <InputText
//                     value={direccion.longitud}
//                     onChange={(e) =>
//                     handleDireccionChange(index, "longitud", e.target.value)
//                     }
//                     placeholder="Longitud"
//                     className="mb-3"
//                 />
//                 <InputText
//                     value={direccion.latitud}
//                     onChange={(e) =>
//                     handleDireccionChange(index, "latitud", e.target.value)
//                     }
//                     placeholder="Latitud"
//                     className="mb-3"
//                 />
//                 </div>
//             ))}
//             </div>

//             {/* Botón para seleccionar ubicación */}
//             <Button
//             label="Seleccionar Ubicación"
//             onClick={() => {
//                 requestGeolocation();
//                 setIsModalOpen(true);
//             }}
//             className="p-button-primary mb-3"
//             />
//             <Modal
//             isOpen={isModalOpen}
//             onRequestClose={() => setIsModalOpen(false)}
//             contentLabel="Seleccionar Ubicación"
//             >
//             <MapContainer
//                 center={position}
//                 zoom={13}
//                 style={{ height: "400px", width: "100%" }}
//             >
//                 <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
//                 <Marker position={position}>
//                 <Popup>
//                     <div className="marker-popup-content">
//                     <h3>Ubicación Actual</h3>
//                     <p>Latitud: {position.lat.toFixed(4)}</p>
//                     <p>Longitud: {position.lng.toFixed(4)}</p>
//                     <button onClick={() => setIsModalOpen(false)}>Cerrar</button>
//                     </div>
//                 </Popup>
//                 </Marker>
//                 <MapClickHandler
//                 setPosition={setPosition}
//                 setDirecciones={setDirecciones}
//                 />
//             </MapContainer>
//             <Button
//                 label="Cerrar"
//                 onClick={() => setIsModalOpen(false)}
//                 className="p-button-danger mt-2"
//             />
//             <Button
//                 label="Actualizar Ubicación"
//                 onClick={updateLocation}
//                 className="p-button-secondary"
//             />
//             </Modal>

//             {/* Teléfonos */}
//             <div className="telefono-field-container">
//             <label>Teléfonos</label>
//             {telefonos.map((telefono, index) => (
//                 <InputText
//                 key={telefono-${index}}
//                 value={telefono.telefono} // Asegúrate de usar telefono.telefono
//                 onChange={(e) => handleTelefonoChange(index, e.target.value)}
//                 placeholder="Teléfono"
//                 className="mb-3"
//                 />
//             ))}
//             </div>

//             {/* Google Login */}
//             <div className="p-field">
//             <GoogleLogin
//                 onSuccess={handleGoogleLoginSuccess}
//                 onError={handleGoogleLoginFailure}
//             />
//             </div>

//             {/* Submit Button */}
//             <Button
//             label="Registrar Cliente"
//             type="submit"
//             className="p-button-success mt-3"
//             />
//         </form>
//         </div>
//     );
//     };

// export default RegistroClienteGoogle;