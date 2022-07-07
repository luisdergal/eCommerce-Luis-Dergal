import React from 'react'

const ItemListContainer = (obj) => {
  return (
    <div>
        <h1> {obj.titulo} </h1>
        <h3> {obj.subtitulo} </h3>
    </div>
  )
}

export default ItemListContainer