import React from 'react'
import './Inventario.css'

const Inventario = () => {
  return (
    <div className="header-inventario">
      <h1>Sistema de gestion de Stock</h1>
      <div className="search-box">
        <input type="text" placeholder="Buscar producto..."/>
        <button>Buscar</button>
      </div>
    </div>
  )
}

export default Inventario