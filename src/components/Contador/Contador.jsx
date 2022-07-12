import { useState } from "react";
import React from 'react'

const Contador = () => {
  const [count, actualizarCount] = useState (0)


  function handleClick() {
    actualizarCount(count + 1)
  }
  
  return (
    <div>
      {count}
      <button className="btn btn-primary btn-sm">+</button>
      <button type="button" className="btn btn-outline-primary" onClick={handleClick}> + </button>
    </div>
  )
}

export default Contador