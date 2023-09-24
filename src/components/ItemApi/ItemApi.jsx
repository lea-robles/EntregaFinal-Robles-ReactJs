import styles from "./styles.module.css"
import { Link } from "react-router-dom"

const ItemApi = ({ prod }) => {


    return (
        <div className={styles["container"]}>
            {prod.map(producto => (
                <div className={styles["card"]} key={producto.id}>
                    <p>{producto.title}</p>
                    <img src={producto.image} alt="Imagenes de productos" />
                    <p>${producto.price}</p>
                    <p>Stock: {producto.stock}</p>
                    <div>
                        <Link className={styles["buttons"]} to={`/item/${producto.id}`}>Ver detalles</Link>
                    </div>

                </div>
            ))}
        </div>
    )
}

export default ItemApi