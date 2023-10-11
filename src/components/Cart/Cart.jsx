import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';

const Cart = () => {
    const { cart, clearCart, total, removeProd} = useContext(CartContext)

    if (cart.length < 1) {
        return (
            <div className={styles["container"]}>
                <p className={styles["text"]}>No hay items en el carrito</p>
                <Link className={styles["link"]} to="/" >Productos</Link>
            </div>
        )
    }

    return (
        <div className={styles["container"]}>
            <div>{cart.map((product) => (
                <div className={styles["list"]} key={product.id}>
                    <p>Producto = {product.name}</p>
                    <p>Precio Unitario = ${product.price}</p>
                    <p>Unidades = {product.quantity} </p>
                    <button onClick={() => removeProd(product.id)}>X</button>
                </div>
            ))}
                <div className={styles["vaciar"]}>
                    <p>Total a pagar = ${total}</p>
                    <button onClick={() => clearCart()}>Vaciar carrito</button>
                    <Link className={styles["link"]} to="/checkout">checkout</Link>
                </div>
            </div>
        </div>
    )
}

export default Cart
