import CheckoutForm from '../CheckoutForm/ChekoutForm';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const Checkout = () => {
    const { cart } = useContext(CartContext);
    
    return(
        <CheckoutForm cart={cart} />
    )
}

export default Checkout

