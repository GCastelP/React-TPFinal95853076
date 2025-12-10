// src/pages/Virales.jsx
// Página de Ventas Virales que muestra productos de la categoría "jewelery"
// Utiliza el componente ProductList para renderizar los productos filtrados
// Usa React para el diseño de la página. 

import React from 'react'
import ProductList from '../components/ProductList';


const Virales = () => {
  return (
    <>  
      <div className="container">
        <h1>Ventas Virales</h1>
            <ProductList category="jewelery" />
      </div>
    </>
  )
}

export default Virales