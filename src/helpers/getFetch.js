let productos = [
    {
        id: "1", marca: "Asus", categoria: "Tarjetas_graficas", precio: 20, nombre: "NVIDIA ROG Strix GeForce RTX 3080", img: "../../assets/images/rogStrix3080.jpg"
    },
    {
        id: "2", marca: "Gigabyte", categoria: "Tarjetas_graficas", precio: 21, nombre: "AMD Radeon RX 6800 XT Gaming OC", img: "../../assets/images/gigaByteRx6800.jpg"
    },
    {
        id: "3", marca: "Gigabyte", categoria: "Tarjetas_graficas", precio: 22, nombre: "NVIDIA GeForce RTX 3070 Ti Eagle OC", img: "../../assets/images/gigaByte3070ti.jpg"
    },
    {
        id: "4", marca: "Zotac", categoria: "Tarjetas_graficas", precio: 23, nombre: "NVIDIA GeForce RTX 3060 Gaming Twin Edge", img: "../../assets/images/Zotac3060Twin.png"
    },
    {
        id: "5", marca: "MSI", categoria: "Tarjetas_graficas", precio: 24, nombre: "NVIDIA GeForce RTX 3090 Ti SUPRIM X", img: "../../assets/images/MSI3090Ti.jpg"
    },
    {
        id: "6", marca: "PNY", categoria: "Tarjetas_graficas", precio: 25, nombre: "NVIDIA GeForce RTX 2060", img: "../../assets/images/PNY2060.jpg"
    },
    {
        id: "7", marca: "Intel", categoria: "Procesadores", precio: 26, nombre: "Intel Core i9-12900KF 5.20GHz", img: "../../assets/images/i912900k.jpg"
    },
    {
        id: "8", marca: "Asus", categoria: "Motherboards", precio: 27, nombre: "Asus ROG STRIX Z690-E GAMING WIFI", img: "../../assets/images/z690Rog.jpg"
    },
    {
        id: "9", marca: "Asus", categoria: "Fuentes_de_poder", precio: 28, nombre: " Asus ROG Strix 1000W", img: "../../assets/images/rog1000w.jpg"
    },
    {
        id: "10", marca: "NZXT", categoria: "Gabinetes", precio: 29, nombre: "NZXT H510i All Might Edición Especial", img: "../../assets/images/gabinetePlusUltra.jpg"
    },
    {
        id: "11", marca: "Gskill", categoria: "Memoria_Ram", precio: 30, nombre: "Memoria RAM 32GB DDR5 GSkill Trident Z5 RGB 6000Mhz Negras / Kit 2x16GB", img: "../../assets/images/Trident_ddr5.png"
    },
    {
        id: "12", marca: "Western Digital", categoria: "Almacenamiento", precio: 31, nombre: "Unidad de Estado Solido SSD M.2 PCI-e x4 Nvme 2TB WD_Black SN750", img: "../../assets/images/wdblac2tb.png"
    },
    {
        id: "13", marca: "BenQ", categoria: "Monitores", precio: 32, nombre: "BenQ 32 4K EW3270U / DP / HDMI - 60Hz / HDR / Freesync", img: "../../assets/images/benq4k32.jpg"
    },
    {
        id: "14", marca: "Asus", categoria: "Refrigeracion", precio: 33, nombre: "Enfriamiento Liquido AIO Asus ROG STRIX LC II 360 ARGB - 120mmX3 (360mm) Intel y Amd", img: "../../assets/images/rog360liquido.jpg"
    },
    {
        id: "15", marca: "Razer", categoria: "Perifericos", precio: 34, nombre: "Razer Huntsman 60% Optical / Razer Optical Linear Red Switch / LED RGB", img: "../../assets/images/razermini.jpg"
    }
]

export const getFetch = (id) => {   
    
    return new Promise((resolve, reject)=> {
        setTimeout(()=>{
            if (id) {
                resolve(productos.find(producto => producto.id === id))
            } else {
                resolve(productos)
            }
        }, 1200)
    })

}