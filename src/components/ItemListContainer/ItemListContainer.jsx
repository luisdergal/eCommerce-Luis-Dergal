import React from 'react'
import ItemCount from '../ItemCount/ItemCount'




const ItemListContainer = (obj) => {
  const onAdd = (cantidad) => {
    console.log(` La cantidad es: ${cantidad}`)
  }
  return (
    <div>
        <h1> {obj.titulo} </h1>
        <h3> {obj.subtitulo} </h3>
        <h4> Contador </h4>
        <ItemCount initial={1} stock={15} onAdd={onAdd}></ItemCount>
    </div>
  )
}

export default ItemListContainer