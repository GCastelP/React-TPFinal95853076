import React from 'react';
import { Container, Row, Col, Image, Button, Form, Card } from 'react-bootstrap';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { FaTrashAlt } from 'react-icons/fa'; // Icono de la papelera

const CartPage = () => {
    const { cartItems, updateQuantity, removeFromCart, getCartTotal } = useCart();
    const { isLoggedIn } = useAuth();
    const navigate = useNavigate();

    // Función para manejar el cambio en el input de cantidad
    const handleQuantityChange = (productId, event) => {
        const newQuantity = parseInt(event.target.value, 10);
        updateQuantity(productId, newQuantity);
    };

    // Si el carrito está vacío, mostramos un mensaje
    if (cartItems.length === 0) {
        return (
            <Container className="text-center my-5">
                <h2>Tu carrito está vacío</h2>
                <p>Parece que no has añadido ningún producto todavía.</p>
                <Button variant="primary" onClick={() => navigate('/')}>
                    Seguir Comprando
                </Button>
            </Container>
        );
    }

    // Si el carrito tiene productos, los mostramos
    return (
        <Container>
            <h1 className="my-4">Tu Carrito de Compras</h1>
            <Row>
                <Col md={8}>
                    {cartItems.map(item => (
                        <Card key={item.id} className="mb-3 p-3">
                            <Row className="align-items-center">
                                <Col xs={4} md={2}>
                                    <Image src={item.image} alt={item.title} fluid rounded />
                                </Col>
                                <Col xs={8} md={4}>
                                    <h5>{item.title}</h5>
                                    <p>${item.price.toFixed(2)}</p>
                                </Col>
                                <Col xs={6} md={3}>
                                    <Form.Group controlId={`quantity-${item.id}`}>
                                        <Form.Label>Cantidad</Form.Label>
                                        <Form.Control
                                            type="number"
                                            value={item.quantity}
                                            onChange={(e) => handleQuantityChange(item.id, e)}
                                            min="1"
                                        />
                                    </Form.Group>
                                </Col>
                                <Col xs={6} md={3} className="text-end">
                                    <h5>${(item.price * item.quantity).toFixed(2)}</h5>
                                    <Button
                                        variant="outline-danger"
                                        size="sm"
                                        onClick={() => removeFromCart(item.id)}
                                    >
                                        <FaTrashAlt /> Eliminar
                                    </Button>
                                </Col>
                            </Row>
                        </Card>
                    ))}
                </Col>
                <Col md={4}>
                    <Card>
                        <Card.Body>
                            <Card.Title as="h4">Resumen del Pedido</Card.Title>
                            <hr />
                            <h5>Total: ${getCartTotal().toFixed(2)}</h5>
                            
                            {/* Renderizado condicional del botón de pago */}
                            {isLoggedIn ? (
                                <Button variant="success" className="w-100 mt-3">
                                    Proceder al Pago
                                </Button>
                            ) : (
                                <div className="text-center mt-3">
                                    <p>Por favor, inicia sesión para proceder con la compra.</p>
                                    <Button variant="primary" onClick={() => navigate('/login')}>
                                        Iniciar Sesión
                                    </Button>
                                </div>
                            )}

                            <Button variant="primary" className="w-100 mt-2" onClick={() => navigate('/')}>
                                Seguir Comprando
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default CartPage;