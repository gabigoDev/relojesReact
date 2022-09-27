import React, {useContext} from "react";
import {Context} from "./CartContext";
import CartItem from "./CartItem";
import {Link} from "react-router-dom";
import { Container } from "react-bootstrap";

const Cart = () => {
    const {carrito} = useContext(Context)
    let total = carrito.reduce((count, watch) => count + (watch.precio * watch.quantity), 0) ?? 0;

    return (
        <>
            <Container>

            <h1 className="text-center m-2 text-decoration-underline">Carrito</h1>
            <ol className="list-group list-group-numbered">
                {carrito.length === 0 ?
                    <>
                        <h3 className="text-center">El carrito esta vacío</h3>
                        <Link to="/categoria/all" className="btn btn-primary">Ir a tienda</Link>
                    </>
                    : carrito.map(watch => <CartItem key={watch.id} item={watch}></CartItem>)
                }
            </ol>
            <hr/>
            <div>Total: ${total}</div>
            </Container>
        </>
    )
}

export default Cart;