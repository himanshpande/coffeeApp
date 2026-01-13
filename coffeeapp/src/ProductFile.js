import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useCart } from "./CartContext"

/* ---------------- STAR RATING ---------------- */
const StarRating = ({ rating = 4 }) => {
  return (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, i) => (
        <span
          key={i}
          className={`text-sm ${
            i < rating ? "text-amber-500" : "text-stone-300"
          }`}
        >
          ★
        </span>
      ))}
    </div>
  )
}

/* ---------------- PRODUCT CARD ---------------- */
export const ProductCard = ({
  id,
  name,
  price,
  rating,
  description,
  image,
  count,
}) => {
  const [isFavorited, setIsFavorited] = useState(false)
  const { addToCart } = useCart()

  const handleAddToCart = () => {
    addToCart({ id, name, price, rating, description, image, count })
  }

  return (
    <div
      className="group relative bg-white rounded-2xl p-6
      border border-stone-200
      shadow-sm hover:shadow-lg transition"
    >
      {/* Favorite */}
      <button
        onClick={() => setIsFavorited(!isFavorited)}
        className={`absolute top-4 right-4 w-9 h-9 rounded-full
        flex items-center justify-center text-lg transition
        ${
          isFavorited
            ? "bg-red-500 text-white"
            : "bg-white text-stone-400 hover:text-red-400 border border-stone-200"
        }`}
      >
        ♥
      </button>

      {/* Image */}
      <div className="mb-6 flex justify-center">
        <div className="w-40 h-28 rounded-xl overflow-hidden bg-[#FBF7ED] border border-stone-200">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </div>

      {/* Rating */}
      <div className="flex justify-center mb-3">
        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#FBF7ED] border border-stone-200">
          <StarRating rating={rating} />
          <span className="text-xs text-stone-500">{rating}.0</span>
        </div>
      </div>

      {/* Content */}
      <h3 className="text-lg font-semibold text-center text-[#3E2F26]">
        {name}
      </h3>

      <p className="text-center text-amber-600 font-semibold">
        {price}
      </p>

      <p className="text-sm text-stone-500 text-center mb-6 line-clamp-2">
        {description}
      </p>

      {/* Buttons */}
      <div className="flex gap-3">
        <button className="flex-1 bg-amber-800 text-amber-50 hover:bg-amber-  500  py-2 rounded-lg transition">
          Shop Now
        </button>
        <button
          onClick={handleAddToCart}
          className="flex-1 border border-stone-300 text-stone-700 py-2 rounded-lg hover:bg-[#FBF7ED] transition"
        >
          Add Cart
        </button>
      </div>
    </div>
  )
}

/* ---------------- PRODUCTS ---------------- */
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
      description: "Perfect morning blend to start your day.",
      image: "/coffeeimage3.png",
    },
    {
      id: 4,
      name: "Espresso Coffee",
      price: "$4.60",
      rating: 5,
      description: "Strong espresso shot with intense flavor.",
      image: "/coffeeimage4.png",
    },
  ]

  return (
    <section className="min-h-screen bg-gradient-to-b from-[#FBF7ED] to-[#F1EBDD] py-20 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((p) => (
            <ProductCard key={p.id} {...p} />
          ))}
        </div>

        {/* View More */}
        <div className="mt-14 flex justify-end">
          <button
            onClick={() => navigate("/allProducts")}
            className="bg-amber-800 hover:bg-amber-500 text-white px-8 py-3 rounded-xl font-medium transition"
          >
            View More →
          </button>
        </div>

      </div>
    </section>
  )
}

export default Products
