import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HashRouter } from 'react-router-dom';
import { useState } from 'react';
import Homepage from "./components/Homepage/Homepage";
import Shop from "./components/ShopPage/Shop";
import OfferItemPage from "./components/OfferItemPage/OfferItemPage";
import CartPage from "./components/CartPage/CartPage";

const RouteSwitch = () => {

  const [cartItems, setCartItems] = useState([]); 

  const handleCart = (items) => {
    setCartItems([...items, ...cartItems]);
  }
  
  const clearCart = () => {
    setCartItems([]);
  }
    
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/shop" element={<Shop quantity={cartItems.length}/>} />
        <Route path="/shop/:id" element={<OfferItemPage quantity={cartItems.length} handleCart={handleCart}/>} />
        <Route path="/cart" element={<CartPage quantity={cartItems.length} cartItems={cartItems} handleCart={handleCart} clearCart={clearCart}/>} />
      </Routes>
    </HashRouter>
  );
};

export default RouteSwitch;