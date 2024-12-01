import { Navigate, Outlet } from "react-router-dom";
import { useContextUsuario } from "../componentes/contexto/usuario/UsuarioContext";

export const AutenticacionRoute = ({ children }) => {
  const { token, usuario } = useContextUsuario();
  if (!token) {
    return <Navigate to="/login" />;
  }
  return <Outlet></Outlet>;
};
