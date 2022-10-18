import React, { useContext } from "react";
import { Context } from "./CartContext";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import CheckoutForm from "./CheckoutForm";
import swal from "sweetalert";

const Cart = () => {
    const { carrito, clearCart } = useContext(Context);
    let total =
        carrito.reduce(
            (count, watch) => count + watch.price * watch.quantity,
            0
        ) ?? 0;
    const order = {
        items: carrito.map((product) => {
            return {
                id: product.id,
                price: product.price,
                quantity: product.quantity,
            };
        }),
        totalPrice: total,
    };

    const handleBuyCart = (buyerData) => {
        const db = getFirestore();
        const ordersCollection = collection(db, "orders");
        order.buyer = buyerData;
        addDoc(ordersCollection, order).then(({ id }) => {
            swal("¡Compra realizada!", "Su orden de compra es: " + id, "success");
            clearCart();
        });
    };
    return (
        <>
            <Container>
                <h1 className="text-center m-2 text-decoration-underline tipografia">
                    Carrito
                </h1>
                <div className="row">
                    <div className="col-12 col-lg-8 border-top pt-2 ">
                        <ol className="list-group list-group-numbered">
                            {carrito.length === 0 ? (
                                <>
                                    <h3 className="text-center">
                                        El carrito esta vacío
                                    </h3>
                                    <Link
                                        to="/categories/all"
                                        className="btn btn-primary"
                                    >
                                        Ir a tienda
                                    </Link>
                                </>
                            ) : (
                                carrito.map((watch) => (
                                    <CartItem
                                        key={watch.id}
                                        item={watch}
                                    ></CartItem>
                                ))
                            )}
                        </ol>
                    </div>
                    {carrito.length === 0 ? (
                        ""
                    ) : (
                        <>
                            <div className="col-12 col-lg-4 d-flex flex-column gap-5">
                                <h3 className="d-flex justify-content-around gap-2">
                                    <div>
                                        <b>Total</b>
                                    </div>
                                    <div>${total}</div>
                                </h3>
                                <hr />
                                <CheckoutForm
                                    onConfirm={handleBuyCart}
                                    onReset={clearCart}
                                />
                            </div>
                        </>
                    )}
                </div>
            </Container>
        </>
    );
};

export default Cart;
