// src/pages/AdminPanel.jsx
// Página de Panel de Administración para gestionar productos
// Permite añadir, editar y eliminar productos utilizando el contexto de productos
// Utiliza React-Bootstrap para el diseño y modales para formularios    
// Importa el componente ProductForm para el formulario de productos
// y el hook useProduct para acceder a las funciones del contexto de productos.
// Usa React y Hooks.

import React, { useState } from 'react';
import { Container, Button, Row, Col, Card, Table, Modal, Alert } from 'react-bootstrap';
import { useProduct } from '../context/ProductContext';
import ProductForm from '../components/ProductForm';

const AdminPanel = () => {
    // 1. Obtenemos los datos y funciones del contexto de productos
    const { products, addProduct, updateProduct, deleteProduct } = useProduct();

    // 2. Estados para manejar el modal de añadir/editar
    const [showModal, setShowModal] = useState(false);
    const [editingProduct, setEditingProduct] = useState(null);
    
    // 3. Función para manejar el guardado (tanto para añadir como para actualizar)    
    const handleSaveProduct = (productData) => {
        if (editingProduct) {
            // Si hay un producto en edición, lo actualizamos
            updateProduct(editingProduct.id, productData);
        } else {
            // Si no, es un producto nuevo y lo añadimos
            addProduct(productData);
        }
        handleCloseModal(); // Cerramos el modal después de guardar
    };

    // 4. Función para abrir el modal en modo edición
    const handleEditClick = (product) => {
        setEditingProduct(product);
        setShowModal(true);
    };

    // 5. Función para manejar la eliminación con confirmación
    const handleDeleteClick = (id) => {
        if (window.confirm('¿Estás seguro de que quieres eliminar este producto?')) {
            deleteProduct(id);
        }
    };
    
    // 6. Función para cerrar el modal y resetear el estado de edición
    const handleCloseModal = () => {
        setShowModal(false);
        setEditingProduct(null);
    };

    return (
        <Container fluid>
            {/* Cabecera con el título y el botón de añadir */}
            <Row className="my-4 align-items-center">
                <Col>
                    <h1>Gestión de Productos</h1>
                </Col>
                <Col className="text-end">
                    <Button variant="success" onClick={() => setShowModal(true)}>
                        Añadir Nuevo Producto
                    </Button>
                </Col>
            </Row>

            {/* Tabla de productos */}
            <Row>
                <Col>
                    <Card>
                        <Card.Header><h4>Lista de Productos</h4></Card.Header>
                        <Card.Body>
                            {products.length === 0 ? (
                                <Alert variant="info">
                                    No hay productos en la tienda. ¡Añade tu primer producto usando el botón de arriba!
                                </Alert>
                            ) : (
                                <Table striped bordered hover responsive>
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Título</th>
                                            <th>Precio</th>
                                            <th>Categoría</th>
                                            <th>Acciones</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {products.map((product) => (
                                            <tr key={product.id}>
                                                <td>{product.id}</td>                                            
                                                <td>
                                                    <img src={product.image} alt={product.title} style={{ width: '50px', height: '50px', objectFit: 'contain' }} />
                                                </td>
                                                <td>{product.title}</td>
                                                <td>${product.price}</td>
                                                <td>{product.category}</td>
                                                <td>
                                                    <Button variant="warning" size="sm" className="me-2" onClick={() => handleEditClick(product)}>
                                                        Editar
                                                    </Button>
                                                    <Button variant="danger" size="sm" onClick={() => handleDeleteClick(product.id,  product.title)}>
                                                        Eliminar
                                                    </Button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            )}
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            {/* Modal para el formulario de Añadir/Editar Producto */}
            <Modal show={showModal} onHide={handleCloseModal} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>{editingProduct ? 'Editar Producto' : 'Añadir Nuevo Producto'}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ProductForm
                        productToEdit={editingProduct}
                        onSaveProduct={handleSaveProduct}
                    />
                </Modal.Body>
            </Modal>
        </Container>
    );
};

export default AdminPanel;