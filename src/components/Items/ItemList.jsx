import React, { useState } from 'react'
import { useEffect } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import Item from './Item'

let productos = [
    {
        id: "1", marca: "Asus", categoría: "Tarjetas graficas", nombre: "NVIDIA ROG Strix GeForce RTX 3080", img: "../../../assets/images/rogStrix3080.jpg"
    },
    {
        id: "2", marca: "Gigabyte", categoría: "Tarjetas graficas", nombre: "AMD Radeon RX 6800 XT Gaming OC", img: "../../../assets/images/gigaByteRx6800.jpg"
    },
    {
        id: "3", marca: "Gigabyte", categoría: "Tarjetas graficas", nombre: "NVIDIA GeForce RTX 3070 Ti Eagle OC", img: "../../../assets/images/gigaByte3070ti.jpg"
    },
    {
        id: "4", marca: "Zotac", categoría: "Tarjetas graficas", nombre: "NVIDIA GeForce RTX 3060 Gaming Twin Edge", img: "../../../assets/images/Zotac3060Twin.png"
    },
    {
        id: "5", marca: "MSI", categoría: "Tarjetas graficas", nombre: "NVIDIA GeForce RTX 3090 Ti SUPRIM X", img: "../../../assets/images/MSI3090Ti.jpg"
    },
    {
        id: "6", marca: "PNY", categoría: "Tarjetas graficas", nombre: "NVIDIA GeForce RTX 2060", img: "../../../assets/images/PNY2060.jpg"
    }
  ]

  const getFetch = ( ) => {
    return new Promise(( resolve, reject )=>{
        setTimeout(()=>{
          resolve(productos)
        }, 3000)
  
    })
  }

  const cardSize = {
    width: "18rem;"
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
    <div className='row m-3'>
            { loading ? <div className='spinner container'></div> 
            :
            productos?.map( producto =>
            <div className='col-12 mb-2 col-md-4' key={producto.id}>
            <div className='card' style={cardSize}>
                <img className='card-img-top imagenCard' src={producto.img} alt="" />
                <div className='card-body'>
                    <h3 className='productoTitulo'>{producto.nombre}</h3>
                    <Item></Item>
                    <ItemCount></ItemCount>
                </div>
            </div>
        </div>)}
        
    </div>
  )
}

export default ItemList
