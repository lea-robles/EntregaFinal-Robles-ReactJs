import styles from './styles.module.css';
import { useState } from 'react';

const ItemCount = ({ initial, stock, addCart }) => {
    const [count, setCount] = useState(initial);
    
    const addToCart = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    }

    const removeFromCart = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    }
    console.log("stock: ", stock)
    return (
        <div className={styles["contador"]}>
            <button onClick={removeFromCart}>-</button>
            <p className={styles["numCount"]}> {count} </p>
            <button onClick={addToCart}>+</button>
            <button onClick={() => addCart(count)} disabled={!stock}>
                Agregar al carrito
            </button>
        </div>
    )
}

export default ItemCount