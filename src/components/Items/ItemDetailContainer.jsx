import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getFetch } from '../../helpers/getFetch'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {

    const [producto, setProducto] = useState({})

    const { detailId } = useParams()
    console.log(detailId)


    useEffect(()=>{
        getFetch(detailId)
        .then(resp => setProducto(resp))
    }, [])

  return (
    <div>
        <ItemDetail producto={producto}/>
    </div>
  )
}

export default ItemDetailContainer