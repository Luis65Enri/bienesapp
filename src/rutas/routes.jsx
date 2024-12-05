import React from 'react';
import { Navigate, Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import PageHome from '../componentes/plantilla/PageHome';
import Login from '../paginas/login';
import { AutenticacionRoute } from './AutenticacionRoute';
import CategoriaPropiedad from '../paginas/CategoriaPropiedad';
import Contratos from '../paginas/Contratos';
import Pagos from '../paginas/Pagos';
import Propiedad from '../paginas/Propiedad';
import Ubicaciones from '../paginas/Ubicaciones';
import Ventas from '../paginas/Ventas';

export const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/login' element={<Login />} />
    
      <Route path="app/" element={<AutenticacionRoute />}>
        <Route path="home" element={<PageHome />} />
        <Route path="detalle" element={<detallesfacturacion />} />
        <Route path="contratos" element={<Contratos />} />
        <Route path="categoria" element={<CategoriaPropiedad />} />
        <Route path="pagos" element={<Pagos />} />
        <Route path="propiedad" element={<Propiedad />} />
        <Route path="ubicaciones" element={<Ubicaciones />} />
        <Route path="venta" element={<Ventas />} />
      </Route>
      <Route path='*' element={<Navigate to="/login" />} />
    </Route>
  ),
  {
    future: {
      v7_startTransition: true,
      v7_relativeSplatPath: true,
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_skipActionErrorRevalidation: true,
    },
  }
);