// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Button, Badge } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaShoppingCart } from 'react-icons/fa'; // Asumiendo que usas react-icons
import logo from "../assets/logo.png";

// Hooks de Contexto y Navegación
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    // Obtenemos los datos y funciones de los contextos
    const { cartItems } = useCart();
    const { isLoggedIn, logout } = useAuth();
    const navigate = useNavigate();

    // Calcula el número total de artículos en el carrito
    const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

    // Función para manejar el cierre de sesión
    const handleLogout = () => {
        logout(); // Llama a la función del AuthContext para desloguear
        navigate('/login'); // Redirige al usuario a la página de login
    };

    return (
        <Navbar bg="warning" variant="light" expand="lg" className="mb-3 shadow-sm">
            <Container>
                <Navbar.Brand as={Link} to="/" className="d-flex align-items-center text-dark fw-bold">
                    <img
                        src={logo}
                        alt="Online Shop Logo"
                        className="me-3"
                        style={{ width: '100px', height: 'auto' }}
                    />
                </Navbar.Brand>
                <strong><span>Productos de las mejores marcas</span></strong>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto align-items-center">
                        <Nav.Link as={Link} to="/" className="me-3 text-dark">Home</Nav.Link>
                        <Nav.Link as={Link} to="/ofertas" className="me-3 text-dark">Ofertas</Nav.Link>
                        <Nav.Link as={Link} to="/virales" className="me-3 text-dark">Marcas virales</Nav.Link>

                        <div className="d-flex align-items-center">
                            {/* Renderizado condicional: muestra opciones diferentes si está logueado o no */}
                            {isLoggedIn ? (
                                <>
                                    <Button variant="outline-dark" as={Link} to="/administracion" className="ms-2 fw-bold">
                                        Administración
                                    </Button>
                                    <Button variant="outline-secondary" onClick={handleLogout} className="ms-2">
                                        Cerrar Sesión
                                    </Button>
                                </>
                            ) : (
                                <Button variant="outline-dark" as={Link} to="/login" className="ms-2 fw-bold">
                                    Iniciar Sesión
                                </Button>
                            )}

                            {/* El carrito siempre es visible, pero el badge solo muestra si hay items */}
                            <div className="ms-3 position-relative">
                                <Link to="/carrito" className="text-dark carrito-icon">
                                    <FaShoppingCart size={24} />
                                </Link>
                                {totalItems > 0 && (
                                    <Badge pill bg="danger" style={{ position: 'absolute', top: '-8px', right: '-12px', fontSize: '0.7em' }}>
                                        {totalItems}
                                    </Badge>
                                )}
                            </div>
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;