import { Navigate, Outlet } from "react-router-dom";
import { useContextUsuario } from "../componentes/contexto/usuario/useContext";
import { mostrarAlertaError } from "../componentes/alerts/sweetAlert";

export const AutenticacionRoute = () => {
    const { usuario, token} = useContextUsuario();
    if (!token) {
        mostrarAlertaError("Debes estar logeado para acceder a esta ruta");
        return <Navigate to="/login" />;
    }
    return <Outlet></Outlet>; 
};