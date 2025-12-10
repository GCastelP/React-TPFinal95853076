// src/pages/HomePage.jsx
// Página de inicio que muestra una lista de productos disponibles
// Utiliza el componente ProductList para renderizar los productos
// Usa React y React-Bootstrap para el diseño de la página. 

import React from "react";
import ProductList from "../components/ProductList";
import { Container } from "react-bootstrap";


const HomePage = () => {
  return (
    <>
        <Container>
            <h1 className="my-4">Nuestros productos</h1>            
            {/* Aquí es donde se usa el componente ProductList para mostrar todos los productos.*/}
            <ProductList />
        </Container>
    </>
  );
};

export default HomePage
