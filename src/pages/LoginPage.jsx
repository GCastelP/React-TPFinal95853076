// src/pages/LoginPage.jsx
import { useState } from 'react';
import { Container, Card, Form, Button, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; // importa el hook

const LoginPage = () => {
            const { login } = useAuth(); // Usa el hook
    
            const [email, setEmail] = useState('');
            const [password, setPassword] = useState('');
            const [error, setError] = useState('');
            
            const navigate = useNavigate(); // Hook para redirigir el usuario            

            const handleSubmit = (event) => {
                event.preventDefault(); // Evita que la página se recargue

                // Lógica de autenticación simulada
                if (email === 'admin@admin.com' && password === 'password') {
                    // Guardamos un token simple en localStorage para simular una sesión
                    login();                        // Llama a la función del contexto para loguear
                    navigate('/administracion');
                    
                    localStorage.setItem('isLoggedIn', 'true');

                    // Redirigimos al panel de administración

                    navigate('/administracion');
                    
                } else {
                    setError('Credenciales incorrectas. Intenta de nuevo.');
                }
            }         
               

    return (         
        
        <>
            <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '80vh' }}>
                <Card style={{ width: '400px' }}>
                    <Card.Body>
                        <Card.Title className="text-center mb-4">Iniciar Sesión</Card.Title>
                        
                        {error && <Alert variant="danger">{error}</Alert>}

                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Correo electrónico</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Enter email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Contraseña</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </Form.Group>

                            <Button variant="primary" type="submit" className="w-100">
                                Ingresar
                            </Button>
                        </Form>
                    </Card.Body>
                </Card>
            </Container>
        </>
    )
}

export default LoginPage