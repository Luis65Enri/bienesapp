import { RouterProvider } from 'react-router-dom';
import UsuarioState from './componentes/contexto/usuario/UsuarioState';
import { routes } from './rutas/routes';

function App() {
  return (
    <UsuarioState>
      <RouterProvider router={routes}>
      </RouterProvider>
    </UsuarioState>
  );
}

export default App;
