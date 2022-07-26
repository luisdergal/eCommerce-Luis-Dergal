let productos = [
    {
        id: "1", marca: "Asus", categoria: "Tarjetas graficas", precio: 20, nombre: "NVIDIA ROG Strix GeForce RTX 3080", img: "../../assets/images/rogStrix3080.jpg"
    },
    {
        id: "2", marca: "Gigabyte", categoria: "Tarjetas graficas", precio: 21, nombre: "AMD Radeon RX 6800 XT Gaming OC", img: "../../assets/images/gigaByteRx6800.jpg"
    },
    {
        id: "3", marca: "Gigabyte", categoria: "Tarjetas graficas", precio: 22, nombre: "NVIDIA GeForce RTX 3070 Ti Eagle OC", img: "../../assets/images/gigaByte3070ti.jpg"
    },
    {
        id: "4", marca: "Zotac", categoria: "Tarjetas graficas", precio: 23, nombre: "NVIDIA GeForce RTX 3060 Gaming Twin Edge", img: "../../assets/images/Zotac3060Twin.png"
    },
    {
        id: "5", marca: "MSI", categoria: "Tarjetas graficas", precio: 24, nombre: "NVIDIA GeForce RTX 3090 Ti SUPRIM X", img: "../../assets/images/MSI3090Ti.jpg"
    },
    {
        id: "6", marca: "PNY", categoria: "Tarjetas graficas", precio: 25, nombre: "NVIDIA GeForce RTX 2060", img: "../../assets/images/PNY2060.jpg"
    },
]

export const getFetch = (id) => {   
    if (id) {
        return new Promise(( resolve, reject )=>{
            setTimeout(()=>{
                resolve(productos.find(producto => producto.id === id))                
            }, 1000)            
        })       
    } else {
        return new Promise(( resolve, reject )=>{
            setTimeout(()=>{
                resolve(productos)                
            }, 2000)            
        })        
    }
}