import { Navigate, useOutlet } from "react-router-dom";
import { useContextUsuario } from "../contexto/usuario/UsuarioContext";

export const ClienteLayout = () => {
  const outlet = useOutlet();
  const { usuario } = useContextUsuario();
  if (usuario.tipo != "Empleado") {
    mostraAlertaError("No tienes pertmitido acceder a este sitio");
    return <Navigate to="/login" />;
  }
  return <ClienteState>{outlet}</ClienteState>;
};
