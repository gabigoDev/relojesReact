import { createContext, useState } from "react";

export const Context = createContext();

const CartContext = ({ children }) => {
    const [carrito, setCarrito] = useState([]);
    const deleteItem = (itemId) => {
        const carritoFiltrado = carrito.filter((reloj) => reloj.id !== itemId);
        setCarrito(carritoFiltrado);
    };
    const clearCart = () => {
        setCarrito([]);
    };
    const isInCart = (itemId) => {
        return carrito.find((reloj) => reloj.id === itemId);
    };
    const addItem = (item, quantity) => {
        let articuloExistente = isInCart(item.id);
        if (articuloExistente) {
            articuloExistente.quantity += quantity;
        } else {
            item.quantity = quantity;
            carrito.push(item);
        }
        setCarrito([...carrito]);
    };

    return (
        <Context.Provider
            value={{ addItem, isInCart, clearCart, deleteItem, carrito }}
        >
            {children}
        </Context.Provider>
    );
};

export default CartContext;
