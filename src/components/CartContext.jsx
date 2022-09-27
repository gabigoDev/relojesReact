import { createContext, useState } from "react";

export const Context = createContext();

const CartContext = ({children}) => {
    const [carrito, setCarrito] = useState ([]);
    const deleteItem = (itemId)=>{
        const carritoFiltrado = carrito.filter ((reloj) => reloj.id !== itemId);
        setCarrito(carritoFiltrado);
    };
    const clearCart = ()=> {
        setCarrito ([]);
    };
    const isInCart = (itemId)=>{
        let articuloExistente = carrito.find ((reloj)=> reloj.id === itemId);
        if (articuloExistente) {return true}
        return false;
        };
    const addItem = (item, quantity)=>{
        console.log (item);
        let articuloExistente = carrito.find ((reloj)=> reloj.id === item.id);
        if (articuloExistente) { articuloExistente.quantity +=quantity;
        } else {
            item.quantity=quantity;
            setCarrito([...carrito, item]);}
            console.log (carrito);
    };
    return <Context.Provider value={{addItem, isInCart, clearCart, deleteItem, carrito}}>{children}</Context.Provider>;
};

export default CartContext;