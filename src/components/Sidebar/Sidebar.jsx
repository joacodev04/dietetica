import React from 'react'
import { NavLink } from 'react-router-dom'
import './Sidebar.css'

const Sidebar = () => {
  return (
    <>
      <aside className='sidebar'>
        <h1>Dietética y <br />
        Nutrición</h1>
        <hr />
        <nav>
          <NavLink to="/inventario">Inventario</NavLink>
          <NavLink to="/nuevo-producto">Nuevo Producto</NavLink>
          <NavLink to="/administracion">Administracion</NavLink>
          </nav>
      </aside>
    </>
  )
}

export default Sidebar