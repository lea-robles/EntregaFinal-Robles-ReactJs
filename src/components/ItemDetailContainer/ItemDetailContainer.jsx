import { useParams } from "react-router"
import { useState, useEffect } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../firebase/client";
import { RotatingLines } from 'react-loader-spinner'
import styles from './styles.module.css';

const ItemDetailContainer = () => {

    const [detail, setDetail] = useState({})
    const [loading, setLoading] = useState(true)

    const { id } = useParams()

    useEffect(() => {
        setLoading(true)

        const docRef = doc(db, "products", id)

        getDoc(docRef)

            .then(response => {
                const data = response.data()
                const productAdapted = { id: response.id, ...data }
                setDetail(productAdapted)
            })
            .catch(error => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })

    }, [id])


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
            <ItemDetail detail={detail} />
    )
}

export default ItemDetailContainer