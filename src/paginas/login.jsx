import axios from "axios";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Servidor,
  UsuarioIniciarSesion,
} from "../componentes/configuracion/apiUrls";
import { AuthContext } from "../componentes/contexto/Autenticacion";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext); // Usa el contexto
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      if (username === "" || password === "") {
        console.log("Complete los campos", "warning");
        return;
      }
  
      console.log("Enviando credenciales:", {
        correo_electronico_usuario: username,
        contraseña_usuario: password,
      });
  
      const response = await axios.post(Servidor + UsuarioIniciarSesion, {
        correo_electronico_usuario: username,
        contraseña_usuario: password,
      });
  
      console.log("Respuesta del servidor:", response.data);
  
      // Asegúrate de que existe la clave 'usuario' en la respuesta
      if (!response.data.usuario) {
        console.log("Error: No se encontró el usuario en la respuesta.");
        return;
      }
  
      const usuario = response.data.usuario; // Accede correctamente al usuario
      console.log("Bienvenido(a), " + usuario.nombre);
  
      // Guarda la información del usuario en el contexto
      login(usuario);
  
      // Navega a la página principal
      navigate("/PageHome");
    } catch (error) {
      console.error("Error en el manejo de autenticación:", error);
  
      if (error.response?.data) {
        console.log("Respuesta de error del servidor:", error.response.data);
  
        if (Array.isArray(error.response.data.msj)) {
          error.response.data.msj.forEach((f) =>
            console.log("Campo: " + f.campo + ". " + f.msj, "warning")
          );
        } else {
          console.log(error.response.data.error, "warning");
        }
      } else {
        console.log("Error desconocido al realizar la petición.", "error");
      }
    }
  };
  
  
  
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <div className="login-container">
            {/* Login box start */}
            <form onSubmit={handleSubmit}>
              <div className="login-box">
                <div className="login-form">
                  <div className="login-welcome">
                    Welcome back, <br />
                    Please login to your Max admin account.
                  </div>
                  <div className="mb-3">
                    <label className="form-label" htmlFor="uname">
                      Username
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
                        Password
                      </label>
                      <a href="/forgot-password" className="btn-link ml-auto">
                        Forgot password?
                      </a>
                    </div>
                    <input
                      className="form-control"
                      placeholder="Contraseña"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
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
                  <div className="login-form-actions">
                    <button type="submit" className="btn">
                      {" "}
                      <img
                        src="/public/max/design/assets/images/google.svg"
                        className="login-icon"
                        alt="Login with Google"
                      />
                      Login with Google
                    </button>
                    <button type="submit" className="btn">
                      {" "}
                      <img
                        src="/public/max/design/assets/images/facebook.svg"
                        className="login-icon"
                        alt="Login with Facebook"
                      />
                      Login with Facebook
                    </button>
                  </div>

                  <div className="login-form-footer">
                    <div className="additional-link">
                      Don't have an account? <a href="/signup">Signup</a>
                    </div>
                  </div>
                </div>
              </div>
            </form>
            {/* Login box end */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
