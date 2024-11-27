import React, { createContext, useState } from "react";

// Crea el contexto
export const AuthContext = createContext();

// Proveedor del contexto
export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState(null); // Estado de autenticación

    const login = (userData) => {
        setAuth(userData); // Guarda la información del usuario
    };

    const logout = () => {
        setAuth(null); // Elimina la información del usuario
    };

    return (
        <AuthContext.Provider value={{ auth, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
