// src/components/ProductForm.jsx
// Componente de formulario para añadir o editar productos en el panel de administración
// Utiliza React-Bootstrap para el diseño del formulario
// y maneja el estado del formulario con useState y useEffect.
// Recibe un producto opcional para editar y una función para guardar el producto.


import React, { useState, useEffect } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

// El componente recibe un producto opcional (para editar) y una función para guardar
const ProductForm = ({ productToEdit, onSaveProduct }) => {
    const [product, setProduct] = useState({
        title: '',
        price: '',
        description: '',
        category: '',
        image: ''
    });

    // Si hay un producto para editar, carga sus datos en el formulario
    useEffect(() => {
        if (productToEdit) {
            setProduct(productToEdit);
        }
    }, [productToEdit]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Validación simple
        if (!product.title || !product.price) {
            alert('Por favor, completa el título y el precio.');
            return;
        }
        onSaveProduct(product);
    };

    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <Row>
                    <Col md={6}>
                        <Form.Group className="mb-3" controlId="formTitle">
                            <Form.Label>Título</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Nombre del producto"
                                name="title"
                                value={product.title}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group className="mb-3" controlId="formPrice">
                            <Form.Label>Precio</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="0.00"
                                name="price"
                                value={product.price}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                    </Col>
                </Row>
                
                <Form.Group className="mb-3" controlId="formCategory">
                    <Form.Label>Categoría</Form.Label>
                    <Form.Select name="category" value={product.category} onChange={handleChange} required>
                        <option value="">Selecciona una categoría</option>
                        <option value="electronics">Electrónica</option>
                        <option value="jewelery">Joyería</option>
                        <option value="men's clothing">Ropa de Hombre</option>
                        <option value="women's clothing">Ropa de Mujer</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formDescription">
                    <Form.Label>Descripción</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        name="description"
                        value={product.description}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formImage">
                    <Form.Label>URL de la Imagen</Form.Label>
                    <Form.Control
                        type="url"
                        placeholder="https://ejemplo.com/imagen.jpg"
                        name="image"
                        value={product.image}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Button variant="primary" type="submit">
                    {productToEdit ? 'Actualizar Producto' : 'Añadir Producto'}
                </Button>
            </Form>
        </Container>
    );
};

export default ProductForm;