import React, { useState } from 'react'
import { useEffect } from 'react'
let productos = [
    {
        id: "1", marca: "Asus", categoría: "Tarjetas graficas", nombre: "NVIDIA ROG Strix GeForce RTX 3080", img: ""
    },
    {
        id: "2", marca: "Gigabyte", categoría: "Tarjetas graficas", nombre: "AMD Radeon RX 6800 XT Gaming OC", img: ""
    },
    {
        id: "3", marca: "Gigabyte", categoría: "Tarjetas graficas", nombre: "NVIDIA GeForce RTX 3070 Ti Eagle OC", img: ""
    },
    {
        id: "4", marca: "Zotac", categoría: "Tarjetas graficas", nombre: "NVIDIA GeForce RTX 3060 Gaming Twin Edge", img: ""
    },
    {
        id: "5", marca: "MSI", categoría: "Tarjetas graficas", nombre: "NVIDIA GeForce RTX 3090 Ti SUPRIM X", img: ""
    },
    {
        id: "6", marca: "PNY", categoría: "Tarjetas graficas", nombre: "NVIDIA GeForce RTX 2060", img: ""
    }
  ]

  const getFetch = ( ) => {
    return new Promise(( resolve, reject )=>{
        setTimeout(()=>{
          resolve(productos)
        }, 3000)
  
    })
  }

const ItemList = () => {
    const [productos, setProductos ] = useState([])
    const [ loading, setLoading ] = useState(true)

    useEffect(()=>{
        getFetch()   
        .then (respuesta => setProductos(respuesta)) 
        .catch(err=> console.log(err))
        .finally(()=> setLoading(false))
      }, [])

      console.log(productos)

  return (
    <div>
        <ul>
            { loading ? <h1>Cargando tus Productos.</h1> 
            :
            productos?.map( producto => <li key={producto.id}>{producto.nombre}</li>)}
        </ul>
    </div>
  )
}

export default ItemList
