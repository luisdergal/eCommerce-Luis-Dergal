import { createContext, useState, useContext } from "react";

 const CartContext = createContext([])


export const useCartContext = () => useContext( CartContext )

const CartContextProvider = ({children}) => {

    const[cartList, setCartList] = useState([])

    const agregarCarrito = (prod) =>{
        setCartList([
            ...cartList,
            prod
        ])
    }

    return(
        <CartContext.Provider value={{
            cartList,
            agregarCarrito
        }}>
            {children}
        </CartContext.Provider>

    )
}

export default CartContextProvider 