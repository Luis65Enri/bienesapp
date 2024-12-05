import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { mostraAlerta } from "../componentes/alerts/sweetAlert";
import { useContextUsuario } from "../componentes/contexto/usuario/UsuarioContext";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setLogin, setCerrarSesion } = useContextUsuario(); // Eliminamos setCerrarSesion para evitar cierre automático
  let navigate = useNavigate();

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
      const response = await axios.post(
        "http://localhost:3003/api/usuarios/login",
        {
          correo_electronico_usuario: username,
          contraseña_usuario: password,
        }
      );

      const data = response.data;

      console.log("Datos de la respuesta recibidos del servidor:", data);

      const usuario = data.usuario;
      const token = data.token;

      if (!usuario || !token) {
        throw new Error("Datos de usuario o token no válidos");
      }

      console.log("Bienvenido(a) " + usuario.nombre);
      console.log("Token:", token);

      await setLogin({ usuario: usuario, token: token });

      console.log("Redirigiendo a /app/home");
      navigate("/app/home"); // Redirigir a la ruta deseada
    } catch (error) {
      console.log("Error en la autenticación:", error);
      if (error.response && Array.isArray(error.response.data)) {
        error.response.data.forEach((f) => {
          console.log("Campo: " + f.campo + ". " + f.msj, "warning");
        });
      } else {
        console.log(
          error.response ? error.response.data.error : "Error en la petición"
        );
      }
    }
  };
  const handleSubmit2 = async (e) => {
    e.preventDefault();
    try {
      if (username === "" || password === "") {
        mostraAlerta("Complete los campos", "warning");
        return;
      }
      await axios
        .post("http://localhost:3003/api/usuarios/login", {
          correo_electronico_usuario: username,
          contraseña_usuario: password,
        })
        .then(async (data) => {
          const json = data.data;
          console.log(data.data);
          try {
            var usuario = json.Usuario;
            var token = json.Token;
            mostraAlerta("Bienvenido(a) " + usuario.nombre, "success");
            await setLogin({ usuario: usuario, token: token });
            navigate("/app/home");
          } catch (error) {
            console.error(error);
          }
        })
        .catch((error) => {
          console.log(error);
          if (Array.isArray(error.response.data)) {
            error.response.data.msj.forEach((f) => {
              mostraAlerta("Campo: " + f.campo + ". " + f.msj, "warning");
            });
          } else {
            mostraAlerta(error.response.data.error, "warning");
          }
        });
    } catch (error) {
      console.log("Error:", error);
      mostraAlerta("Error en la petición", "error");
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <div className="login-container">
            <form onSubmit={handleSubmit2}>
              <div className="login-box">
                <div className="login-form">
                  <div className="login-welcome">
                    BIENVENIDO A LA APP DE BIENES RAICES, <br />
                    Por favor ingresar con su usuario
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
                      Ingresar
                    </button>
                  </div>
                </div>
              </div>
            </form>
            {/* <div className="login-form-actions">
              <button type="button" className="btn">
                <img
                  src="/public/max/design/assets/images/google.svg"
                  className="login-icon"
                  alt="Ingresar con Google"
                />
              </button>
              <button type="button" className="btn">
                <img
                src="/public/max/design/assets/images/facebook.svg"
                  className="login-icon"
                  alt="Regristrarse Con Facebook"
                />
              </button>
            </div> */}

            {/* <div className="login-form-footer">
              <div className="additional-link">
                ¿No tienes una cuenta? <a href="*">Registrarse</a>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
