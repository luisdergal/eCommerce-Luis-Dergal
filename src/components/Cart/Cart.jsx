import { useCartContext } from "../../Context/CartContext"



const Cart = () => {

  const {cartList, vaciarCarrito, eliminarProducto, precioTotal} = useCartContext()

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
          </div>
          <div className="col-md-6"> <p className="textoCarrito font-weight-bold">Productos seleccionados</p>
          <button className="btn btn-outline-danger" onClick={vaciarCarrito}> Vaciar Carrito. </button>
          <ul className="mt-4">
          {cartList.map(item => (
              <li key={item.id}>
                <div className="card">
                <div className="card-body">
                  <img src={item.img} alt='' className='w-50' />                                                        
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
            aceptamos visa y mastercard
          </div>
        </div>
      </div>
  )
}

export default Cart