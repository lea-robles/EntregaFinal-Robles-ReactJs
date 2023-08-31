import React, { useState } from 'react';
import styles from './styles.module.css';

const ItemDetail = ({ detail }) => {
  const [count, setCount] = useState(0);

  const addToCart = () => {
    setCount(count + 1);
  }

  const removeFromCart = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  return (
    <div className={styles["contenedor"]}>
      <div className={styles["card"]}>
        <h2>{detail.nombre}</h2>
        <img src={`/data/img/${detail.rutaImagen}`} alt="" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
        </p>
        <button onClick={addToCart}>Añadir al carrito</button>
        <button onClick={removeFromCart}>Quitar del carrito</button>
        <p>
            <span className={styles["textoBlanco"]}>Unidades en carrito: {count}</span>
        </p>
        
      </div>
    </div>
  )
}

export default ItemDetail;
