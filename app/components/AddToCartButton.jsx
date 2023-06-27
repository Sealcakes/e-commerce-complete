"use client";

// eventually add in the add to cart button functionality

const cartList = [];

const addProduct = (product) => {
  cartList.push(product);
}

console.log(cartList);

export default function AddToCart() {
  return (
    <div>
      <button onClick={addProduct}>Add To Cart</button>
    </div>
  )
}
