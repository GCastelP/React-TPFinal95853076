// Este es un componente contenedor o "inteligente".
// Su responsabilidad es gestionar la lógica: obtener los datos de una API,
// manejar el estado de carga y luego renderizar una lista de componentes ProductCard. 

import React, { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import ProductCard from './ProductCard';

const ProductList = ({ category = null }) => {
  // 'useState' para guardar la lista de productos y el estado de carga
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 'useEffect' para ejecutar código cuando el componente se monta o cuando la 'category' cambia.
  useEffect(() => {
    setLoading(true);
    setError(null);

    const url = category
      ? `https://fakestoreapi.com/products/category/${category}`
      : 'https://fakestoreapi.com/products';

    // Llama a la API para obtener los datos
    fetch(url)
      .then((response) => {
        if (!response.ok) throw new Error('Failed to fetch');
        return response.json();
      })
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error:', err);
        setError(err.message);
        setLoading(false);
      });
  }, [category]); // El array de dependencias hace que se ejecute de nuevo si 'category' cambia

   // Esta función se pasará a cada ProductCard. Por ahora, solo muestra una alerta.
    const handleAgregarAlCarrito = (product) => {
        alert(`Producto ${product.title} agregado al carrito`);
    };

    // Mientras los datos se cargan, muestra un mensaje de carga

  if (loading) return <div className="text-center">Cargando productos...</div>;
  if (error) return <div className="text-danger text-center">Error: {error}</div>;

  // Una vez cargados, mapea el array de productos para renderizar un ProductCard por cada uno.
  return (
    <Row>
      {products.length > 0 ? (
        products.map((product) => (
          <Col md={4} key={product.id} className="mb-4">
            {/* 
                Aquí está la integración:
                  - Pasa el objeto 'product' a la prop 'product' de ProductCard.
                  - Pasa la función 'handleAgregarAlCarrito' a la prop 'agregarAlCarrito' de ProductCard.
            */}
            <ProductCard product={product} agregarAlCarrito={handleAgregarAlCarrito} />
          </Col>
        ))
      ) : (
        <Col>No se encontraron productos.</Col>
      )}
    </Row>
  );
};

export default ProductList;