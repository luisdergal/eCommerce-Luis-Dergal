import { addDoc, collection, getFirestore } from "firebase/firestore"
import { useCartContext } from "../../Context/CartContext"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'



const Cart = () => {

  const {cartList, vaciarCarrito, eliminarProducto, precioTotal, cantidadTotal} = useCartContext()

  //Función para guardar la orden en la base de datos

  /// Setear la orden

  const guardarOrden = async (e) => {
    e.preventDefault()
    
    const fecha = new Date()
    const order = {}
    order.buyer = {email: "luis@gmail.com", name: "Luis", phone: "123456789", date: fecha}

    order.items = cartList.map(prod => {
        return {
            product: prod.nombre,
            id: prod.id,
            price: prod.precio
        }
    })
    
    order.total = precioTotal()

    //// Guardar la orden en la base de datos


    const db = getFirestore()
    const queryOrders = collection(db, "orders")
    addDoc(queryOrders, order)
    .then(resp => Swal.fire('Su orden ha sido generada con el identificador: ' + resp.id + " \n Revisa tu email para el seguimiento del envío."), console.log(order))
    .catch(err => console.log(err))
    .finally(() => vaciarCarrito())  

  }
  

  return (
      <div className="container-md cartContainer">
        <div className="row">
          <div className="col-sm"><h2 className="mt-3">Carrito <span className='iconosFa'><FontAwesomeIcon icon={faCartShopping}/></span></h2> </div>
        </div>
        <div className="row barraCarrito">
          <div className="col-sm">
            <span className="fw-semibold">{ cantidadTotal() !== 0 && ` Tienes: ${ cantidadTotal() } productos en tu carrito.`}</span>
          </div>
          <div className="col-sm">
          <button className="btn btn-outline-danger mb-2 btn-sm" onClick={vaciarCarrito}> Vaciar Carrito. </button>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-6"><p className="fw-semibold">Checkout de productos.</p>
            <div className="col checkout">
              <ul className="">
              {cartList.map(item => (
                <li key={item.id}>
                  <div className="listProductos mt-5">
                    <h3>
                      {item.nombre}
                    </h3>
                  </div>
                </li>
              ))}
              </ul>
            </div>
            <div className="col checkoutText mt-5">
            <h5>  { precioTotal() !== 0 && `Precio Total: ${ precioTotal() } $`} </h5>
            </div>
            <div className="col checkoutText mt-5">
              <button className="btn btn-success" onClick={guardarOrden}> Finalizar Compra </button>
            </div>
          </div>
          <div className="col-md-6"> <p className="textoCarrito fw-semibold">Productos seleccionados:</p>
          <ul className="mt-4">
          {cartList.map(item => (
              <li key={item.id}>
                <div className="card">
                <div className="card-body">
                  
                  <img src={item.img} alt='' className='w-25' />
                  <button className="btn btn-danger m-2 btn-sm" onClick={ () => eliminarProducto(item.id) }>X</button>                                                        
                </div>
                  <div className="card-body">
                    <p> {item.nombre }</p>
                    <p> Cantidad: {item.cantidad}</p>
                    <p>Precio: {item.precio * item.cantidad} $ </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            Aceptamos Visa y Mastercard
          </div>
        </div>
      </div>
  )
}

export default Cart