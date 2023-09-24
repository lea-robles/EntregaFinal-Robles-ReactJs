import { createContext, useState } from "react";

export const CartContext = createContext({
    cart: []
})

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    console.log(cart)

    const addItem = (item, quantity) => {
        if (!isInCart(item.id)) {
            setCart(exis => [...exis, { ...item, quantity }])
        } else {
            console.error("el producto fue agregado revisar este error")
        }
    }

    const removeProd = (itemId) => {
       const cartUpdated = cart.filter(producto => producto.id !== itemId)
       setCart(cartUpdated)
    }

    const clearCart = () => {
        setCart([])
    }

    const isInCart = (itemId) => {
        return cart.some(producto => producto.id === itemId)
    }

    return (
        <CartContext.Provider value={{ cart, addItem, removeProd, clearCart }}>
            {children}
        </CartContext.Provider>
    )
}