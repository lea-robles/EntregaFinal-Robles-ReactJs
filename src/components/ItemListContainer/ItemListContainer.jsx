import styles from "./styles.module.css"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import ItemApi from "../ItemApi/ItemApi"

const ItemListContainer = ({greeting}) => {
    const [items, setItems] = useState([])

    const {id} = useParams()

    useEffect( () => {
        const getProducts = () => {
            const url = "/data/products.json"
        fetch(url)
            .then(res => res.json())
            .then((prod) => {
                const productosFiltrados = prod.filter((producto) => producto.category === id)

                if (productosFiltrados.length > 0) return setItems(productosFiltrados)

                setItems(prod)
              })
            .catch(error => console.log(error))
        }
        getProducts()
    },[id])

    return(
        <div className={styles["main"]}>
            <h1>{greeting}</h1> 
            <ItemApi prod={items} />   
        </div>
        
    )
}

export default ItemListContainer