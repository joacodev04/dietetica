import React from 'react'
import './Administracion.css'

const Administracion = () => {
return (
    <div className="container vh-100 d-flex justify-content-center align-items-center">
      
      <div className="card p-4 rounded-4 shadow" style={{width: "350px"}}>
        <h2 className="text-center mb-3">
          Iniciar sesión
        </h2>

        <input 
          className="form-control mb-3"
          type="email"
          placeholder="Correo"
        />

        <input 
          className="form-control mb-3"
          type="password"
          placeholder="Contraseña"
        />

        <button className="btn btn-primary">
          Ingresar
        </button>
      </div>

    </div>
  )
}

export default Administracion
