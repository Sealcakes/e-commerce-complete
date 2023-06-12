import styles from "./cardList.module.css";
import Card from "./Card";

export default function CardList({ products }) {
  return (
    <div className={styles.productCardsContainer}>
      {products.map((product, idx) => {
        const productDescription = product.description;
        let first120Characters = "";
        let remainingCharacters = "";

        if (productDescription.length <= 120) {
          first120Characters = productDescription;
        } else {
          const firstSpaceIndex = productDescription.lastIndexOf(" ", 120);
          first120Characters = productDescription.slice(0, firstSpaceIndex);
          remainingCharacters = productDescription.slice(firstSpaceIndex + 1);
        }

        return (
          <Card
            product={product}
            idx={idx}
            imageUrl={product.main_image}
            productPrice={product.price}
            first120Characters={first120Characters}
          />
        );
      })}
    </div>
  );
}
