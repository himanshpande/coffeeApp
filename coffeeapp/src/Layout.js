import React from 'react'
import Navbar from './NavBar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import About from './About'
import Products from './ProductFile'
import CoffeePage from './Cofee'

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      
     
        <Navbar />
      

      <main className="flex-1 w-full">
        <Outlet />
        {/* <About/> */}
        {/* <Products/>
        <CoffeePage/> */}
      </main>

     
        <Footer />
      
    </div>
  )
}

export default Layout
