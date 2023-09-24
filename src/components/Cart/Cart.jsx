import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import styles from './styles.module.css';

const Cart = () => {
    const {cart, clearCart } = useContext(CartContext)
    return(
        <p>hola</p>
    )
}

export default Cart