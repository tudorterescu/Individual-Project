import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from "./components/Navbar";
import { Jewelleryshop } from './components/Jewelleryshop';
import { Apparel } from './components/Apparel';
import { HomeAndGarden } from './components/HomeAndGarden';
import Cart from './components/Cart';
import Checkout from './components/checkout';

function App() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const initialCart = JSON.parse(sessionStorage.getItem('cart')) || [];
    setCart(initialCart);
  }, []);

  const updateCart = (updatedCart) => {
    setCart(updatedCart);
    sessionStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  return (
    <div className="app">
      <Router>
        <Navbar />
        <Routes>
          
          <Route path='/JewelleryShop' element={<Jewelleryshop cart={cart} updateCart={updateCart} />} />

          <Route path='/Cart' element={<Cart cartItems={cart} updateCart={updateCart} />} />

          <Route path='/Apparel' element={<Apparel cart={cart} updateCart={updateCart} />} />

          <Route path='/HomeAndGarden' element={<HomeAndGarden cart={cart} updateCart={updateCart} />} />

          <Route path="/checkout" element={<Checkout cartItems={cart} updateCart={updateCart} />} />


        </Routes>
      </Router>
    </div>
  );
}

export default App;
