'use client';

import styles from './page.module.css';
import { useParams } from 'next/navigation';
import EmblaCarousel from '@/app/components/EmblaCarousel';

async function fetchProduct(params) {
  try {
    const response = await fetch("http://localhost:3000/api/products/" + params);
    
    if (!response.ok) {
      throw new Error("Failed to fetch product");
    }

    const data = await response.json();
    return data.product;
  } catch (e) {
    console.error(e);
    return null;
  }
}


export default async function productPage() {
  const params = useParams();
  const product = await fetchProduct(params.id);
  
  const images = product.images.split("|");
  const options = { loop: true }
  
  
  return (
    <div className={styles.pageContainer}>
      <div className={styles.productContainer}>
        <h2 className={styles.productTitle}>{product.title}</h2>
        <div className={styles.imageContainer}>
          <EmblaCarousel slides={images} options={options} />
          <div className={styles.priceContainer}>
            <p className={styles.productPrice}>{product.price}</p>
            <button className={styles.cartBtn}>Add to Cart</button>
          </div>
        </div>
        <p>{product.description}</p>
      </div>
    </div>
  )
}
