import { ProductCard } from "./ProductFile"


const AllProducts = () => {

  const allProducts = [
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
      image: "/Cofee1.webp",
    },
    {
      id: 3,
      name: "Morning Coffee",
      price: "$3.60",
      rating: 5,
      description: "Perfect morning blend.",
      image: "/Cofee2.avif",
    },
    {
      id: 4,
      name: "Espresso Coffee",
      price: "$4.60",
      rating: 5,
      description: "Strong espresso shot.",
      image: "/Cofee3.png",
    },
    {
      id: 5,
      name: "Cappuccino",
      price: "$5.20",
      rating: 4,
      description: "Classic Italian coffee with steamed milk foam.",
      image: "/cofeenew.png",
    },
    {
      id: 6,
      name: "Americano",
      price: "$6.50",
      rating: 4,
      description: "Espresso with hot water for a smooth taste.",
      image: "/cofeemainpage.png",
    },
    {
      id: 7,
      name: "Mocha Coffee",
      price: "$8.90",
      rating: 5,
      description: "Rich chocolate and espresso combination.",
      image: "/cofeeimage1.jpg",
    },
    {
      id: 8,
      name: "Macchiato",
      price: "$7.80",
      rating: 4,
      description: "Espresso with a dollop of steamed milk.",
      image: "/Cofee1.webp",
    },
    {
      id: 9,
      name: "Flat White",
      price: "$8.50",
      rating: 5,
      description: "Double espresso with microfoam milk.",
      image: "/Cofee2.avif",
    },
    {
      id: 10,
      name: "Cortado",
      price: "$7.40",
      rating: 4,
      description: "Equal parts espresso and warm milk.",
      image: "/Cofee3.png",
    },
    {
      id: 11,
      name: "Affogato",
      price: "$9.20",
      rating: 5,
      description: "Espresso poured over vanilla ice cream.",
      image: "/cofeenew.png",
    },
    {
      id: 12,
      name: "Irish Coffee",
      price: "$10.50",
      rating: 4,
      description: "Coffee with Irish whiskey and cream.",
      image: "/cofeemainpage.png",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-gray-100 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-amber-900 mb-2 text-center">
          All Products
        </h1>
        <p className="text-gray-600 text-center mb-12">
          Discover our complete collection of premium coffee
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {allProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default AllProducts

