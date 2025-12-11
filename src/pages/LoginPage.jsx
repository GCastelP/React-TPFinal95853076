// src/pages/LoginPage.jsx
// Página de Login para que los usuarios inicien sesión
// Utiliza el contexto de autenticación para manejar el estado de login
// Redirige a la página principal si el login es exitoso
// Usa React, React-Bootstrap y React Router para la navegación.    

import { useState, useEffect } from 'react';
import { Container, Card, Form, Button, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const LoginPage = () => {
    const { login, isLoggedIn } = useAuth(); // Obtenemos login y el estado isLoggedIn
    const navigate = useNavigate();

    // Si el usuario ya está logueado, lo redirigimos al home para que no vea el login de nuevo
    useEffect(() => {
        if (isLoggedIn) {
            navigate('/administracion');
        }
    }, [isLoggedIn, navigate]);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        // Llamamos a la función login del contexto. Devuelve true o false.
        const success = login(email, password);

        if (success) {
            navigate('/'); // Redirige a la página principal en caso de éxito
        } else {
            setError('Credenciales incorrectas. Intenta de nuevo.');
        }
    };

    return (
        <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '80vh' }}>
            <Card style={{ width: '400px' }}>
                <Card.Body>
                    <Card.Title className="text-center mb-4">Iniciar Sesión</Card.Title>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Correo electrónico</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                        </Form.Group>
                        <Button variant="primary" type="submit" className="w-100">Ingresar</Button>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default LoginPage;