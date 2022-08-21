import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'
import { useState } from 'react'
import { useCartContext } from '../../Context/CartContext'



const ItemDetail = ({producto}) => {

    const {agregarCarrito} = useCartContext()

    const [toCart, setTocart] = useState(true)

    const onAdd = (cant) => {
        
        console.log(`La cantidad es:  ${cant}`)
        agregarCarrito({...producto, cantidad: cant})
        setTocart(false)
      }

  return (
    <div className='d-flex justify-content-around'>
        <div>
            <img className='mt-5' src={producto.img} alt="" />
        </div>
        <div className='card text-center mt-5 w-50'>
            <div className='card-header'>
                <h1 className='fs-6'>{producto.categoria}</h1>
            </div>
            <div className='card-body row'>
                <h5 className='card-title fs-1 mt-5'>{producto.nombre}</h5>
                <h3 className='fs-4 m-1 text-body'>{producto.descripcion}</h3>
                <h4 className='fs5 fw-normal'>Precio: {producto.precio} $</h4>
                  {toCart? 
                    <ItemCount initial={1} stock={producto.stock} onAdd={onAdd}></ItemCount>
                    :
                    <div>
                    <Link to="/Cart">
                    <button className="btn btn-outline-dark btn-block">
                    Ir al carrito.
                    </button>
                    <br />
                    </Link>
                    <Link to="/">
                    <button className="btn btn-outline-primary btn-block mt-5">
                        Seguir Comprando
                    </button>
                    </Link>
                    </div>     
                }   
                
            </div>
            <div className='card-footer text-muted'>
                stock: {producto.stock}
            </div>
        </div>
    </div>
  )
  
}

export default ItemDetail