import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { collection, doc, getDoc, getDocs, getFirestore} from 'firebase/firestore'
import { getFetch } from '../../helpers/getFetch'
import ItemCount from '../ItemCount/ItemCount'
import ItemList from '../Items/ItemList'

const ItemListContainer = () => {
  const [ productos, setProductos ] = useState([])  
  const [ loading, setLoading ] = useState(true)
  const {categoriaId} = useParams()
  const [producto, setProducto] = useState({})  

  // FireBase// Traer productos por id

  // useEffect(() => {
  //   const db = getFirestore()
  //   const queryProducto = doc(db, 'items', '2hGxBqe8lT623lqFFazo')
  //   getDoc(queryProducto)
  //   .then(resp => setProducto({id:resp.id, ...resp.data()}))
  // },[])

  

  useEffect(() => {
    const db = getFirestore()
    const queryCollection = collection(db, 'items')
    getDocs(queryCollection)
    .then(resp => setProductos(resp.docs.map(prod => ({id: prod.id, ...prod.data()}))))   
    .catch(err => console.log(err))
    .finally(() => setLoading(false))
  },[])

  console.log(productos)



  // useEffect(()=>{
  //   if(categoriaId){
  //       getFetch() 
  //       .then(respuesta => setProductos(respuesta.filter(producto => producto.categoria === categoriaId)))    
  //       .catch( err => console.log(err) )
  //       .finally(()=> setLoading(false) )
  //   }else{
  //       getFetch()
  //       .then(respuesta => setProductos(respuesta))    
  //       .catch( err => console.log(err) )
  //       .finally(()=> setLoading(false) )
  //   }
  // }, [categoriaId])



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