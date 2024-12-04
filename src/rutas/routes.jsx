import React from 'react';
import { Navigate, Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import PageHome from '../componentes/plantilla/PageHome';
import Login from '../paginas/login';
import Register from '../paginas/register';
import Recover from '../paginas/recover';
import { AutenticacionRoute } from './AutenticacionRoute';
export const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/recover' element={<Recover />} />
      <Route path="app/" element={<AutenticacionRoute />}>
        <Route path="home" element={<PageHome />} />
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
