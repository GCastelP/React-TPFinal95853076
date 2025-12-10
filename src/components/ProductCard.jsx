// src/components/ProductCard.jsx
// Componente de tarjeta de producto que muestra detalles y permite añadir al carrito
import React from 'react';
import { Card, Button } from 'react-bootstrap';
//  1. Importa el hook del carrito    
import { useCart } from '../context/CartContext';  
import { useAuth } from '../context/AuthContext'; // <-- Importa useAuth
import { useNavigate } from 'react-router-dom';   // <-- Importa useNavigate


// 2. El componente ProductCard.jsx Recibe solo la  "props": el objeto 'product' 

const ProductCard = ({ product }) => {
    // <-- 3. Usa el hook para obtener la función addToCart
    const { addToCart } = useCart(); 
    const { isLoggedIn } = useAuth();   // <-- Obtén el estado de autenticación
    const navigate = useNavigate();     // <-- Obtén la función de navegación

    // Función que maneja el clic en el botón
    const handleAddToCart = () => {
        if (isLoggedIn) {
            // Si está logueado, añade el producto al carrito
            addToCart(product);
        } else {
            // Si no está logueado, redirige a la página de login
            navigate('/login');
        }
    };


  return (
    <>  
        {/* armado de los cards */}
        {/* Usamos un Card de Bootstrap. Las clases h-100, d-flex y flex-column
                aseguran que todas las tarjetas en una fila tengan la misma altura. */}

        <Card className="h-100 d-flex flex-column shadow-sm border-0">
            {/* Muestra la imagen del producto. El estilo inline asegura que
                todas las imágenes tengan el mismo tamaño sin deformarse. */}
            <div style={{ 
                flex: '1 0 auto', 
                display:'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor:'#f8f9fa',
                padding: '10px',
                borderBottom: '1px solid #dee2e6',
                overflow: 'hidden' 
                }}>
                <Card.Img
                    variant="top"
                    src={product.image}
                    alt={product.title}
                    className="card-img-top img-fluid" 
                    style={{
                        width: '100%',
                        height: '250px', 
                        objectFit: 'contain'
                    }} 
                />
            </div> 

            {/* Cuerpo de la tarjeta */}     
            <Card.Body className="d-flex flex-column">
                <Card.Title className="fw-bold text-truncate" title={product.title}>
                    {product.title || 'Sin título'}
                </Card.Title>

                <Card.Text className="text-muted" style={{ flexGrow: 1 }}>
                    {(product.description || '').slice(0, 100)}...
                </Card.Text>

                <Card.Text className="fw-bold fs-5 mb-3">
                    ${product.price?.toFixed(2) || '0.00'}
                </Card.Text>

                {/* 
                    4. Este es el punto clave de interacción.
                    El botón llama a la función 'addCart' usando la función que obtuvo del
                    contexto en el [paso 3.
                */}
                <Button 
                    variant="primary" 
                    onClick={() => addToCart(product)} 
                    className="mt-auto w-100"
                >
                    Agregar al carrito
                </Button>
            </Card.Body>
        </Card>
    </>  
   );
};

export default ProductCard;
