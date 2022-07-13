import { useState } from "react";
import React from 'react'

const ItemCount = ( {initial=1, stock=12, onAdd} ) => {
    const [count, setCount] = useState(1)

    const handdleMas = () => {
      if (count < stock) {
        setCount(count + 1)
      }else {
        console.log("Stock agotado.")
      }

    };
    const handdleMenos = () => {
      if (count > 1) {
        setCount(count - 1)
      }
    }

  
  return (
    <div className="">
      <div className="">
        <button className="btn btn-primary btn-sm" onClick={handdleMas}>+</button>
        {count}
        <button className="btn btn-primary btn-sm" onClick={handdleMenos}>-</button>
      </div>
    </div>


  )
}

export default ItemCount