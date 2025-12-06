import React, { createContext, useState, useEffect, useContext } from 'react'


// 1. Crear el contexto
const AuthContext = createContext({
    isLoggedIn: false,
    login: () => {},
    logout: () => {}
});


// 2. Crear el componente Provider

export const AuthProvider = ({ children}) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // Al cargar la app, revisa si hay una sesión activa en localStorage
    useEffect(() => {
        const storedLoginStatus = localStorage.getItem('isLoggedIn');
        if (storedLoginStatus === 'true') {
            setIsLoggedIn(true);
        }    
    }, []);

    const login = () => {
        setIsLoggedIn(true);
        localStorage.setItem('isLoggedIn', 'true');
    };

    const logout = () => {
        setIsLoggedIn(false)
        localStorage.removeItem('isLoggedIn')
    };

     // El valor del contexto es un objeto con el estado y las funciones
    const value = {
        isLoggedIn,
        login,
        logout
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

// 3. Crear y exportar el hook personalizado para usar el contexto fácilmente
// ESTA ES LA LÍNEA CLAVE. Asegúrate de que esté exactamente así.

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === null) {
        throw new Error("useAuth debe ser usado dentro de un AuthProvider");
    }
    return context;
};

