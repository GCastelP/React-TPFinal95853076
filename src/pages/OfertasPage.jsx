// src/pages/OfertasPage.jsx
// Página de Ofertas que muestra productos en oferta o de una categoría específica
// Utiliza el componente ProductList para renderizar los productos filtrados
// Usa React y React-Bootstrap para el diseño de la página.

import React from 'react'
import ProductList from '../components/ProductList'
import { Container } from 'react-bootstrap'

const OfertasPage = () => {
  return (
    <>
        <Container>
            <h1 className="my-4">Ofertas en Electronica</h1>
            {/* Puedes reutilizar ProductList pasándole una categoría específica */}
            <ProductList category = "electronics" />
        </Container>
    </>
  )
}

export default OfertasPage