import React from 'react'
import Contador from "../Contador/contador";




const ItemListContainer = (obj) => {

  return (
    <div>
        <h1> {obj.titulo} </h1>
        <h3> {obj.subtitulo} </h3>
        <h4> Contador </h4>
        <Contador></Contador>
    </div>
  )
}

export default ItemListContainer