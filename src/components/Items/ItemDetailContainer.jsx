import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getFetch } from '../../helpers/getFetch'
import ItemDetail from './ItemDetail'
import { getFirestore, doc, getDoc } from 'firebase/firestore'

const ItemDetailContainer = () => {

    const [producto, setProducto] = useState({})

    const { detailId } = useParams()
    console.log(detailId)


    useEffect(()=>{
      const db = getFirestore()
      const queryProducto = doc(db, 'items', detailId)
      getDoc(queryProducto)
      .then(resp => setProducto( { id: resp.id, ...resp.data() } ) )
      .catch( err => console.log(err) )
      .finally( () => setLoading(false) )
  }, [])

  return (
    <div>
        <ItemDetail producto={producto}/>
    </div>
  )
}

export default ItemDetailContainer