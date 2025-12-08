// src/pages/AdminPanel.jsx
import React from 'react';
import { Container, Card, Row, Col, Button } from 'react-bootstrap';

const AdminPanel = () => {
    // Estos datos podrían venir de una API en el futuro
    const totalSales = 15420;
    const totalOrders = 324;
    const totalUsers = 1102;
    const totalProducts = 58;

    return (
        <Container fluid>
            <h1 className="my-4">Dashboard de Administración</h1>

            {/* Fila 1: Tarjetas de Métricas Clave */}
            <Row className="mb-4">
                <Col md={3}>
                    <Card className="text-center">
                        <Card.Body>
                            <Card.Title className="text-primary">${totalSales.toLocaleString()}</Card.Title>
                            <Card.Text>Ventas Totales</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={3}>
                    <Card className="text-center">
                        <Card.Body>
                            <Card.Title className="text-success">{totalOrders}</Card.Title>
                            <Card.Text>Pedidos Realizados</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={3}>
                    <Card className="text-center">
                        <Card.Body>
                            <Card.Title className="text-info">{totalUsers}</Card.Title>
                            <Card.Text>Usuarios Registrados</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={3}>
                    <Card className="text-center">
                        <Card.Body>
                            <Card.Title className="text-warning">{totalProducts}</Card.Title>
                            <Card.Text>Productos en Tienda</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            {/* Fila 2: Acciones Rápidas */}
            <Row>
                <Col md={6}>
                    <Card>
                        <Card.Header><Card.Title as="h5">Acciones Rápidas</Card.Title></Card.Header>
                        <Card.Body>
                            <Button variant="primary" className="m-1">Añadir Nuevo Producto</Button>
                            <Button variant="secondary" className="m-1">Ver Últimos Pedidos</Button>
                            <Button variant="info" className="m-1">Gestionar Usuarios</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card>
                        <Card.Header><Card.Title as="h5">Ventas de la Última Semana</Card.Title></Card.Header>
                        <Card.Body className="text-center">
                            <p>Aquí iría un gráfico de ventas.</p>
                            <p>(Podrías usar una librería como Chart.js o Recharts)</p>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default AdminPanel;