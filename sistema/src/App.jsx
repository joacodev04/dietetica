import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Sidebar from './components/Sidebar'
import Inventario from './pages/Inventario'
import NuevoProducto from './pages/NuevoProducto'
import Administracion from './pages/Administracion'

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
            <Route path='/administracion' element={<Administracion />} />
          </Routes>
        </main>
      </div>

    </BrowserRouter>
  )
}

export default App
