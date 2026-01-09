import { createContext, useContext, useState, useEffect } from "react"

const CartContext = createContext()
const getCartFromStorage = () => {
  try {
    const cartData = localStorage.getItem("cartItems")
    return cartData ? JSON.parse(cartData) : []
  } catch (error) {
    console.error("Error loading cart from localStorage:", error)
    return []
  }
}

const saveCartToStorage = (cartItems) => {
  try {
    localStorage.setItem("cartItems", JSON.stringify(cartItems))
  } catch (error) {
    console.error("Error saving cart to localStorage:", error)
  }
}

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => getCartFromStorage())
  useEffect(() => {
    saveCartToStorage(cartItems)
  }, [cartItems])

  const addToCart = (product) => {
    setCartItems((prev) => [...prev, product])
  }

  const removeFromCart = (index) => {
    setCartItems((prev) => prev.filter((_, i) => i !== index))
  }

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
