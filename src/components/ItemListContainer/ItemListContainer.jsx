import styles from './styles.module.css';
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { db } from '../../firebase/client';
import { getDocs, collection, query, where } from "firebase/firestore";
import { RotatingLines } from 'react-loader-spinner'
import ItemApi from "../ItemApi/ItemApi"

const ItemListContainer = ({ greeting }) => {
    const [items, setItems] = useState([])

    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)
        const productRef = categoryId
            ? query(collection(db, "products"), where("category", "==", categoryId))
            : collection(db, "products")

        const getProducts = async () => {
            const data = await getDocs(productRef)
            const dataFiltrada = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
            console.log(dataFiltrada)
            setItems(dataFiltrada)
        }
        getProducts()
            .catch(error => { console.log(error) })
            .finally(() => {
                setLoading(false)
            })
    }, [])

    return (
        loading ?
            <div className={styles["spinner"]}>
                <RotatingLines
                    strokeColor="green"
                    strokeWidth="5"
                    animationDuration="0.75"
                    width="96"
                    visible={true}
                />
                <p>Cargando . . .</p>
            </div>
            :
            <div className={styles["main"]}>
                <h1>{greeting}</h1>
                <ItemApi prod={items} />
            </div>

    )
}

export default ItemListContainer