import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useContextUsuario } from "../componentes/contexto/usuario/UsuarioContext";

export const AutenticacionRoute = () => {
  const { usuario } = useContextUsuario();

  if (!usuario || !usuario.token) {
    // Si el usuario no está autenticado, redirigir a la página de login
    return <Navigate to="/login" />;
  }

  // Si el usuario está autenticado, renderizar el contenido de la ruta protegida
  return <Outlet />;
};
