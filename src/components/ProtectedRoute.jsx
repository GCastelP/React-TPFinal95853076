// src/components/ProtectedRoute.jsx
// Componente de Ruta Protegida que verifica si el usuario está autenticado
// antes de permitir el acceso a rutas protegidas.
// Si no está autenticado, redirige a la página de login.
// Usa el hook useAuth para obtener el estado de autenticación.    
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; // Importa tu hook de autenticación

const ProtectedRoute = ({ children }) => {
    const { isLoggedIn } = useAuth();

    if (!isLoggedIn) {
        // Si el usuario no está logueado, redirígelo a la página de login
        return <Navigate to="/login" replace />;
    }

    // Si está logueado, muestra el componente que estaba protegido
    return children;
};

export default ProtectedRoute;