// src/context/CartContext.jsx
// Para gestionar el estado global del carrito de compras en la aplicación,
// incluyendo añadir, eliminar y actualizar cantidades de productos,    
// así como la persistencia del carrito en localStorage.
// Usa React Context y Hooks.

import { createContext, useContext, useState, useEffect } from 'react'; // <-- 1. Importa useEffect

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    // 2. Inicializa el estado del carrito leyendo desde localStorage
    const [cartItems, setCartItems] = useState(() => {
        const savedCart = localStorage.getItem('cartItems');
        // Si hay algo guardado, úsalo. Si no, empieza con un array vacío.
        return savedCart ? JSON.parse(savedCart) : [];
    });

    // 3. Efecto para guardar el carrito en localStorage cada vez que cambie
    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

    const addToCart = (product) => {
        const exist = cartItems.find(item => item.id === product.id);
        if (exist) {
            setCartItems(
                cartItems.map(item =>
                    item.id === product.id ? { ...exist, quantity: exist.quantity + 1 } : item
                )
            );
        } else {
            setCartItems([...cartItems, { ...product, quantity: 1 }]);
        }
    };

    const updateQuantity = (productId, newQuantity) => {
        if (newQuantity <= 0) {
            removeFromCart(productId);
            return;
        }
        setCartItems(
            cartItems.map(item =>
                item.id === productId ? { ...item, quantity: newQuantity } : item
            )
        );
    };

    const removeFromCart = (productId) => {
        setCartItems(cartItems.filter(item => item.id !== productId));
    };

    // clearCart ahora se usará para otras cosas, pero no en el logout
    const clearCart = () => {
        setCartItems([]);
    };

    const getCartTotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    const value = {
        cartItems,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        getCartTotal,
    };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
    return useContext(CartContext);
};