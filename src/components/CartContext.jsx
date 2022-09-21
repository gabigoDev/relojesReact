import { createContext, useState } from "react";

export const Context = createContext();

const CartContext = ({children}) => {
    const [carrito, setCarrito] = useState ([]);
    const addItem = (item, quantity)=>{
        item.quantity = quantity;
        setCarrito([...carrito, item]);
    };
    return <Context.Provider value={{addItem}}>{children}</Context.Provider>;
};

export default CartContext;