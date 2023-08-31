import { Link } from "react-router-dom"
import CartWidget from "../CartWidget/CartWidget"
import styles from "./styles.module.css"

const NavBar = () => {
    return(
       <nav>
        <div className={styles["headerAndCart"]}>
            <Link className={styles["buttons"]} to="/"><h1>Pacc-Petshop</h1></Link>
            <CartWidget />
        </div>
        <div className={styles["navBar"]}>
            <Link className={styles["buttons"]} to="/category/alimentos">Alimentos</Link>
            <Link className={styles["buttons"]} to="/category/higiene">Higiene</Link>
            <Link className={styles["buttons"]} to="/category/accesorios">Accesorios</Link>
            <Link className={styles["buttons"]} to="/category/juguetes">Juguetes</Link>
        </div>
       </nav> 
    )
}

export default NavBar