import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useCartContext } from "../../Context/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faFrown } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useState } from "react";

const Cart = () => {

  const [formData, setFormData] = useState({
    email:'', 
    name:'', 
    phone:'',
    rEmail:'',
    Date: new Date(),
})

  const {
    cartList,
    vaciarCarrito,
    eliminarProducto,
    precioTotal,
    cantidadTotal,
  } = useCartContext();


  const guardarOrden = async (e) => {
    if (formData.email.length == 0 || formData.name.length == 0 || formData.phone.length == 0 || formData.rEmail.length == 0) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Todos los campos son obligatorios para hacer la compra.',
      });
    }else {
      e.preventDefault();

    const order = {};
    order.buyer = formData

    order.items = cartList.map((prod) => {
      return {
        product: prod.nombre,
        id: prod.id,
        price_unit: prod.precio,
        price: (prod.precio * prod.cantidad),
        quantity: prod.cantidad,
      };
    });

    order.total = precioTotal();

    //// Guardar la orden en la base de datos

    const db = getFirestore();
    const queryOrders = collection(db, "orders");
    addDoc(queryOrders, order)
      .then((resp) =>
          Swal.fire(
            "Su orden ha sido generada con el código de seguimiento: " +
              resp.id +
              " \n Revisa tu email para el seguimiento del envío."
          ),
      )
      .catch((err) => console.log(err))
      .finally(() => setFormData({
        email:'', 
        name:'', 
        phone:'',
        rEmail:'',
    }), vaciarCarrito())
    }
  };

  const handleChange = (e) => {
        
    setFormData({
        ...formData,
        [e.target.name]: e.target.value
    })
}

  return (
    <>
      {cartList == 0 ? (
        <div className="containerCarritoVacio">
          <h1>Tu carrito está vacío. 
          <FontAwesomeIcon icon={faFrown} />
          </h1>
          <Link to="/">
                    <button className="btn btn-outline-dark btn-block mt-5">
                        Ir al inicio.
                    </button>
                    </Link>
          </div>
            ) : (
              <div className="container-md cartContainer">
        <div className="row">
          <div className="col-sm">
            <h2 className="mt-3">
              Carrito{" "}
              <span className="iconosFa">
                <FontAwesomeIcon icon={faCartShopping} />
              </span>
            </h2>{" "}
          </div>
        </div>
        <div className="row barraCarrito">
          <div className="col-sm">
            <span className="fw-semibold">
              {cantidadTotal() !== 0 &&
                ` Tienes: ${cantidadTotal()} productos en tu carrito.`}
            </span>
          </div>
          <div className="col-sm">
            {cartList == 0 ? (
              ""
            ) : (
              <button
                className="btn btn-outline-danger mb-2 btn-sm"
                onClick={vaciarCarrito}
              >
                {" "}
                Vaciar Carrito.{" "}
              </button>
            )}
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-6">
            <p className="fw-semibold fs-5">Datos del comprador:</p>
            <div className="checkout">
              <div className="formulario">
              <form>
            <div className="mb-3 container-md">
                <label className="form-label">Nombre completo:</label>
                <input type="text" 
                            className="form-control" 
                            name="name" 
                            onChange={handleChange}
                            placeholder="Ingrese su nombre completo."
                            value={formData.name}></input>
            </div>
            <div className="mb-3 container-md">
                <label className="form-label">Teléfono de contacto:</label>
                <input type="text" 
                            className="form-control" 
                            name="phone" 
                            onChange={handleChange}
                            placeholder="Ingrese el teléfono"
                            value={formData.phone}></input>
            </div>
            <div className="mb-3 container-md">
                <label className="form-label">Correo electrónico:</label>
                <input type="email" 
                            className="form-control" 
                            name="email" 
                            onChange={handleChange}
                            placeholder="Ingrese su correo electrónico." 
                            value={formData.email}></input>
            </div>
            <div className="mb-3 container-md">
                <label className="form-label">Repite tu correo electrónico:</label>
                <input type="email" 
                            className="form-control" 
                            name="rEmail"                            
                            placeholder="Ingrese su correo electrónico." 
                            onChange={handleChange}
                            value={formData.rEmail}></input>
            </div>
        </form>
              </div>
            </div>
            <div className="col checkoutText mt-5">
              <h5>
                {" "}
                {precioTotal() !== 0 && `Precio Total: ${precioTotal()} $`}{" "}
              </h5>
            </div>
            <div className="col checkoutText mt-5">
              {cartList == 0 ? (
                ""
              ) : (
                <button className="btn btn-success" onClick={guardarOrden}>
                  {" "}
                  Finalizar Compra{" "}
                </button>
              )}
            </div>
          </div>
          <div className="col-md-6">
            {" "}
            <p className="textoCarrito fw-semibold fs-5">Productos seleccionados:</p>
            <div className="contenedorCarroCards">
            <ul>
              {cartList.map((item) => (
                <li key={item.id}>
                  <div className="card cardCarrito">
                    <div className="card-body">
                      <Link to={`/detail/${item.id}`}>
                      <img src={item.img} alt="" className="w-25" />
                      </Link>
                      <button
                        className="btn btn-danger m-2 btn-sm"
                        onClick={() => eliminarProducto(item.id)}
                      >
                        X
                      </button>
                    </div>
                    <div>
                      <p className="p-2"> {item.nombre}</p>
                      <p> Cantidad: {item.cantidad}</p>
                      <p>Precio: {item.precio * item.cantidad} $ </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 mt-5">Aceptamos Visa y Mastercard</div>
        </div>
      </div>
            )}
    </>
  );
};

export default Cart;
