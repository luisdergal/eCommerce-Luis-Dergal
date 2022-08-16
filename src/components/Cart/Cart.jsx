
import { addDoc, collection, getFirestore } from "firebase/firestore"
import { useCartContext } from "../../Context/CartContext"



const Cart = () => {

  const {cartList, vaciarCarrito, eliminarProducto, precioTotal} = useCartContext()

  //Función para guardar la orden en la base de datos

  /// Setear la orden

  const guardarOrden = async (e) => {
    e.preventDefault()
    
    const order = {}
    order.buyer = {email: "luis@gmail.com", name: "Luis", phone: "123456789"}

    order.items = cartList.map(prod => {
        return {
            product: prod.nombre,
            id: prod.id,
            price: prod.precio
        }
    })
    
    order.total = precioTotal()

    // console.log(order)

    //// Guardar la orden en la base de datos

    const db = getFirestore()
    const queryOrders = collection(db, "orders")
    addDoc(queryOrders, order)
    .then(resp => alert("Su orden ha sido generada con el identificador: " + resp.id )) 

    /// Actualizar documento

    // const queryUpdateDoc = doc(db, "items", )
    
  }
  

  


  return (
      <div className="container-md cartContainer">
        <div className="row">
          <div className="col-sm">" "</div>
        </div>
        <div className="row">
          <div className="col-sm"><h2>Carrito.</h2></div>
        </div>
        <div className="row">
          <div className="col-md-6">Checkout de productos
            <div className="col checkout">
            <ul className="mt-4">
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
            <div className="col checkout mt-5">
            <h5>  { precioTotal() !== 0 && `Precio Total: ${ precioTotal() } $`} </h5>
            </div>
            <div className="col checkout mt-5">
              <button className="btn btn-success" onClick={guardarOrden}> Finalizar Compra </button>
            </div>
          </div>
          <div className="col-md-6"> <p className="textoCarrito font-weight-bold">Productos seleccionados</p>
          <button className="btn btn-outline-danger" onClick={vaciarCarrito}> Vaciar Carrito. </button>
          <ul className="mt-4">
          {cartList.map(item => (
              <li key={item.id}>
                <div className="card">
                <div className="card-body">
                  
                  <img src={item.img} alt='' className='w-50' />
                  <button className="btn btn-danger m-2" onClick={ () => eliminarProducto(item.id) }>X</button>                                                        
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