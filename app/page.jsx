import styles from "./page.module.css";

// API call to pull product information
async function fetchProducts() {
  try {
    const response = await fetch("http://localhost:3000/api/products", {
      method: "GET",
    });

    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }

    const data = await response.json();
    return data;
  } catch (e) {
    console.error(e);
    return null;
  }
}

export default async function Home() {
  const products = await fetchProducts();

  return (
    <main>
      <div className={styles.heroSection}>
        <h2>Homepage</h2>
        <div className={styles.productCardsContainer}>
          {products.product.map((product, idx) => {
            // grabs the first image url if there are multiple and rejects any string that doesn't contain correct file extension
            const imageUrlString = product["Image Url"];
            const validExtensionsRegex = /\.(jpeg|jpg|gif|png)$/i;
            const imageUrl = imageUrlString
              .split("|")
              .find((url) => validExtensionsRegex.test(url));

            // saves description to variable
            const productDescription = product.Description;
            // let first60Characters = "";
            // let remainingCharacters = "";

            // if (productDescription.length <= 60) {
            //   first60Characters = productDescription;
            // } else {
            //   const firstSpaceIndex = productDescription.lastIndexOf(" ", 60);
            //   first60Characters = productDescription.slice(0, firstSpaceIndex);
            //   remainingCharacters = productDescription.slice(
            //     firstSpaceIndex + 1
            //   );
            // }

            // saves price to variable
            const productPrice = product.Price;

            // rejects the entire product if no image or description
            if (!imageUrl || !productDescription || !productPrice) {
              return null;
            }

            return (
              <div className={styles.productCard}>
                <h2 className={styles.productTitle}>{product.Title}</h2>
                <img className={styles.productImg} src={imageUrl} />
                <p className={styles.productPrice}>{productPrice}</p>
                <p className={styles.productDescription}>{productDescription}</p>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
