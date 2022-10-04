import React, { useContext } from "react";
import { Context } from "./CartContext";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const Cart = () => {
    const { carrito, clearCart } = useContext(Context);
    let total =
        carrito.reduce(
            (count, watch) => count + watch.price * watch.quantity,
            0
        ) ?? 0;
    const order = {
        buyer: {
            name: "Jesus Prueba",
            email: "jesus@probando.org",
            phone: "54655465",
            address: "tu casa",
        },
        items: carrito.map((product) => {
            return {
                id: product.id,
                price: product.price,
                quantity: product.quantity,
            };
        }),
        totalPrice: total,
    };
    console.log(order);

    const handleBuyCart = () => {
        const db = getFirestore();
        const ordersCollection = collection(db, "orders");
        addDoc(ordersCollection, order).then(({ id }) => {
            alert("Su orden de compra es: " + id);
            clearCart();
        });
    };
    return (
        <>
            <Container>
                <h1 className="text-center m-2 text-decoration-underline">
                    Carrito
                </h1>
                <ol className="list-group list-group-numbered">
                    {carrito.length === 0 ? (
                        <>
                            <h3 className="text-center">
                                El carrito esta vacío
                            </h3>
                            <Link
                                to="/categoria/all"
                                className="btn btn-primary"
                            >
                                Ir a tienda
                            </Link>
                        </>
                    ) : (
                        carrito.map((watch) => (
                            <CartItem key={watch.id} item={watch}></CartItem>
                        ))
                    )}
                </ol>
                <hr />
                {carrito.length === 0 ? (
                    ""
                ) : (
                    <>
                        <h2>Total: ${total}</h2>
                        <div className="d-flex gap-2">
                            <button
                                className="btn btn-success w-100"
                                onClick={handleBuyCart}
                            >
                                Comprar Carrito
                            </button>
                            <button
                                className="btn btn-secondary w-100"
                                onClick={clearCart}
                            >
                                Limpiar Carrito
                            </button>
                        </div>{" "}
                    </>
                )}
            </Container>
        </>
    );
};

export default Cart;
