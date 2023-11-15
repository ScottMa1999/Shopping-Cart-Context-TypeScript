// cart-item type
import { CartItemsType } from "../context/ShoppingCartConext"

// products-Api
import { ProductsApi } from "../api/ProductsApi"

// Shopping-cart context
import { useShoppingCartContext } from "../context/ShoppingCartConext";

// Currency-Format
import { CurrencyFormatter } from "../utility/CurrencyFormatter";

type CartItemPropsType = {
  item: CartItemsType
}

export function CartItem({item}: CartItemPropsType) {
  // rtk query
  const { data } = ProductsApi.useFetchAllProductsQuery();

  // Shopping-cart context
  const { removeFromCart } = useShoppingCartContext();

  // expressions
  const findImageSrc = (id: number) => {
    return data!.find(element => element.id === id)!.imgUrl;
  }

  const findCartProductName = (id: number) => {
    return data!.find(element => element.id === id)!.name;
  }

  const findCartProductPrice = (id: number) => {
    return data!.find(element => element.id === id)!.price;
  }

  const calculateTotalUnitPrice = (id: number, quantity: number) => {
    return findCartProductPrice(id) * quantity;
  }

  return (
    <section className="cart-item">
      {
        data && (
          <>
            <img src={findImageSrc(item.id)} alt={findCartProductName(item.id)}/>
            <section className="price-quantity">
              <section className="title-unitPrice">
                <p>{findCartProductName(item.id)}<span>{item.quantity > 1 ? ` x${item.quantity}` : ''}</span></p>
                <p className="unit-price">{CurrencyFormatter(findCartProductPrice(item.id))}</p>
              </section>
              <section className="totalPrice">
                <p>{CurrencyFormatter(calculateTotalUnitPrice(item.id, item.quantity))}</p>
              </section>
            </section>
            <button onClick={() => removeFromCart(item.id)}><p>X</p></button>
          </>
        )
      }
    </section>
  )
}