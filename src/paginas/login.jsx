import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Servidor,
  UsuarioIniciarSesion,
} from "../componentes/configuracion/apiUrls";
import { useContextUsuario } from "../componentes/contexto/usuario/UsuarioContext";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setLogin, setCerrarSesion } = useContextUsuario();
  const navigate = useNavigate();

  useEffect(() => {
    setCerrarSesion();
  }, [setCerrarSesion]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (username === "" || password === "") {
        console.log("Complete los campos", "warning");
        return;
      }
      const response = await axios.post(Servidor + UsuarioIniciarSesion, {
        correo_electronico_usuario: username,
        contraseña_usuario: password,
      });

      const data = response.data;
      const usuario = data.usuario;
      const token = data.token;

      console.log("Bienvenido(a) " + usuario.nombre, "success");
      console.log("Token:", token);

      // Asegúrate de que setLogin esté funcionando correctamente
      await setLogin({ usuario: usuario, token: token });

      // Confirmar la navegación
      console.log("Redirigiendo a /app/home");
      navigate("/app/home");
    } catch (error) {
      console.log("Error en la autenticación:", error);
      if (error.response && Array.isArray(error.response.data)) {
        error.response.data.forEach((f) => {
          console.log("Campo: " + f.campo + ". " + f.msj, "warning");
        });
      } else {
        console.log(
          error.response ? error.response.data.error : "Error en la petición",
          "warning"
        );
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
                    BIENVENIDO A LA APP DE BIENES RAICES, <br />
                    Por favor ingresar con su cuenta
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
                      <a href="/forgot-password" className="btn-link ml-auto">
                        ¿Olvidaste tu contraseña?
                      </a>
                    </div>
                    <input
                      className="form-control"
                      type="password"
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
                    <button type="button" className="btn">
                      <img
                        src="/public/max/design/assets/images/google.svg"
                        className="login-icon"
                        alt="Login with Google"
                      />
                      Ingresar con Google
                    </button>
                    <button type="button" className="btn">
                      <img
                        src="/public/max/design/assets/images/facebook.svg"
                        className="login-icon"
                        alt="Login with Facebook"
                      />
                      Ingresa con Facebook
                    </button>
                  </div>

                  <div className="login-form-footer">
                    <div className="additional-link">
                      ¿No tienes una cuenta? <a href="/signup">Registrarse</a>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
