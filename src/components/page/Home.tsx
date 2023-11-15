// rtk query
import { ProductsApi } from "../../api/ProductsApi"

// components
import { StoreItem } from "../StoreItem";

export function Home() {
  // data
  const { data, isLoading, isError } = ProductsApi.useFetchAllProductsQuery();

  return (
    <section className="Home">
      <header>
        Store
      </header>
      <main>
        { isLoading && <h1>Loading...</h1> }
        { isError && <p style={{color: "red"}}>Error is happening!</p>}
        { data && (
          <section className="products">
            {data.map(element => <StoreItem key={element.id} element={element} />)}
          </section>
        )}
      </main>
    </section>
  )
}