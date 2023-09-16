import React from 'react'
import Navbar from './components/Navbar'
import ProductCard from './components/ProductCard'
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cartpagee from './components/Cartpagee';


export default function App() {
  return (
    <BrowserRouter>
      <div>
        < Navbar />
        <Routes>
          <Route exact path="/" element={<ProductCard />} />

          <Route path="/cart" element={<Cartpagee />} />

        </Routes>
      </div>
    </BrowserRouter>
  )
}
