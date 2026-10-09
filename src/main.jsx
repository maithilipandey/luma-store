import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import { CartProvider } from './context/CartContext';
import './styles.css';

function App() {
  return <BrowserRouter><CartProvider><Header/><Routes><Route path="/" element={<Home/>}/><Route path="/product/:id" element={<ProductDetail/>}/><Route path="/cart" element={<Cart/>}/><Route path="*" element={<Home/>}/></Routes><Footer/></CartProvider></BrowserRouter>;
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App/></React.StrictMode>);
