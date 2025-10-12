# 🛒 Tienda React API

Aplicación web desarrollada con **React + Vite** que muestra productos obtenidos desde la [Fake Store API](https://fakestoreapi.com/).  
Incluye navegación con **React Router**, componentes responsivos con **React Bootstrap**, e íconos con **FontAwesome**.

---

## 🚀 Características principales

- ⚛️ Aplicación construida con React (SPA)
- 🧭 Navegación con React Router DOM
- 🎨 Estilos con React Bootstrap
- 🖼️ Íconos con FontAwesome
- 🌐 Consumo de datos desde Fake Store API
- 🧩 Componentes modulares: Header, Footer, ProductCard, ProductList

---

## ⚙️ Instalación y ejecución

### 1️⃣ Clonar el repositorio
```bash
git clone https://github.com/GCastelP/React-TPFinal95853076.git
cd React-TPFinal95853076

### 2️⃣ Instalar dependencias

Asegúrate de tener Node.js v16+ instalado.

### 3️⃣ Iniciar el servidor de desarrollo

npm install

npm run dev
Luego abre tu navegador en: 
http://localhost:5173

📦 Dependencias principales
| Paquete                                | Descripción                              |
| -------------------------------------- | ---------------------------------------- |
| **react** y **react-dom**              | Librería base de React                   |
| **react-router-dom**                   | Manejo de rutas (SPA)                    |
| **react-bootstrap**                    | Componentes Bootstrap para React         |
| **bootstrap**                          | Framework CSS para estilos base          |
| **@fortawesome/react-fontawesome**     | Componente React para íconos FontAwesome |
| **@fortawesome/free-solid-svg-icons**  | Íconos sólidos (carrito, etc.)           |
| **@fortawesome/free-brands-svg-icons** | Íconos de redes sociales                 |


Instalación manual (si fuera necesario)
npm install react-router-dom react-bootstrap bootstrap \
@fortawesome/react-fontawesome @fortawesome/free-solid-svg-icons @fortawesome/free-brands-svg-icons


🗂️ Estructura del proyecto
src/
 ├─ assets/
 │   └─ logo.png                 # Logo del sitio
 ├─ components/
 │   ├─ Header.jsx               # Barra de navegación principal
 │   ├─ Footer.jsx               # Pie de página con redes sociales
 │   ├─ ProductCard.jsx          # Tarjeta de producto individual
 │   ├─ ProductList.jsx          # Listado de productos desde API
 │   ├─ Home.jsx                 # Página principal (todos los productos)
 │   ├─ Ofertas.jsx              # Página de ofertas
 │   └─ Virales.jsx              # Página de productos virales
 ├─ App.jsx                      # Configuración de rutas
 ├─ main.jsx                     # Punto de entrada principal
 └─ index.css / App.css          # Estilos globales opcionales

🌍 Navegación
| Ruta              | Descripción                                   |
| ----------------- | --------------------------------------------- |
| `/`               | Página principal (todos los productos)        |
| `/ofertas`        | Productos en oferta (categoría "electronics") |
| `/virales`        | Productos virales (categoría "jewelery")      |
| `/administracion` | Página de administración (placeholder)        |
| `/carrito`        | Página del carrito (placeholder)              |


🧠 Notas técnicas

Importar Bootstrap en main.jsx:
import 'bootstrap/dist/css/bootstrap.min.css';

No es necesario importar bootstrap.bundle.min.js (React Bootstrap ya maneja el JS internamente).

Las imágenes locales se almacenan en /src/assets/.

El menú hamburguesa en el Header funciona gracias a <Navbar.Collapse> y <Navbar.Toggle>.

🧑‍💻 Autor

Proyecto desarrollado por GCastelP
💼 Tecnologías: React, Vite, React Bootstrap, FontAwesome, React Router.

