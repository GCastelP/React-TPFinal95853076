// src/App.jsx
// Componente principal de la aplicación que configura las rutas,
// envuelve la aplicación con los proveedores de contexto necesarios
// y define las rutas públicas y protegidas utilizando React Router.
// Usa React, React Router y Context API.

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Proveedores de Contexto
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import { ProductProvider } from './context/ProductContext';

// Componentes de Layout
import Header from './components/Header';
import Footer from './components/Footer';

// Páginas
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import AdminPanel from './pages/AdminPanel';
import CartPage from './pages/CartPage';
import OfertasPage from './pages/OfertasPage'; 
import Virales from './pages/Virales'; 

// Componente de Ruta Protegida
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    // El ProductProvider envuelve a toda la app para que los productos persistan en todo momento.
    <ProductProvider>
      {/* El CartProvider envuelve a toda la app para que el carrito persista en todo momento. */}
      <CartProvider>
        {/* El AuthProvider gestiona el estado de login del usuario. */}
        <AuthProvider>
          <Router>
            <Header />
            <main className="py-4">
              <Routes>
                {/* RUTAS PÚBLICAS - Cualquiera puede acceder */}
                <Route path="/" element={<HomePage />} />
                <Route path="/ofertas" element={<OfertasPage />} />
                <Route path="/virales" element={<Virales />} />
                <Route path="/carrito" element={<CartPage />} />
                <Route path="/login" element={<LoginPage />} />

                {/* RUTA PROTEGIDA - Solo accesible si isLoggedIn es true */}
                <Route
                  path="/administracion"
                  element={
                    <ProtectedRoute>
                      <AdminPanel />
                    </ProtectedRoute>
                  }
                />
              </Routes>
            </main>
            <Footer />
          </Router>
        </AuthProvider>
      </CartProvider>
    </ProductProvider>
  );
}

export default App;