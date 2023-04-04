import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import Homepage from "./components/Homepage/Homepage";
import Shop from "./components/ShopPage/Shop";
import OfferItemPage from "./components/OfferItemPage/OfferItemPage";
import CartPage from "./components/CartPage/CartPage";
import { getOffer } from "./assets/offer-list";
import Header from "./components/Header/Header";

const offerList = getOffer();

const RouteSwitch = () => {

  const [cartItems, setCartItems] = useState([]); 

  const handleCart = (items) => {
    setCartItems([...items, ...cartItems]);
  }
  
  const clearCart = () => {
    setCartItems([]);
  }
    
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/shop" element={<Shop quantity={cartItems.length} offer={offerList}/>} />
        <Route path="/shop/:id" element={<OfferItemPage quantity={cartItems.length} handleCart={handleCart} offer={offerList}/>} />
        <Route path="/cart" element={<CartPage quantity={cartItems.length} cartItems={cartItems} handleCart={handleCart} clearCart={clearCart}/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;