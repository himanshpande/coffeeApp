import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './Layout';  
import CoffeeMainPage from './CofeeMainPage';
import About from './About';
import Products from './ProductFile';
import AllProducts from './AllProducts';
import CoffeePage from './Cofee';
import ContactPage from './Contact';
import Cart from './Cart';
import Checkout from './checkout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<CoffeeMainPage/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/products" element={<Products/>}/>
          <Route path="/allProducts" element={<AllProducts/>}/>
          <Route path='/coffeePage' element={<CoffeePage/>}/>
          <Route path='/contact' element={<ContactPage/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/checkout' element={<Checkout/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
