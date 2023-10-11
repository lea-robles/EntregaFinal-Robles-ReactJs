import React, { useContext, useState } from 'react'
import styles from './styles.module.css'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'

const ItemDetail = ({ detail }) => {
  const [add, setAdd] = useState(0)

  const { addItem, calcularTotal} = useContext(CartContext)

  const countAdd = (count) =>{
    setAdd(count)
    
    const item = {
      id: detail.id,
      name: detail.title, 
      price: detail.price,
      stock: detail.stock
    }
    
    addItem(item,count)
  }


  return (
    <div className={styles["contenedor"]}>
      <div className={styles["card"]}>
        <h2>{detail.name}</h2>
        <img src={detail.image} alt="" />
        <p>${detail.price}</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
        </p>
        <>
          {
            add > 0 ? (
              <Link onClick={() => calcularTotal() } className={styles["buttons"]} to="/cart">Terminar compra</Link>
              ) : (
              <ItemCount initial={1} addCart={countAdd} setAdd={setAdd} stock={detail.stock}/>
            )
          }
      </>

    </div>
    </div >
  )
}

export default ItemDetail
