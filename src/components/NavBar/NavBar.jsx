import { Link } from "react-router-dom"
import CartWidget from "../CartWidget/CartWidget"
import styles from "./styles.module.css"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

const NavBar = () => {
    const { cartItems } = useContext(CartContext)

    return(
       <nav>
        <div className={styles["headerAndCart"]}>
            <Link className={styles["buttons"]} to="/"><h1>Pacc-Petshop</h1></Link>
            <Link to="/cart">
              <CartWidget cartItems={cartItems} />
            </Link>
        </div>
        <div className={styles["navBar"]}>
            <Link className={styles["buttons"]} to="/category/alimentos">Alimentos</Link>
            <Link className={styles["buttons"]} to="/category/higiene">Higiene</Link>
            <Link className={styles["buttons"]} to="/category/indumentaria">Indumentaria</Link>
            <Link className={styles["buttons"]} to="/category/juguetes">Juguetes</Link>
        </div>
       </nav> 
    )
}

export default NavBar