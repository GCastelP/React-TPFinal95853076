// src/context/ProductContext.jsx
// Para gestionar el estado global de los productos en la aplicación,
// incluyendo la persistencia en localStorage y la carga inicial desde la API.  

import { createContext, useContext, useState, useEffect } from 'react';

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
    // 1. Inicializa el estado leyendo desde localStorage. Si no hay nada, empieza vacío.
    const [products, setProducts] = useState(() => {
        const savedProducts = localStorage.getItem('products');
        return savedProducts ? JSON.parse(savedProducts) : [];
    });

    // 2. Efecto para guardar los productos en localStorage cada vez que el array 'products' cambie.
    useEffect(() => {
        localStorage.setItem('products', JSON.stringify(products));
    }, [products]);

    // 3. Efecto para cargar los productos desde la API SOLO si no hay nada en localStorage.
    useEffect(() => {
        // Si ya hay productos en el estado (y por ende en localStorage), no hacemos nada.
        if (products.length > 0) {
            return;
        }

        // Si el estado está vacío, es la primera vez. Cargamos desde la API.
        console.log("Cargando productos iniciales desde la API...");
        fetch('https://fakestoreapi.com/products')
            .then(res => {
                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`);
                 }
                    return res.json();
                })
            .then(data => {
                console.log("Productos cargados:", data);
                setProducts(data); // Esto guardará los datos en el estado y, gracias al efecto anterior, también en localStorage.
            })
            .catch(error => {
                console.error("❌ Error al cargar productos desde la API:", error);
                // Opcional: cargar datos fallback o mostrar alerta al usuario
                alert("No se pudieron cargar los productos iniciales. Revisa la consola.");
                });                       
    // El array de dependencias vacío [] asegura que este efecto se ejecute solo una vez, al montar el componente.
    }, []); 

    // Las funciones de gestión del carrito de productos
    const addProduct = (product) => {
        const newProduct = {
            ...product,
            id: Date.now().toString(), 
            image: product.image || 'https://via.placeholder.com/250'
        };
        setProducts([...products, newProduct]);
    };

    const updateProduct = (id, updatedProduct) => {
        setProducts(
            products.map((product) =>
                product.id === id ? { ...product, ...updatedProduct } : product
            )
        );
    };

    const deleteProduct = (id) => {
        setProducts(products.filter((product) => product.id !== id));
    };

    const value = {
        products,
        addProduct,
        updateProduct,
        deleteProduct,
    };

    return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>;
};

export const useProduct = () => {
    return useContext(ProductContext);
};