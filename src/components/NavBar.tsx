// Navigation Routes
import { NavLink } from "react-router-dom"

// ShoppingCart Context
import { useShoppingCartContext } from "../context/ShoppingCartConext"

export function NavBar() {
  // context
  const { toggleCartOpen, cartItems } = useShoppingCartContext();

  // expressions
  const toggleShoppingCart = () => {
    toggleCartOpen();
  }

  const totalQuantity = cartItems.reduce((total, element) => total + element.quantity, 0);
 
  return (
    <nav className="NavBar">
      <section className="routes">
        <NavLink to="/"><p>Home</p></NavLink>
        <NavLink to="/store"><p>Store</p></NavLink>
        <NavLink to="/about"><p>About</p></NavLink>
      </section>
      <section className="cart">
        <button onClick={toggleShoppingCart}>🛒</button>
        <div className="numberItemsInCart">{totalQuantity}</div>
      </section>
    </nav>
  )
}