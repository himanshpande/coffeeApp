import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useCart } from "./CartContext"

const StarRating = ({ rating = 4 }) => {
  return (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, i) => (
        <span
          key={i}
          className={`text-sm ${i < rating ? "text-yellow-400" : "text-gray-300"
            }`}
        >
          ★
        </span>
      ))}
    </div>
  )
}


export const ProductCard = ({ id, name, price, rating, description, image, count }) => {
  const [isFavorited, setIsFavorited] = useState(false)
  const { addToCart } = useCart()

  const handleAddToCart = () => {
    addToCart({ id, name, price, rating, description, image, count })
  }

  return (
    <div className="group relative bg-white rounded-2xl p-6 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
      <button
        onClick={() => setIsFavorited(!isFavorited)}
        className={`absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center text-lg transition ${isFavorited
            ? "bg-red-500 text-white"
            : "bg-white text-gray-500 hover:text-red-500 shadow"
          }`}
      >
        ♥
      </button>

      <div className="mb-6 flex justify-center">
        <div className="w-40 h-28 rounded-lg overflow-hidden border border-gray-200 bg-gray-50">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition"
          />
        </div>
      </div>

      <div className="flex justify-center mb-3">
        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50">
          <StarRating rating={rating} />
          <span className="text-xs text-gray-600">{rating}.0</span>
        </div>
      </div>

      <h3 className="text-lg font-semibold text-center">{name}</h3>
      <p className="text-center text-amber-700 font-bold">{price}</p>
      <p className="text-sm text-gray-500 text-center mb-6 line-clamp-2">
        {description}
      </p>

      <div className="flex gap-3">
        <button className="flex-1 bg-amber-700 text-white py-2 rounded-lg" >
          Shop Now
        </button>
        <button
          onClick={handleAddToCart}
          className="flex-1 border py-2 rounded-lg hover:bg-amber-50 transition"
        >
          Add Cart
        </button>
      </div>
    </div>
  )
}


const Products = () => {
  const navigate = useNavigate()

  const products = [
    {
      id: 1,
      name: "Latte Coffee",
      price: "$1.60",
      rating: 4,
      description: "Smooth espresso blended with creamy milk.",
      image: "/cofeeimage1.jpg",
    },
    {
      id: 2,
      name: "Black Coffee",
      price: "$2.60",
      rating: 4,
      description: "Rich bold black coffee.",
      image: "/coffeeimage2.png",
    },
    {
      id: 3,
      name: "Morning Coffee",
      price: "$3.60",
      rating: 5,
      description: "Perfect morning blend.",
      image: "/coffeeimage3.png",
    },
    {
      id: 4,
      name: "Espresso Coffee",
      price: "$4.60",
      rating: 5,
      description: "Strong espresso shot.",
      image: "/coffeeimage4.png",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-gray-100 py-20 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((p) => (
          <ProductCard key={p.id} {...p} />
        ))}
      </div>

      <div className="max-w-7xl mx-auto mt-12 flex justify-end">
        <button
          onClick={() => navigate("/allProducts")}
          className="bg-amber-700 hover:bg-amber-800 text-white px-8 py-3 rounded-xl font-medium transition"
        >
          View More →
        </button>
      </div>
    </div>
  )
}

export default Products
