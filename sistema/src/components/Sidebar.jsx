import React from 'react'
import { NavLink } from 'react-router-dom'
import './Sidebar.css'

const Sidebar = () => {
  return (
    <>
      <aside>
        <NavLink to="/inventario">Inventario</NavLink>
        <NavLink to="/nuevo-producto">Nuevo Producto</NavLink>
        <NavLink to="/administracion">Administracion</NavLink>
      </aside>
    </>
  )
}

export default Sidebar