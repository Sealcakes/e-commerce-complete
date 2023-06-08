'use client';

import { useParams } from 'next/navigation';

async function fetchProduct(params) {
  try {
    const response = await fetch("http://localhost:3000/api/products/" + params);
    
    if (!response.ok) {
      throw new Error("Failed to fetch product");
    }

    const data = await response.json();
    return data;
  } catch (e) {
    console.error(e);
    return null;
  }
}

export default async function productPage() {
  const params = useParams();
  const product = await fetchProduct(params.id);
  return (
    <div>
      <h2>{product.product.Title}</h2>
      <img src={product.product['Image Url']}/>
      <p>{product.product.Description}</p>
      <p>{product.product.Price}</p>
    </div>
  )
}
