import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { collection, doc, getDoc, getDocs, getFirestore, query, where} from 'firebase/firestore'
import ItemList from '../Items/ItemList'

const ItemListContainer = () => {
  const [ productos, setProductos ] = useState([])  
  const [ loading, setLoading ] = useState(true)
  const {categoriaId} = useParams()


  useEffect(()=>{
    if (categoriaId) {
        const db = getFirestore()
        const queryCollection = collection(db, 'items')
        const queryFiltrada = query(
            queryCollection, 
            where('categoria', '==', categoriaId),
            
        )
        getDocs(queryFiltrada)
        .then(resp =>  setProductos( resp.docs.map(prod => ({ id: prod.id, ...prod.data() }) ) ) )
        .catch( err => console.log(err) )
        .finally(() => setLoading(false))          
    } else {
        const db = getFirestore()
        const queryCollection = collection(db, 'items')
        getDocs(queryCollection)
        .then(resp =>  setProductos( resp.docs.map(prod => ({ id: prod.id, ...prod.data() }) ) ) )
        .catch( err => console.log(err) )
        .finally(() => setLoading(false))            
    }
}, [categoriaId])

  return (
    <div>

      {loading ?
      <div className='spinner container'></div>
      :
      <ItemList productos={productos}/>  
      }


    </div>
  )

  
}



















// const ItemListContainer = (obj) => {

//   const onAdd = (cantidad) => {
//     console.log(` La cantidad es: ${cantidad}`)
//   }  
//   return (
//     <div>
//         <ItemList></ItemList>
//     </div>
//   )
// }

export default ItemListContainer