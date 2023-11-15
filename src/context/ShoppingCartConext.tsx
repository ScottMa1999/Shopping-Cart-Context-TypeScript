import { createContext, useState, useContext } from "react"


type ShoppingCartContextType = {
  cartItems: CartItemsType[]
  IsCartOpen: boolean
  toggleCartOpen: () => void
  toggleCartClose: () => void
  getItemQuantity: (id: number) => number
  increaseCartQuantity: (id: number) => void
  decreaseCartQuantity: (id: number) => void
  removeFromCart: (id: number) => void
}

type ShoppingCartContextProviderProps = {
  children: React.ReactNode
}

export type CartItemsType = {
  id: number
  quantity: number
}

export const ShoppingCartContext = createContext<ShoppingCartContextType>({} as ShoppingCartContextType)

export const ShoppingCartContextProvider = ({children}: ShoppingCartContextProviderProps) => {
  // states
  const [IsCartOpen, setCartOpen] = useState<boolean>(false);
  const [cartItems, setCartItems] = useState<CartItemsType[]>([]);

  // expressions
  const toggleCartOpen = () => setCartOpen(pre => !pre);
  const getItemQuantity = (id: number) => cartItems.find(item => item.id === id)?.quantity || 0;
  const increaseCartQuantity = (id: number) => {
    if (cartItems.find(item => item.id === id) == null) {
      setCartItems(pre => [...pre, {id: id, quantity: 1}])
    }
    else {
      const updatedCart = cartItems.map(element => {
        if (element.id === id) {
          return {...element, quantity: element.quantity + 1}
        }
        else {
          return element
        }
      })
      setCartItems(updatedCart);
    }
  }
  const decreaseCartQuantity = (id: number) => {
    if (cartItems.find(element => element.id === id)?.quantity === 1) {
      setCartItems(pre => pre.filter(element => element.id !== id));
    }
    else {
      const updatedCartItems = cartItems.map(element => {
        if (element.id === id) {
          return { ...element, quantity: element.quantity - 1 };
        }
        else {
          return element;
        }
      })
      setCartItems(updatedCartItems);
    }
  }
  const removeFromCart = (id: number) => {
    setCartItems(pre => pre.filter(element => element.id !== id));
  }
  const toggleCartClose = () => setCartOpen(false);
  
  return (
    <ShoppingCartContext.Provider value={{
      cartItems,
      IsCartOpen,
      toggleCartOpen,
      toggleCartClose,
      getItemQuantity,
      increaseCartQuantity,
      decreaseCartQuantity,
      removeFromCart
    }}>
      {children}
    </ShoppingCartContext.Provider>
  )
}

export function useShoppingCartContext() {
  const context = useContext(ShoppingCartContext);
  if (!context) {
    throw new Error('Please use the ShoppongCartContext inside the ShoppingCartContextProvider')
  }
  return context
}