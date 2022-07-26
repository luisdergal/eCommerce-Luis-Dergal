import React from 'react'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({producto}) => {
  return (
    <div className='d-flex justify-content-around'>
        <div>
            <img className='mt-5' src={producto.img} alt="" />
        </div>
        <div className='card text-center mt-5'>
            <div className='card-header'>
                <h1 className='fs-6'>{producto.categoria}</h1>
            </div>
            <div className='card-body row'>
                <h5 className='card-title fs-1 mt-5'>{producto.nombre}</h5>
                <h4>Precio: {producto.precio} $</h4>
                <ItemCount></ItemCount>
            </div>
            <div className='card-footer text-muted'>
                stock: {producto.stock}
            </div>
        </div>
    </div>
  )
}

export default ItemDetail