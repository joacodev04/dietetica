import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Sidebar from './components/Sidebar/Sidebar'
import Inventario from './pages/Inventario'
import NuevoProducto from './pages/NuevoProducto'
import Productos from './pages/Productos';
import Administracion from './pages/Administracion'
import Catalogo from './pages/Catalogo';
import Movimientos from './pages/Movimientos'
import Vencimiento from './pages/Vencimiento';
import Historial from './pages/Historial';

function App() {

  return (
    <BrowserRouter>

      <div className="layout">
        <Sidebar />

        <main className="content">
          <Routes>
            <Route path='/' element={<Navigate to="/inventario" />} />
            <Route path='/inventario' element={<Inventario />} />
            <Route path='/nuevo-producto' element={<NuevoProducto />} />
            <Route path='/ver-todo' element={<Productos />} />
            <Route path='/catalogo' element={<Catalogo />} />
            <Route path='/movimientos' element={<Movimientos />} />
            <Route path='/vencimiento' element={<Vencimiento />} />
            <Route path='/Historial' element={<Historial />} />
            <Route path='/administracion' element={<Administracion />} />
          </Routes>
        </main>
      </div>

    </BrowserRouter>
  )
}

export default App
