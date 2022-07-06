import { createContext, useState } from "react";

const CartContext = createContext()

const CartProvider = ({children}) => {

    const [ cartListItems, setCartListItems ] = useState([])
    const [ totalPrice, setTotalPrice ] =useState(0)

    const addProductToCart = (data) => {
        console.log("Se agrego el producto: ", data)

        let isInCart = cartListItems.find(cartItems => cartItems.id === data.id)
        if(!isInCart) {
            setTotalPrice(totalPrice + data.data.price)
            return setCartListItems(cartListItems => [...cartListItems, data])
        }
    }

    const cleanCartProducts = () => {
        setTotalPrice(0)
        setCartListItems([])
    }

    const data = {
        cartListItems,
        addProductToCart,
        totalPrice,
        cleanCartProducts
    }

    return (

           <CartContext.Provider value={data}>
                    {children}            
           </CartContext.Provider>
    )
}

export default CartContext;
export { CartProvider };