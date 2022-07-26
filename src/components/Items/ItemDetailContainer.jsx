import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getFetch } from '../../helpers/getFetch'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({})
    const {id} = useParams()

    console.log(id)

  useEffect(()=>{
    getFetch(id)
    .then(resp => console.log(resp))
  },[])
  console.log(producto)
  
  return (
    <div>
        ItemDetailContainer
        <ItemDetail />
    </div>
  )
}

export default ItemDetailContainer