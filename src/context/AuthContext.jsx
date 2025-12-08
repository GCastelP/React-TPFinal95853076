import React, { createContext, useState, useEffect, useContext } from 'react'


// 1. Crear el contexto
const AuthContext = createContext();


// 2. Crear el componente Provider

export const AuthProvider = ({ children}) => {
    // Usamos un estado para el token, inicializándolo desde localStorage para persistir la sesión.
    const [token, setToken] = useState(() => {
        return localStorage.getItem('token') || null;
    });

    // Una función de login que recibe las credenciales y devuelve true/false
    const login = (email, password) => {
        // Lógica de autenticación centralizada aquí
        if (email === 'admin@admin.com' && password === 'password') {
            const fakeToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ0ZXN0LXVzZXIiLCJuYW1lIjoiUHJ1ZWJhIExvY2FsIiwiaWF0IjoxNzYzOTIwMTg0LCJleHAiOjE3NjM5MjM3ODR9.Qs6YfLvyyfSmGTfy2V8BWHTHY2Gn5NCSYbQ0npuMJRk';

            setToken(fakeToken);
            localStorage.setItem('token', fakeToken);
            return true; // Login exitoso
        }
        return false; // Login fallido
    };

    const logout = () => {
        setToken(null);
        localStorage.removeItem('token');
    };

    // El valor que el contexto proveerá.
    // Se deriva 'isLoggedIn' del 'token' para evitar sincronización de estados.
    
    const value = {
        token,
        isLoggedIn: !!token, // Convierte el token en un booleano (true si existe, false si no)
        login,
        logout,
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};


// 3. Crear y exportar el hook personalizado para usar el contexto fácilmente.
// Esto debe estar fuera del componente AuthProvider.
// Hook personalizado para usar el contexto.
    
export const useAuth = () => {
        const context = useContext(AuthContext);
        if (context === null) {
            throw new Error("useAuth debe ser usado dentro de un AuthProvider");
        }
        return context;
};