import React, { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import ProductCard from './ProductCard';

const ProductList = ({ category = null }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    const url = category
      ? `https://fakestoreapi.com/products/category/${category}`
      : 'https://fakestoreapi.com/products';

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
  }, [category]);

  if (loading) return <div className="text-center">Cargando productos...</div>;
  if (error) return <div className="text-danger text-center">Error: {error}</div>;

  return (
    <Row>
      {products.length > 0 ? (
        products.map((product) => (
          <Col md={4} key={product.id} className="mb-4">
            <ProductCard product={product} agregarAlCarrito={() => alert(`Agregado: ${product.title}`)} />
          </Col>
        ))
      ) : (
        <Col>No se encontraron productos.</Col>
      )}
    </Row>
  );
};

export default ProductList;