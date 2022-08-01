import { useState } from 'react'
import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'

const Item = ({ prod }) => {

    const [toCart, setTocart] = useState(true)

    const onAdd = (cant) => {
        console.log(`La cantidad es:  ${cant}`)
        setTocart(false)
      }

  return (
      <div            
          className='col-md-4 p-1'
          // key={prod.id}                                                           
      >                    
          <div className="card w-100 mt-5" >
              <div className="card-body">
                  <img src={prod.img} alt='' className='w-50' />                                                        
              </div>
              <div className="card-footer">
                <div className='m-5'>
                <h3 className='productoTitulo'>{prod.nombre}</h3>
                <h4 className='productoStock'>Stock disponible: {prod.stock}</h4>
                </div>
                <div className='m-3'>
                  <Link to={`/detail/${prod.id}`}>
                        <button className="btn btn-outline-primary btn-block">
                            detalle del producto
                        </button> 
                  </Link>
                </div>    
                    <div className='m-5'>
                    {toCart? 
                    <ItemCount initial={1} stock={prod.stock} onAdd={onAdd}></ItemCount>
                    :
                    <Link to="/Cart">
                        {/* <div>
                            <h1> Usted ha seleccionado productos</h1>
                        </div> */}
                    <button className="btn btn-outline-dark btn-block">
                    Ir al carrito.
                    </button>
                    <br />
                    </Link>     
                } 
                    </div>
              </div>
          </div>                                                                                                                            
      </div> 
  )
}

export default Item