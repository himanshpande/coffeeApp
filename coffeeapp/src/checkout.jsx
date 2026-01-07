import { useCart } from "./CartContext"

const Checkout = () => {
  const { cartItems } = useCart()

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      const price = parseFloat(item.price.replace("$", ""))
      return total + price
    }, 0)
  }
  const handleOrder = () => {
    alert("Order placed successfully! Thank you for shopping with BrewHouse ☕")
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-gray-100 py-20 px-4">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">

        <div className="bg-white rounded-2xl p-8 shadow-md">
          <h2 className="text-2xl font-bold text-amber-900 mb-6">
            ☕ Customer Details
          </h2>

          <div className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-amber-500"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-amber-500"
            />

            <input
              type="text"
              placeholder="Phone Number"
              className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-amber-500"
            />

            <textarea
              rows="3"
              placeholder="Delivery Address"
              className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>


          <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-4">
            💳 Payment Method
          </h3>

          <div className="space-y-3">
            <label className="flex items-center gap-3">
              <input type="radio" name="payment" defaultChecked />
              <span>Cash on Delivery</span>
            </label>

            <label className="flex items-center gap-3">
              <input type="radio" name="payment" />
              <span>UPI / Card</span>
            </label>
          </div>
        </div>


        <div className="bg-white rounded-2xl p-8 shadow-md">
          <h2 className="text-2xl font-bold text-amber-900 mb-6">
            🧾 Order Summary
          </h2>

          <div className="space-y-4 max-h-64 overflow-y-auto">
            {cartItems.map((item, index) => (
              <div
                key={index}
                className="flex justify-between items-center border-b pb-3"
              >
                <div>
                  <p className="font-semibold text-gray-800">{item.name}</p>
                  <p className="text-sm text-gray-500">{item.price}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-between items-center mt-6 pt-4 border-t">
            <span className="text-xl font-bold text-gray-700">Total</span>
            <span className="text-2xl font-bold text-amber-700">
              ${calculateTotal().toFixed(2)}
            </span>
          </div>

          <button className="w-full mt-6 bg-amber-700 hover:bg-amber-800 text-white py-3 rounded-xl font-semibold text-lg transition shadow-md" onClick={handleOrder}>
            Place Order ☕
          </button>
        </div>

      </div>
    </div>
  )
}

export default Checkout
