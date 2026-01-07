import { useState } from "react"
import { useCart } from "./CartContext"
import { Trash2 } from "lucide-react"
import { useNavigate } from "react-router-dom"


const Cart = () => {
  const { cartItems, removeFromCart } = useCart()
  const [quantities, setQuantities] = useState({})
  const navigate = useNavigate()

  const getQuantity = (index) => quantities[index] || 1

  const calculateTotal = () => {
    return cartItems.reduce((total, item, index) => {
      const price = parseFloat(item.price.replace("$", ""))
      const quantity = getQuantity(index)
      return total + (price * quantity)
    }, 0)
  }

  const handleIncreaseCount = (index) => {
    setQuantities((prev) => ({ ...prev, [index]: getQuantity(index) + 1 }))

  }

  const handleDecreaseCount = (index) => {
    const currentQty = getQuantity(index)
    if (currentQty > 1) {
      setQuantities((prev) => ({
        ...prev,
        [index]: currentQty - 1
      }))
    }
  }

  const handleCheckout = () => {
    navigate("/checkout")
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-gray-100 py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-amber-900 mb-8 text-center">
          🛒 Your Cart
        </h1>

        {cartItems.length === 0 ? (
          <div className="bg-white rounded-2xl p-12 text-center shadow-md">
            <p className="text-xl text-gray-500 mb-4">Your cart is empty</p>
            <p className="text-gray-400">Add some delicious coffee to get started!</p>
          </div>
        ) : (
          <div className="space-y-4">
            {cartItems.map((item, index) => (
              <div
                key={`${item.id}-${index}`}
                className="flex items-center gap-6 bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition"
              >
                <div className="w-24 h-24 rounded-lg overflow-hidden border border-gray-200 bg-gray-50 flex-shrink-0">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    {item.name}
                  </h3>
                  <p className="text-sm text-gray-500 mb-2 line-clamp-2">
                    {item.description}
                  </p>
                  <p className="text-amber-700 font-bold text-lg">{item.price}</p>
                  <div className="flex items-center gap-3 mt-2">
                    <button
                      onClick={() => handleDecreaseCount(index)}
                      className="w-8 h-8 flex items-center justify-center bg-gray-200 hover:bg-gray-300 rounded-lg transition font-semibold"
                      aria-label="Decrease quantity"
                    >
                      −
                    </button>
                    <span className="text-lg font-semibold text-gray-700 min-w-[2rem] text-center">
                      {getQuantity(index)}
                    </span>
                    <button
                      onClick={() => handleIncreaseCount(index)}
                      className="w-8 h-8 flex items-center justify-center bg-gray-200 hover:bg-gray-300 rounded-lg transition font-semibold"
                      aria-label="Increase quantity"
                    >
                      +
                    </button>
                  </div>
                </div>

                <button
                  onClick={() => removeFromCart(index)}
                  className="p-3 text-red-500 hover:bg-red-50 rounded-lg transition"
                  aria-label="Remove item"
                >
                  <Trash2 className="h-5 w-5" />
                </button>
              </div>
            ))}


            <div className="bg-white rounded-2xl p-6 shadow-md mt-8">
              <div className="flex justify-between items-center mb-4">
                <span className="text-xl font-semibold text-gray-700">
                  Total Items:
                </span>
                <span className="text-xl font-semibold text-gray-900">
                  {cartItems.reduce((sum, _, index) => sum + getQuantity(index), 0)}
                </span>
              </div>
              <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                <span className="text-2xl font-bold text-amber-900">
                  Total Price:
                </span>
                <span className="text-2xl font-bold text-amber-700">
                  ${calculateTotal().toFixed(2)}
                </span>
              </div>
              <button className="w-full mt-6 bg-amber-700 hover:bg-amber-800 text-white py-3 rounded-xl font-semibold text-lg transition shadow-md" onClick={handleCheckout}>
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
export default Cart
