
import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';


import Home from './../pages/Home';
import Products from '../pages/Products';
import ProductDetails from '../pages/ProductDetails';
import SearchResultList from './../pages/SearchResultList';
import Login from './../pages/Login';
import Register from './../pages/Register';
import ThankYou from '../pages/ThankYou';
import About from '../pages/About';
import Cart from '../pages/Cart';
import CheckOut from '../pages/CheckOut';

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to='/home' />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/:id" element={<ProductDetails />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path='/thank-you' element={<ThankYou />}/>
      <Route path="/products/search" element={<SearchResultList />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkouts" element={<CheckOut />}/>
    </Routes>
  )
}

export default Routers;