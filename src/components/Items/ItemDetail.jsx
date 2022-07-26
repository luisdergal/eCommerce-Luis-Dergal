import React from 'react'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({producto}) => {
  return (
    <div className='row'>
        <div className="col">
            <img className='mt-5' src={producto.img} alt="" />
        </div>
        <div className="col">
            <div className='mt-5'>
                <h1>{producto.nombre}</h1>
            </div>
            <div className='detailCount'>
                <ItemCount/>
            </div>
        </div>
    </div>
  )
}

export default ItemDetail