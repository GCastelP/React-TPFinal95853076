import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-4 mt-4">
      <Container>
        <Row>
          <Col md={6}>            
            <p className="mb-0">Tu tienda confiable para productos electrónicos de calidad. </p>
            <p className="mb-0">Ofrecemos los mejores precios y servicio al cliente excepcional.</p>
            <p className="mb-0">
                © {new Date().getFullYear()} Tienda React API 
            </p>  
          </Col>
          <Col md={6}>
            <div>
                <a href="#" className="text-white me-3">
                    <FontAwesomeIcon icon={faFacebook} size="2x" />
                </a>
                <a href="#" className="text-white me-3">
                    <FontAwesomeIcon icon={faTwitter} size="2x" />
                </a>
                <a href="#" className="text-white">
                    <FontAwesomeIcon icon={faInstagram} size="2x" />
                </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;