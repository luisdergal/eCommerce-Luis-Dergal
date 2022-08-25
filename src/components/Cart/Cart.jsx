import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useCartContext } from "../../Context/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faFrown } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Formulario from "../Formulario/Formulario";

const Cart = () => {
  const {
    cartList,
    vaciarCarrito,
    eliminarProducto,
    precioTotal,
    cantidadTotal,
  } = useCartContext();

  //Función para guardar la orden en la base de datos

  /// Setear la orden

  const guardarOrden = async (e) => {
    e.preventDefault();

    const fecha = new Date();
    const order = {};
    order.buyer = {
      email: "luis@gmail.com",
      name: "Luis",
      phone: "123456789",
      date: fecha,
    };

    order.items = cartList.map((prod) => {
      return {
        product: prod.nombre,
        id: prod.id,
        price: prod.precio,
      };
    });

    order.total = precioTotal();

    //// Guardar la orden en la base de datos

    const db = getFirestore();
    const queryOrders = collection(db, "orders");
    addDoc(queryOrders, order)
      .then(
        (resp) =>
          Swal.fire(
            "Su orden ha sido generada con el código de seguimiento: " +
              resp.id +
              " \n Revisa tu email para el seguimiento del envío."
          ),
      )
      .catch((err) => console.log(err))
      .finally(() => vaciarCarrito());
  };

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
            <p className="fw-semibold">Checkout de productos.</p>
            <div className="col checkout">
              <ul className="">
                {cartList.map((item) => (
                  <li key={item.id}>
                    <div className="listProductos mt-5">
                      <h3>{item.nombre}</h3>
                    </div>
                  </li>
                ))}
              </ul>
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
            <p className="textoCarrito fw-semibold">Productos seleccionados:</p>
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
        <Formulario></Formulario>
      </div>
            )}
    </>
  );
};

export default Cart;
