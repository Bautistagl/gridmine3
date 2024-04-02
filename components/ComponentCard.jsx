'use client'

import React from 'react'

const ComponentCard = ({producto}) => {
    
  return (
    <div className='ComponentCard'>
        <div className='first'>
            <span>Active</span>
            <span>Deployed</span>
        </div>
        <div className='second'>
            
            <h3> {producto.Tipo} </h3>
            
        </div>

        <div className='third'>
            <span>Velocidad: <p> {producto.Propiedad}</p> </span>
            <span>Consumo: <p> {producto.Propiedad2}</p> </span>
            <span>Rentabilidad: <p> {producto.Propiedad3}</p> </span>
            <span>Temperatura:</span>
            <span>Estado:</span>
        </div>
        <div className='fourth'>
            <span> Last deployed: <p> 4 days ago</p></span>

        </div>

    </div>
  )
}

export default ComponentCard