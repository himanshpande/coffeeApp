import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, ShoppingCart } from "lucide-react"
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
      description: "Bright citrus notes with delicate floral aromas",
      image: "/CofeeImagenew.png",
    },
    {
      id: 2,
      name: "Colombian Supremo",
      price: "$22.99",
      description: "Smooth caramel sweetness with rich body",
      image: "/Cofee2.avif",
    },
    {
      id: 3,
      name: "Sumatra Mandheling",
      price: "$26.99",
      description: "Earthy, bold flavor with deep complexity",
      image: "/Cofee3.png",
    },
  ]

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % products.length)

  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + products.length) % products.length)

  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(nextSlide, 4500)
    return () => clearInterval(interval)
  }, [isAutoPlaying, currentSlide])

  return (
    <section className="relative w-full h-[580px] md:h-[700px] overflow-hidden bg-[#1F140D]">
      {products.map((product, index) => (
        <div
          key={product.id}
          className={`absolute inset-0 transition-opacity duration-700 ${index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
        >
          <img
            src={product.image}
            alt={product.name}
            className="absolute inset-0 w-full h-full object-cover opacity-50"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />

          <div className="relative h-full max-w-7xl mx-auto px-6 flex items-center">
            <div className="max-w-xl space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold text-[#F5E6D3] leading-tight">
                {product.name}
              </h1>

              <p className="text-[#E6D5C3] text-lg">
                {product.description}
              </p>

              <div className="flex items-center gap-4">
                <span className="text-3xl font-semibold text-amber-400">
                  {product.price}
                </span>
                <span className="text-sm text-[#C4A484]">
                  12oz premium beans
                </span>
              </div>

              <button
                onClick={() => addToCart(product)}
                className="inline-flex items-center gap-2 px-6 py-3 
                bg-amber-600 hover:bg-amber-500
                text-white text-sm font-semibold
                rounded-full transition shadow-lg"
              >
                <ShoppingCart className="w-4 h-4" />
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ))}

      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2
        w-10 h-10 rounded-full bg-white/20 hover:bg-white/30
        flex items-center justify-center backdrop-blur transition"
      >
        <ChevronLeft className="text-white w-5 h-5" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2
        w-10 h-10 rounded-full bg-white/20 hover:bg-white/30
        flex items-center justify-center backdrop-blur transition"
      >
        <ChevronRight className="text-white w-5 h-5" />
      </button>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {products.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all ${index === currentSlide
                ? "w-8 bg-amber-400"
                : "w-2 bg-white/40"
              }`}
          />
        ))}
      </div>
    </section>
  )
}
