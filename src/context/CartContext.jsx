import { createContext, useState, useEffect } from "react"

export const CartContext = createContext({
    cart: [],
    total: 0,
    cartItems: 0
})

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const [total, setTotal] = useState(0)
    const [cartItems, setCartItems] = useState(0)
    console.log("cart " + cart)
    console.log("total " + total)

    const addItem = (item, quantity) => {
        const index = cart.findIndex(producto => producto.id === item.id)
        if (index === -1) {
            setCart(cart => [...cart, { ...item, quantity }])
        } else {
            const cartUpdated = cart.map(producto =>
                producto.id === item.id
                    ? { ...producto, quantity: producto.quantity + quantity }
                    : producto
            )
            setCart(cartUpdated)
        }
        calcularTotal()
        setCartItems(cartItems + quantity)
    }

    const removeProd = (itemId) => {
        const cartUpdated = cart.filter(producto => producto.id !== itemId)
        setCart(cartUpdated, () => calcularTotal())

        const item = cart.find(producto => producto.id === itemId)
        if (item) {
            setCartItems(cartItems - item.quantity)
        }
    }

    const calcularTotal = () => {
        const totalPrice = cart.reduce((acumulador, item) => {
            return acumulador + (item.price * item.quantity)
        }, 0)
        setTotal(totalPrice)
    };

    const clearCart = () => {
        setCart([])
        setTotal(0)
    }

    useEffect(() => {
        const totalPrice = cart.reduce((acumulador, item) => {
            return acumulador + (item.price * item.quantity)
        }, 0)
        setTotal(totalPrice)
    }, [cart])

    return (
        <CartContext.Provider value={{ cart, total,cartItems, addItem, removeProd, clearCart, calcularTotal }}>
            {children}
        </CartContext.Provider>
    )
}