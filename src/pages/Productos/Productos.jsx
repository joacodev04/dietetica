import React from "react";
import "./Productos.css";

const Productos = () => {
  return (
    <>
      <div className="inventario-container">
        <div className="header-inventario">
          <h1 className="titulo-izq">Sistema de gestión de Stock</h1>

          <div className="search-box">
            <input type="text" placeholder="Buscar producto..." />
            <button>Buscar</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Productos;
