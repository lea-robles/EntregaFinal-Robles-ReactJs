import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"

const ItemDetailContainer = () => {
    const [detail, setDetail] = useState({})
    const {id} = useParams()

    

    useEffect(() => {
        const getProducts = () => {
            const url = "/data/products.json"
        fetch(url)
            .then(res => res.json())
            .then((prod) => {
                const productoFiltrado = prod.find((producto) => producto.id === Number(id))
    
                setDetail(productoFiltrado)
              })
            .catch(error => console.log(error))
        }
        getProducts()
    }, [id])
    return (
        <ItemDetail detail={detail}/>
    )
}

export default ItemDetailContainer