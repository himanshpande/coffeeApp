import Navbar from './NavBar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'


const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">


      <Navbar />


      <main className="flex-1 w-full">
        <Outlet />
      </main>


      <Footer />

    </div>
  )
}

export default Layout
