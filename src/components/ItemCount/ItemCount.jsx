import { useState } from "react";

const ItemCount = ({ initial = 1, stock = 10, onAdd }) => {

  const [count, setCount] = useState(1)

  const handdleMas = () => {
    if (count < stock) {
      setCount(count + 1)
    } else {
      console.log("Stock agotado.")
      Toastify({
        text: "No hay stock.",
        duration: 3000,
        close: true,
        gravity: "top",
        position: "right",
        stopOnFocus: true,
        style: {
          background: "#C84630",
        },
      }).showToast();
    }

  };
  const handdleMenos = () => {
    if (count > initial) {
      setCount(count - 1)
    }
  }

  const agregarCarrito = () => {
    if (count < stock) {
      onAdd(count)
    }
    Toastify({
      text: "Producto Agregado Al Carrito.",
      duration: 3000,
      close: true,
      gravity: "top",
      position: "right",
      stopOnFocus: true,
      style: {
        background: "#22B14C",
      },
    }).showToast();
  }


  return (
    <div className="center">
      <div className="container d-flex flex-row justify-content-center">
        <button className="btn btn-primary btn-sm" onClick={handdleMenos}>-</button>
        <input type="text" value={count} className="count" readOnly />
        <button className="btn btn-primary btn-sm" onClick={handdleMas}>+</button>
      </div>
      <div className="container">
        <button className="btn btn-success mt-4" onClick={agregarCarrito} >Agregar al carrito</button>
      </div>
    </div>
  )
}

export default ItemCount