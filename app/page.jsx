import styles from "./page.module.css";
import CardList from "./components/cardList";

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
        <CardList products={products} />
      </div>
    </main>
  );
}
