'use client';
import styles from './Card.module.css';



export default function Card({ product, idx, imageUrl, productPrice, first120Characters }) {

  return (
    <div key={idx} className={styles.productCard}>
      <h2 className={styles.productTitle}>{product.Title}</h2>
      <img className={styles.productImg} src={imageUrl} />
      <p className={styles.productPrice}>{productPrice}</p>
      <p className={styles.productDescription}>{first120Characters}</p>
    </div>
  )
}
