import { useCartContext } from "./CartContext"



const Cart = () => {

  const {cartList} = useCartContext()

  return (
      <div>
        <h1>CartSite</h1>
          <ul>
            {cartList.map(item => (
              <li key={item.id}>
                <div className="container">
                <img className="imagenCarrito" src={item.img} alt="" />
                {item.nombre} - {item.cantidad}
                </div>
              </li>
            ))}
          </ul>
      </div>
  )
}

export default Cart