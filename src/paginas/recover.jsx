import axios from "axios";
import React, { useState } from "react";
import { mostraAlerta } from "../componentes/alerts/sweetAlert";
import { useNavigate } from "react-router-dom";

const Recover = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (email === "") {
      mostraAlerta("Por favor, ingresa tu correo electrónico", "warning");
      return;
    }

    try {
      setLoading(true);
      const response = await axios.post("http://localhost:3003/api/usuarios/recuperar-password", {
        correo_electronico_usuario: email,
      });

      console.log("Respuesta del servidor:", response);

      if (response.data.success) {
        mostraAlerta("Se ha enviado un código a tu correo", "success");
        navigate("/reset-password");
      } else {
        mostraAlerta(response.data.message || "Error al enviar el código", "error");
      }
    } catch (error) {
      console.error("Error en la recuperación de contraseña:", error);

      if (error.response && error.response.data) {
        const errorData = error.response.data;
        mostraAlerta(errorData.error || "Error en la petición al servidor", "error");
      } else {
        mostraAlerta("Error en la petición al servidor", "error");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <div className="login-container">
            <form onSubmit={handleSubmit}>
              <div className="login-box">
                <div className="login-form">
                  <div className="login-welcome">
                    Recupera tu Contraseña, <br />
                    Ingresa tu correo electrónico
                  </div>
                  <div className="mb-3">
                    <label className="form-label" htmlFor="email">
                      Correo electrónico
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Ingresa tu correo electrónico"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      autoComplete="email"
                    />
                  </div>
                  <div className="login-form-actions">
                    <button type="submit" className="btn" disabled={loading}>
                      {loading ? (
                        <span>Enviando...</span>
                      ) : (
                        <span>
                          <i className="bi bi-arrow-right-circle" />
                          Enviar Código
                        </span>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </form>
            <div className="login-form-footer">
              <div className="additional-link">
                ¿Ya tienes una cuenta? <a href="/login">Iniciar sesión</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recover;