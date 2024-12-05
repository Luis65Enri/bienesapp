import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { mostraAlerta } from "../componentes/alerts/sweetAlert";
import { useContextUsuario } from "../componentes/contexto/usuario/UsuarioContext";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setLogin, setCerrarSesion } = useContextUsuario();
  let navigate = useNavigate();

  useEffect(() => {
    setCerrarSesion();
  }, [setCerrarSesion]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (username === "" || password === "") {
        mostraAlerta("Complete los campos", "warning");
        return;
      }
  
      const response = await axios.post("http://localhost:3003/api/usuarios/login", {
        correo_electronico_usuario: username,
        contraseña_usuario: password,
      });
  
      console.log("Respuesta completa del servidor:", response);
  
      const data = response.data;
      const usuario = data.usuario || data.Usuario; // Asegúrate de capturar el objeto correcto
      const token = data.token || data.Token;
  
      if (!usuario || !token) {
        console.error("Datos faltantes en la respuesta:", { usuario, token });
        throw new Error("Datos de usuario o token no válidos");
      }
  
      console.log("Datos del usuario recibido:", usuario);
  
      // Accede al nombre del usuario según el campo correcto
      const nombreUsuario = usuario.nombre_usuario || usuario.nombre || "Usuario";
  
      mostraAlerta(`Bienvenido(a) ${nombreUsuario}`, "success");
  
      await setLogin({ usuario, token });
      navigate("/app/home");
    } catch (error) {
      console.error("Error en la autenticación:", error);
  
      if (error.response && error.response.data) {
        const errorData = error.response.data;
        if (Array.isArray(errorData)) {
          errorData.forEach((f) => {
            mostraAlerta(`Campo: ${f.campo}. ${f.msj}`, "warning");
          });
        } else {
          mostraAlerta(errorData.error || "Error en la autenticación", "error");
        }
      } else {
        mostraAlerta("Error en la petición al servidor", "error");
      }
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
                    BIENVENIDO A LA APP DE BIENES RAÍCES, <br />
                    Por favor, ingresa con tu cuenta
                  </div>
                  <div className="mb-3">
                    <label className="form-label" htmlFor="uname">
                      Usuario
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Nombre de usuario"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      autoComplete="username"
                    />
                  </div>
                  <div className="mb-3">
                    <div className="d-flex justify-content-between">
                      <label className="form-label" htmlFor="pwd-input">
                        Contraseña
                      </label>
                      <a href="/recover" className="btn-link ml-auto">
                        ¿Olvidaste tu contraseña?
                      </a>
                    </div>
                    <input
                      className="form-control"
                      type="password"
                      placeholder="Contraseña"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      autoComplete="current-password"
                    />
                  </div>
                  <div className="login-form-actions">
                    <button type="submit" className="btn">
                      <span className="icon">
                        <i className="bi bi-arrow-right-circle" />
                      </span>
                      Login
                    </button>
                  </div>
                </div>
              </div>
            </form>
            <div className="login-form-footer">
              <div className="additional-link">
                ¿No tienes una cuenta? <a href="/register">Registrarse</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;