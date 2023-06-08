import styles from './cardList.module.css';
import Card from './Card';

export default function CardList({ products }) {
  
  return(
    <div className={styles.productCardsContainer}>
      {products.map((product, idx) => {

        // grabs the first image url if there are multiple and rejects any string that doesn't contain correct file extension
        const imageUrlString = product["Image Url"];
        const validExtensionsRegex = /\.(jpeg|jpg|gif|png)$/i;
        const imageUrl = imageUrlString
          .split("|")
          .find((url) => validExtensionsRegex.test(url));

        // saves description to variable
        const productDescription = product.Description;

        // saves price to variable
        const productPrice = product.Price;
        
        // rejects the entire product if no image or description
        if (!imageUrl || !productDescription || !productPrice) {
          return null;
        }

        let first120Characters = "";
        let remainingCharacters = "";

        if (productDescription.length <= 120) {
          first120Characters = productDescription;
        } else {
          const firstSpaceIndex = productDescription.lastIndexOf(" ", 120);
          first120Characters = productDescription.slice(0, firstSpaceIndex);
          remainingCharacters = productDescription.slice(
            firstSpaceIndex + 1
          );
        }

        return (
          <Card 
            product={product} 
            idx={idx}
            imageUrl={imageUrl}
            productPrice={productPrice}
            first120Characters={first120Characters} 
          />
        );
      })}
    </div>
  )
}
