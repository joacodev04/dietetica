import React from 'react'
import './NuevoProducto.css'

const NuevoProducto = () => {
  return (
    <>
    <div className="header-inventario">
      <h1 className="titulo-izq">Sistema de gestión de Stock</h1>
      <div className="search-box">
        <input type="text" placeholder="Buscar producto..." />
        <button>Buscar</button>
      </div>
      </div>
    <div className="inventario-container">
      <div className='container-info-prods'>
<div className='card-header'>
  <span className='icon-info'>ⓘ</span>
  <h3>Información General</h3>
</div>
<hr className='divider' />

<div className='campo-grupo'>
  <label>Nombre del Producto</label>
  <input type="text" placeholder="Ej: Proteina Whey 900gr" />
</div>

<div className='campos-form'>
  <div className='campo-grupo'>
    <label>Código</label>
    <input type="text" placeholder="0000" />
  </div>
  <div className='campo-grupo'>
    <label>Categoría</label>
    <select>
      <option value="">Seleccione una categoría</option>
      <option value="proteinas">Proteínas</option>
      <option value="creatinas">Creatinas</option>
      <option value="vitaminas">Vitaminas</option>
    </select>
  </div>
</div>

<div className='botones-form'>
  <button className='btn-cancelar'>Cancelar</button>
  <button className='btn-guardar'>💾 Guardar Producto</button>
</div>
</div>

</div>

    </>
  )
}

export default NuevoProducto