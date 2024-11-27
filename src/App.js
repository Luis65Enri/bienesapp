import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider,AuthContext } from "./componentes/contexto/Autenticacion";
import Login from "./paginas/login";
import PageHome from "./componentes/plantilla/PageHome";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/PageHome" element={<ProtectedRoute component={PageHome} />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

// Componente para proteger rutas
const ProtectedRoute = ({ component: Component }) => {
  const { auth } = React.useContext(AuthContext);
  return auth ? <Component /> : <Navigate to="/login" />;
};

export default App;

