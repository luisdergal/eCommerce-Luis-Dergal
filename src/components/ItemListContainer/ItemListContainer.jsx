import React, { useState } from 'react'
import { useEffect } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import ItemList from '../Items/ItemList'

const ItemListContainer = (obj) => {

  const onAdd = (cantidad) => {
    console.log(` La cantidad es: ${cantidad}`)
  }  
  return (
    <div>
        <ItemList></ItemList>
    </div>
  )
}

export default ItemListContainer