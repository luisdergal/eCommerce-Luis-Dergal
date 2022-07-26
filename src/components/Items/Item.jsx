import React from 'react'
import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'

const Item = ({ prod }) => {
  return (
      <div            
          className='col-md-4 p-1'
          // key={prod.id}                                                           
      >                    
          <div className="card w-100 mt-5" >
              <div className="card-body">
                  <img src={prod.img} alt='' className='w-50' />
                  {prod.stock}                                                            
              </div>
              <div className="card-footer">
                <div className='m-5'>
                <h3 className='productoTitulo'>{prod.nombre}</h3>
                </div>
                <div className='m-3'>
                  <Link to={`/detail/${prod.id}`}>
                        <button className="btn btn-outline-primary btn-block">
                            detalle del producto
                        </button> 
                  </Link>
                </div>    
                    <div className='m-5'>
                    <ItemCount></ItemCount>
                    </div>
              </div>
          </div>                                                                                                                            
      </div> 
  )
}

export default Item