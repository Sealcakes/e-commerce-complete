

async function fetchProducts() {
  const response = await fetch("http://localhost:3000/api/products", {
    method: 'GET'
  })
  
  return response;
}

export default async function Dashboard() {

  const products = await fetchProducts();
  console.log(typeof products);

    return(
        <div>
            <h2>This is the dashboard.</h2>
            <ul>
              {
                Object.keys(products).map((product, idx) => (
                  <li key={idx}>{product[title]}</li>
                ))
              }
            </ul>
        </div>
    )
}
