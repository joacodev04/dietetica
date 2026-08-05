import React from 'react'
import './NuevoProducto.css'

const NuevoProducto = () => {
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
        <section className='container-prod'>
          <div>
            <h1>Registrar Nuevo Producto</h1>
            <p>Complete la informacion detallada para añadir un nuevo producto</p>
          </div>
          <div className='container-info-prods'>
            <h3>Complete los siguientes campos</h3>
              <input type="name" placeholder="Nombre del producto" />
              <input type="id" placeholder="Codigo del producto" />
              <select>
                <option value="">Seleccione una categoría</option>
                <option value="proteinas">Proteínas</option>
                <option value="creatinas">Creatinas</option>
                <option value="vitaminas">Vitaminas</option>
              </select>
          </div>
        </section>
      </div>
    </>
  )
}

export default NuevoProducto