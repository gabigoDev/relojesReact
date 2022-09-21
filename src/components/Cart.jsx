import React, {useContext} from "react";
import { Context } from "./CartContext";
const Cart = () => {
    const {carrito} = useContext (Context)
    return(
    <h1>Este es el  carrito</h1>
    )}

export default Cart;