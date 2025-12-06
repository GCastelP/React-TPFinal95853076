// 1. Importa el componente Router desde react-router-dom
import { useState } from 'react'
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';

// 2. Importa los componentes de layout
import Header from './components/Header'
import Footer from './components/Footer';

// 3. // Importa las páginas
import HomePage from './pages/HomePage';
import OfertasPage from './pages/OfertasPage';
import Virales from './pages/Virales';
import LoginPage from './pages/LoginPage';

// 4. Importa el contexto de autenticación
import { AuthProvider } from './context/AutoContext';

// 5. Importa el componente del panel de administración
import AdminPanel from './pages/AdminPanel';

// 6. Importa el componente de ruta protegida
import ProtectedRoute from './components/ProtectedRoute';

function App() {
    // El AuthProvider envuelve TODA la aplicación.
    // Así, Header, Footer y cualquier página dentro de <Routes>
    // pueden acceder al estado de autenticación.

  return (
    <>
      <AuthProvider>      
        <Router>
          <Header />
          <main className="py-4">
            <Routes>            
              <Route path="/" element={<HomePage />} />
              <Route path="/ofertas" element={<OfertasPage />} />
              <Route path="/virales" element={<Virales />} />
              <Route path="/login" element={<LoginPage />} />

              {/* RUTA PROTEGIDA */}
              <Route path="/administracion" element={<ProtectedRoute><AdminPanel /></ProtectedRoute>} />
              
              <Route path="/carrito" element={<div>Página del Carrito</div>} />
            </Routes>
          </main>
          <Footer />
        </Router> 
      </AuthProvider>       
    </>
  )
}

export default App
