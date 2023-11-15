// Shopping-cart context
import { useShoppingCartContext } from "../context/ShoppingCartConext"

// components
import { CartItem } from "./CartItem";

export const ShoppingCart = () => {
  // Shopping-cart context
  const { IsCartOpen, cartItems, toggleCartClose } = useShoppingCartContext();

  return (
    <section className="Shopping-cart" style={IsCartOpen ? {transform: "translateX(-30vw)", transition: "400ms"} : {transform: "translateX(30vw)", transition: "700ms"}}>
      <header>
        <p>Cart</p>
        <button className="close-button" onClick={() => toggleCartClose()}><p>X</p></button>
      </header>
      <main>
        {
          cartItems?.map(item => <CartItem item={item} key={item.id} />)
        }
      </main>
      <div>Total: </div>
    </section>
  )
}