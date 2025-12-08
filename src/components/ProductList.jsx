// Este es un componente contenedor o "inteligente".
// Su responsabilidad es gestionar la lógica: obtener los datos de una API,

import React, { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import ProductCard from './ProductCard';

const ProductList = ({ category = null }) => {
  // 1. 'useState' para guardar la lista de productos y el estado de carga
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 2. 'useEffect' para ejecutar código cuando el componente se monta o cuando la 'category' cambia.
  useEffect(() => {
    setLoading(true);
    setError(null);

    const url = category
      ? `https://fakestoreapi.com/products/category/${category}`
      : 'https://fakestoreapi.com/products';

    // 3. Llama a la API para obtener los datos
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

    // 4. Mientras los datos se cargan, muestra un mensaje de carga

  if (loading) return <div className="text-center">Cargando productos...</div>;
  if (error) return <div className="text-danger text-center">Error: {error}</div>;

  // 5. Una vez cargados, mapea el array de productos y pasa la prop product para renderizar un ProductCard por cada uno.
  return (
    <Row>
      {products.length > 0 ? (
        products.map((product) => (
          <Col md={4} key={product.id} className="mb-4">
            {/* 
                6. MODIFICACIÓN CLAVE:
                    Ahora solo pasamos la prop 'product'. Ya no necesitamos pasar
                    ninguna función del carrito, ya que ProductCard se encarga de eso por sí mismo.
            */}
            <ProductCard product={product} />
          </Col>
        ))
      ) : (
        <Col>No se encontraron productos.</Col>
      )}
    </Row>
  );
};

export default ProductList;