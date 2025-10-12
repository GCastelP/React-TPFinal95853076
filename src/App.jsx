import { useState } from 'react'
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import Header from './components/Header'
import Footer from './components/Footer';
import ProductCard from './components/ProductCard';
import ProductList from './components/ProductList';

// import './App.css'

function App() {
  

  return (
    <>
        <Router>
          <Header />
          <Routes>            
            <Route path="/" element={<ProductList />} />
            <Route path="/ofertas" element={<ProductList category="electronics" />} />
            <Route path="/virales" element={<ProductList category="jewelery" />} />
            <Route path="/administracion" element={<div>Página de Administración</div>} />
            <Route path="/carrito" element={<div>Página del Carrito</div>} />
          </Routes>
          <Footer />
        </Router> 
        
      
    </>
  )
}

export default App
