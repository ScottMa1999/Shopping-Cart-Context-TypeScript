// data-type
import { dataType } from "../api/ProductsApi"

// Shopping-cart context
import { useShoppingCartContext } from "../context/ShoppingCartConext"

// Currency Formatter
import { CurrencyFormatter } from "../utility/CurrencyFormatter";

type StoreItemProps = {
  element: dataType
}

export function StoreItem({element}: StoreItemProps) {
  // context
  const { increaseCartQuantity, cartItems, getItemQuantity, decreaseCartQuantity } = useShoppingCartContext();

  // expressions
  const handleAddProductToCart = (id: number) => {
    increaseCartQuantity(id);
  }

  const ItemsInCart = (id: number) => {
    if (cartItems.some(item => item.id === id)) return true;
    else {
      return false;
    }
  }

  return (
    <section className="store-items">
      <img src={element.imgUrl} alt={element.name} />
      <section className="item-details">
        <section className="name-price">
          <p>{element.name}</p>
          <p>{CurrencyFormatter(element.price)}</p>
        </section>
        <section className="buttons">
          { !ItemsInCart(element.id) && <button className="add-to-cart-btn" onClick={() => handleAddProductToCart(element.id)}>Add to cart</button> }
          { ItemsInCart(element.id) && (
            <section className="add-subtract-cart-items">
              <button onClick={() => decreaseCartQuantity(element.id)}>-</button>
              <p><span>{`${getItemQuantity(element.id)}`}</span> in cart</p>
              <button onClick={() => increaseCartQuantity(element.id)}>+</button>
            </section>
          ) }
        </section>
      </section>
    </section>
  )
}