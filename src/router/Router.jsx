import '../App.css'
import NavBar from '../components/NavBar/NavBar'
import ItemListContainer from '../components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer'
import Cart from '../components/Cart/Cart'
import Checkout from '../components/Checkout/Chekout'
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom"
import { CartProvider } from '../context/CartContext'

const Router = () => {
    return (
        <BrowserRouter>
            <CartProvider>
            <NavBar />
            <Routes>
                <Route path="/" element={<ItemListContainer greeting={"Bienvenidos"} />} />
                <Route path="/category/:id" element={<ItemListContainer />} />
                <Route path="/item/:id" element={<ItemDetailContainer />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="*" element={<h1>404 Not Found</h1>} />
                <Route path="/checkout" element={<Checkout/>} />
            </Routes>
            </CartProvider>
        </BrowserRouter>
    )
}

export default Router