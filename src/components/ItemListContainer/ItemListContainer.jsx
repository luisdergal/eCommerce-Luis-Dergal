import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getFetch } from '../../helpers/getFetch'
import ItemCount from '../ItemCount/ItemCount'
import ItemList from '../Items/ItemList'


const ItemListContainer = () => {
  const [ productos, setProductos ] = useState([])  
  const [ loading, setLoading ] = useState(true)

  const {categoriaId} = useParams()

  useEffect(()=>{
    if(categoriaId){
        getFetch() 
        .then(respuesta => setProductos(respuesta.filter(producto => producto.categoria === categoriaId)))    
        .catch( err => console.log(err) )
        .finally(()=> setLoading(false) )
    }else{
        getFetch()
        .then(respuesta => setProductos(respuesta))    
        .catch( err => console.log(err) )
        .finally(()=> setLoading(false) )
    }
  }, [categoriaId])

  const onAdd = (cant) => {
    console.log(`La cantidad es:  ${cant}`)
  }

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