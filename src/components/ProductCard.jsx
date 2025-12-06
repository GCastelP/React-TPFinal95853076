import React from 'react';
import { Card, Button } from 'react-bootstrap';

// El componente ProductCard.jsx Recibe dos "props": el objeto 'product' y la función 'agregarAlCarrito'

const ProductCard = ({ product, agregarAlCarrito }) => {
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
                    Este es el punto clave de interacción.
                    El botón llama a la función 'agregarAlCarrito' que recibió como prop.
                    Le pasa el objeto 'product' completo para que el componente padre sepa
                    qué producto se quiere agregar.
                */}
                <Button 
                    variant="primary" 
                    onClick={() => agregarAlCarrito(product)} 
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
