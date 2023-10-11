import React, { useState } from 'react'
import { collection, addDoc, doc, updateDoc } from "firebase/firestore"
import { db } from '../../firebase/client'
import { Link } from 'react-router-dom'
import { RotatingLines } from 'react-loader-spinner'
import styles from './styles.module.css'

const CheckoutForm = ({ cart }) => {
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [showForm, setShowForm] = useState(true)
    const [purchaseId, setPurchaseId] = useState('')
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);

        // Crear los datos de la compra
        const purchaseData = {
            email,
            name,
            phone,
            items: cart,
            total: cart.reduce((total, item) => total + item.price * item.quantity, 0),
        }

        try {
            const docRef = await addDoc(collection(db, "purchases"), purchaseData)
            setPurchaseId(docRef.id)

            // Actualizar el stock de cada producto

            for (let item of cart) {
                const productRef = doc(db, "products", item.id);
                await updateDoc(productRef, {
                    stock: item.stock - item.quantity
                });
            }

            setShowForm(false)
        } catch (e) {
            console.error("Error al guardar la compra: ", e)
        } finally {
            setLoading(false)
        }
    }

    if (!showForm) {
        return (
            <div className={styles["contenedorId"]}>
                <p className={styles["id"]}>ID de compra: {purchaseId}</p>
                <Link className={styles["send"]} to="/">Volver al inicio</Link>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit}>
            {loading ? (
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
            ) : (
                <div className={styles['contenedorForm']}>
                    <label>
                        Email:
                        <input type="email" value={email} onChange={e => setEmail(e.target.value)} required />
                    </label>
                    <label>
                        Nombre:
                        <input type="text" value={name} onChange={e => setName(e.target.value)} required />
                    </label>
                    <label>
                        Teléfono:
                        <input type="tel" value={phone} onChange={e => setPhone(e.target.value)} required />
                    </label>
                    <input type="submit" value="Enviar" className={styles["send"]} />
                </div>
            )}
        </form>
    );
}

export default CheckoutForm;
