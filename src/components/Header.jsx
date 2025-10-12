import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import logo from "../assets/logo.png";


const Header = () => {
  return (
    <>  
        <Navbar bg="warning" variant="light" expand="lg" className="mb-3 ">
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
                
                {/* Botón hamburguesa */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                {/* Contenedor colapsable */}
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto align-items-center">
                        <Nav.Link as={Link} to="/" className="me-3 text-dark">
                            Home
                        </Nav.Link>
                        <Nav.Link as={Link} to="/ofertas" className="me-3 text-dark">
                            Ofertas
                        </Nav.Link>
                        <Nav.Link as={Link} to="/virales" className="me-3 text-dark">
                            Marcas virales
                        </Nav.Link>

                        <div className="d-flex align-items-center">
                            <Button 
                                variant="outline-dark" 
                                as={Link} 
                                to="/administracion" 
                                className="ms-2 fw-bold"
                            >
                                Administración
                            </Button>
                            <Link to="/carrito" className="text-dark carrito-icon">
                                <FontAwesomeIcon icon={faShoppingCart} size="lg" />
                            </Link>
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>        
    </>
  );
};


export default Header;
