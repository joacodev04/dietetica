import React from 'react'
import './Tablas.css'

const Tablas = () => {

  return (
    <>
       <div className="card border-0 shadow-sm p-4">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h4 className="fw-bold text-dark m-0">Inventario General</h4>
                <button className="btn btn-primary fw-semibold px-3 py-2">
                    <i className="bi bi-plus-lg me-1"></i> Agregar Producto
                </button>
            </div>

            <div className="table-responsive">
                <table className="table table-hover align-middle mb-0">
                    <thead className="table-light">
                        <tr>
                            <th scope="col" className="py-3 text-secondary text-uppercase fs-7 fw-semibold">ID</th>
                            <th scope="col" className="py-3 text-secondary text-uppercase fs-7 fw-semibold">Nombre del Producto</th>
                            <th scope="col" className="py-3 text-secondary text-uppercase fs-7 fw-semibold">Categoría</th>
                            <th scope="col" className="py-3 text-secondary text-uppercase fs-7 fw-semibold">Stock</th>
                            <th scope="col" className="py-3 text-secondary text-uppercase fs-7 fw-semibold">Precio</th>
                            <th scope="col" className="py-3 text-secondary text-uppercase fs-7 fw-semibold text-end">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="fw-semibold text-secondary">SKU-0000</td>
                            <td className="fw-bold text-dark">Producto de Ejemplo 1</td>
                            <td><span className="badge bg-light text-dark border px-2 py-1">General</span></td>
                            <td>
                                <span className="text-danger fw-semibold">
                                    <i className="bi bi-circle-fill small me-1"></i> 0 unidades
                                </span>
                            </td>
                            <td className="fw-semibold">$0.00</td>
                            <td className="text-end">
                                <button 
                                    className="btn btn-sm btn-link text-primary p-1 me-1" 
                                    onClick={() => handleEdit('SKU-0000')}
                                    title="Editar producto"
                                >
                                    <i className="bi bi-pencil-fill"></i>
                                </button>
                                <button className="btn btn-sm btn-link text-danger p-1">
                                    <i className="bi bi-trash-fill"></i>
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td className="fw-semibold text-secondary">SKU-0000</td>
                            <td className="fw-bold text-dark">Producto de Ejemplo 2</td>
                            <td><span className="badge bg-light text-dark border px-2 py-1">General</span></td>
                            <td>
                                <span className="text-danger fw-semibold">
                                    <i className="bi bi-circle-fill small me-1"></i> 0 unidades
                                </span>
                            </td>
                            <td className="fw-semibold">$0.00</td>
                            <td className="text-end">
                                <button 
                                    className="btn btn-sm btn-link text-primary p-1 me-1" 
                                    onClick={() => handleEdit('SKU-0000')}
                                    title="Editar producto"
                                >
                                    <i className="bi bi-pencil-fill"></i>
                                </button>
                                <button className="btn btn-sm btn-link text-danger p-1">
                                    <i className="bi bi-trash-fill"></i>
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </>
  )
}

export default Tablas