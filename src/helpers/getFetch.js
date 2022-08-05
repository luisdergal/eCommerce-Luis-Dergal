let productos = [
    {
        id: "1", marca: "Asus", categoria: "Tarjetas_graficas", precio: 20000, nombre: "NVIDIA ROG Strix GeForce RTX 3080", img: "../../assets/images/rogStrix3080.png", stock: 12
    },
    {
        id: "2", marca: "Gigabyte", categoria: "Tarjetas_graficas", precio: 17000, nombre: "AMD Radeon RX 6800 XT Gaming OC", img: "../../assets/images/gigaByteRx6800.png", stock: 11
    },
    {
        id: "3", marca: "Gigabyte", categoria: "Tarjetas_graficas", precio: 14000, nombre: "NVIDIA GeForce RTX 3070 Ti Eagle OC", img: "../../assets/images/gigaByte3070ti.png", stock: 18
    },
    {
        id: "4", marca: "Zotac", categoria: "Tarjetas_graficas", precio: 9000, nombre: "NVIDIA GeForce RTX 3060 Gaming Twin Edge", img: "../../assets/images/Zotac3060Twin.png", stock: 26
    },
    {
        id: "5", marca: "MSI", categoria: "Tarjetas_graficas", precio: 28000, nombre: "NVIDIA GeForce RTX 3090 Ti SUPRIM X", img: "../../assets/images/MSI3090Ti.png", stock: 5
    },
    {
        id: "6", marca: "PNY", categoria: "Tarjetas_graficas", precio: 7000, nombre: "NVIDIA GeForce RTX 2060", img: "../../assets/images/PNY2060.png", stock: 30
    },
    {
        id: "7", marca: "Intel", categoria: "Procesadores", precio: 15000, nombre: "Intel Core i9-12900KF 5.20GHz", img: "../../assets/images/i912900k.png", stock: 30
    },
    {
        id: "8", marca: "Asus", categoria: "Motherboards", precio: 9000, nombre: "Asus ROG STRIX Z690-E GAMING WIFI", img: "../../assets/images/z690Rog.png", stock: 24
    },
    {
        id: "9", marca: "Asus", categoria: "Fuentes_de_poder", precio: 5000, nombre: " Asus ROG Strix 1000W", img: "../../assets/images/rog1000w.png", stock: 20
    },
    {
        id: "10", marca: "NZXT", categoria: "Gabinetes", precio: 4000, nombre: "NZXT H510i All Might Edición Especial", img: "../../assets/images/gabinetePlusUltra.png", stock: 5
    },
    {
        id: "11", marca: "Gskill", categoria: "Memoria_Ram", precio: 4500, nombre: "Memoria RAM 32GB DDR5 GSkill Trident Z5 RGB 6000Mhz Negras / Kit 2x16GB", img: "../../assets/images/Trident_ddr5.png", stock: 8
    },
    {
        id: "12", marca: "Western Digital", categoria: "Almacenamiento", precio: 3500, nombre: "Unidad de Estado Solido SSD M.2 PCI-e x4 Nvme 2TB WD_Black SN750", img: "../../assets/images/wdblac2tb.png", stock: 100
    },
    {
        id: "13", marca: "BenQ", categoria: "Monitores", precio: 12000, nombre: "BenQ 32 4K EW3270U / DP / HDMI - 60Hz / HDR / Freesync", img: "../../assets/images/benq4k32.png", stock: 12
    },
    {
        id: "14", marca: "Asus", categoria: "Refrigeracion", precio: 3000, nombre: "Enfriamiento Liquido AIO Asus ROG STRIX LC II 360 ARGB - 120mmX3 (360mm) Intel y Amd", img: "../../assets/images/rog360liquido.png", stock: 49
    },
    {
        id: "15", marca: "Razer", categoria: "Perifericos", precio: 2200, nombre: "Razer Huntsman 60% Optical / Razer Optical Linear Red Switch / LED RGB", img: "../../assets/images/razermini.png", stock: 40
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