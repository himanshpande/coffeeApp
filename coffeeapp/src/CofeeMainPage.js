"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, ShoppingCart, Star } from "lucide-react"
import { useCart } from "./CartContext"

export default function CoffeeMainPage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const { addToCart } = useCart()

  const products = [
    {
      id: 1,
      name: "Ethiopian Yirgacheffe",
      price: "$24.99",
      description: "Bright citrus notes with floral undertones",
      image: "/Cofee1.webp",
      rating: 4.8,
    },
    {
      id: 2,
      name: "Colombian Supremo",
      price: "$22.99",
      description: "Rich, smooth flavor with caramel sweetness",
      image: "/Cofee2.avif",
      rating: 4.7,
    },
    {
      id: 3,
      name: "Sumatra Mandheling",
      price: "$26.99",
      description: "Full-bodied with earthy, herbal notes",
      image: "/Cofee3.png",
      rating: 4.9,
    },
    {
      id: 4,
      name: "Costa Rican Tarrazu",
      price: "$23.99",
      description: "Clean, bright acidity with chocolate hints",
      image: "/costa-rican-coffee-beans.png",
      rating: 4.6,
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % products.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + products.length) % products.length)
  }

  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(nextSlide, 5000)
    return () => clearInterval(interval)
  }, [isAutoPlaying, currentSlide])

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-900 via-amber-950 to-stone-900">
      <div
        className="relative h-[600px] md:h-[700px] w-full"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        {products.map((product, index) => (
          <div
            key={product.id}
            className={`absolute inset-0 transition-all duration-700 ${index === currentSlide ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
          >
            <div className="absolute inset-0">
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                className="w-full h-full object-cover opacity-40"
              />

              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
            </div>

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center max-w-4xl px-6 space-y-8">

                <h2 className="text-3xl md:text-7xl font-bold text-white mb-6 drop-shadow-2xl">
                  {product.name}
                </h2>

                <p className="text-xl md:text-2xl text-amber-100 leading-relaxed max-w-2xl mx-auto drop-shadow-lg">
                  {product.description}
                </p>


                <div className="pt-4">
                  <div className="flex items-baseline justify-center gap-3 mb-8">
                    <span className="text-6xl md:text-5xl font-bold text-amber-400 drop-shadow-2xl">{product.price}</span>
                    <span className="text-2xl text-amber-200/90">per 12oz bag</span>
                  </div>

                  {/* Buy Now Button */}
                  <button
                    onClick={() => addToCart(product)}
                    className="group px-5 py-2 bg-gradient-to-r from-amber-600 to-amber-500 text-white rounded-xl font-semibold text-sm transition-all hover:from-amber-500 hover:to-amber-400 hover:shadow-xl hover:shadow-amber-500/40 hover:-translate-y-0.5 flex items-center justify-center gap-2 mx-auto"
                  >
                    <ShoppingCart className="h-4 w-4 transition-transform group-hover:scale-110" />
                    Add to Cart
                  </button>

                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-8 top-1/2 -translate-y-1/2 h-16 w-16 bg-amber-500/90 hover:bg-amber-400 rounded-full shadow-2xl flex items-center justify-center transition-all hover:scale-110 z-10 border-2 border-amber-300 backdrop-blur-sm"
          aria-label="Previous product"
        >
          <ChevronLeft className="h-8 w-8 text-white" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-8 top-1/2 -translate-y-1/2 h-16 w-16 bg-amber-500/90 hover:bg-amber-400 rounded-full shadow-2xl flex items-center justify-center transition-all hover:scale-110 z-10 border-2 border-amber-300 backdrop-blur-sm"
          aria-label="Next product"
        >
          <ChevronRight className="h-8 w-8 text-white" />
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-3 z-10">
          {products.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-3 rounded-full transition-all ${index === currentSlide
                  ? "w-12 bg-amber-400 shadow-lg shadow-amber-400/50"
                  : "w-3 bg-white/50 hover:bg-white/70"
                }`}
              aria-label={`Go to product ${index + 1}`}
            />
          ))}
        </div>
      </div>

    </div>
  )
}