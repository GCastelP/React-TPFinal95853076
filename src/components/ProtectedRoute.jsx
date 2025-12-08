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