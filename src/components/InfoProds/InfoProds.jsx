import React from 'react'
import './InfoProds.css'

const InfoProds = () => {
  return (
    <>
        <div className="info-prods">
            <div className="info-card">
                <p className="titulo">TOTAL PRODUCTOS</p>
                <h2>0</h2>
            </div>

            <div className="info-card">
                <p className="titulo">STOCK CRÍTICO</p>
                <h2>0<span className="rojo">Urgente</span></h2>
            </div>

            <div className="info-card">
                <p className="titulo">VALOR TOTAL</p>
                <h2>$0</h2>
            </div>

            <div className="info-card">
                <p className="titulo">PEDIDOS ACTIVOS</p>
                <h2>0 🚚</h2>
            </div>
        </div>
    </>
  )
}

export default InfoProds
