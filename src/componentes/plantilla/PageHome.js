import React from 'react';
import { AuthContext } from "../contexto/Autenticacion";
import Header from './page-header';
import Sidebar from './sidebar-wapper';
import { useContext } from "react";


const PageHome = () => {
    const { auth, logout } = useContext(AuthContext);

    return (
        <React.StrictMode>
            <div className="page-wrapper">
                <Header></Header>
                <Sidebar></Sidebar>
                <h1>Bienvenido, {auth?.nombre}</h1>
                <button onClick={logout}>Cerrar sesión</button>
            </div>
        </React.StrictMode>
    );
}
export default PageHome;