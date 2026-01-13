"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Menu, X, ShoppingCart, User, Coffee } from 'lucide-react'
import { useCart } from "./CartContext"

export default function CoffeeNavbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const navigate = useNavigate()
  const { cartItems } = useCart()
  const handleOrderNow=()=>{
    navigate("/products")
  }

  const navLinks = [
    { name: "About", href: "/about" },
    { name: "Coffee", href: "/coffeePage" },
    { name: "Shop", href: "/products" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-amber-200 bg-[#32271d] backdrop-blur shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center gap-2 transition-transform hover:scale-105">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-800 shadow-md">
                <Coffee className="h-6 w-6 text-amber-50" />
              </div>
              <span className="text-xl font-bold tracking-tight text-[#e1d5ce]">BrewHouse</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative text-sm font-medium text-[#e1d5ce] transition-colors hover:text-amber-700 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-amber-700 after:transition-all hover:after:w-full"
              >
                {link.name}
              </a>
            ))}
          </div>

          
          <div className="flex items-center gap-2">
            <button
              className="hidden sm:flex h-10 w-10 items-center justify-center rounded-md text-[#e1d5ce] transition-all hover:bg-amber-100 hover:text-amber-700"
              aria-label="User account"
            >
              <User className="h-5 w-5" />
            </button>
            <button
              onClick={() => navigate("/cart")}
              className="hidden sm:flex relative h-10 w-10 items-center justify-center rounded-md text-amber-900 transition-all hover:bg-amber-100 hover:text-amber-700"
              aria-label="Shopping cart"
            >
              <ShoppingCart className="h-5 w-5" />
              {cartItems.length > 0 && (
                <span className="absolute -top-1 -right-1 bg  -[#e1d5ce] text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItems.length}
                </span>
              )}
            </button>
            <button
              className="hidden sm:flex px-4 py-2 rounded-md bg-amber-700 text-amber-50 text-sm font-medium transition-all hover:bg-amber-700 shadow-md"onClick={handleOrderNow}
            >
              Order Now
            </button>

            <button
              className="flex md:hidden h-10 w-10 items-center justify-center rounded-md text-amber-900 transition-colors hover:bg-amber-100"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

   
      {isMobileMenuOpen && (
        <div className="border-t border-amber-200 bg-amber-50 md:hidden">
          <div className="space-y-1 px-4 pb-3 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block rounded-md px-3 py-2 text-base font-medium text-amber-900 transition-colors hover:bg-amber-100 hover:text-amber-700"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="flex items-center gap-2 px-3 pt-4">
              <button
                className="flex-1 px-4 py-2 rounded-md border border-amber-300 text-sm font-medium text-amber-900 hover:bg-amber-100 hover:text-amber-700 bg-transparent"
              >
                <User className="inline mr-2 h-4 w-4" />
                Account
              </button>
              <button
                onClick={() => {
                  navigate("/cart")
                  setIsMobileMenuOpen(false)
                }}
                className="flex-1 px-4 py-2 rounded-md border border-amber-300 text-sm font-medium text-amber-900 hover:bg-amber-100 hover:text-amber-700 bg-transparent relative"
              >
                <ShoppingCart className="inline mr-2 h-4 w-4" />
                Cart
                {cartItems.length > 0 && (
                  <span className="absolute top-1 right-1 bg-red-500 text-white text-xs font-bold rounded-full h-4 w-4 flex items-center justify-center">
                    {cartItems.length}
                  </span>
                )}
              </button>
            </div>
            <button
              className="mt-2 w-full px-4 py-2 rounded-md bg-amber-800 text-amber-50 text-sm font-medium hover:bg-amber-700 shadow-md" onClick={handleOrderNow}
            >
              Order Now
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}