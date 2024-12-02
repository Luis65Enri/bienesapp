import { Navigate, Outlet } from "react-router-dom";
import { useContextUsuario } from "../componentes/contexto/usuario/UsuarioContext";
import { mostraAlertaError } from "../componentes//alerts/sweetAlert";
export const AutenticacionRoute = ({ children }) => {
  const { token, usuario } = useContextUsuario();
  console.log(token, usuario);
  if (!token) {
    mostraAlertaError("Debes validar tus credenciales nuevamente");
    return <Navigate to="/login" />;
  }
  return <Outlet />;
};
