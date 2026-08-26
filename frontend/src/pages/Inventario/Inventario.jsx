import React from 'react'
import './Inventario.css'
import Tablas from "../../components/Tablas/Tablas";
import InfoProds from "../../components/InfoProds/InfoProds";

const Inventario = () => {
  return (
    <div className="inventario-container">
      <div className="header-inventario">
        <h1 className="titulo-izq">Sistema de gestión de Stock</h1>
      </div>

      <div className="table-content-wrapper">
        <InfoProds/>
        <Tablas />
      </div>
    </div>
  )
}

export default Inventario