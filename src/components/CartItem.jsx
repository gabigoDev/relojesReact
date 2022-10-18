import { Image } from "react-bootstrap";
import React, { useContext } from "react";
import { Context } from "./CartContext";
import { Link } from "react-router-dom";

const CartItem = ({ item }) => {
    let { deleteItem } = useContext(Context);
    let handleBorrar = () => {
        deleteItem(item.id);
    };
    return (
        <li className="list-group-item gap-1 d-flex justify-content-between align-items-center">
            <Image
                rounded="true"
                className={"img-thumbnail cart__image"}
                src={item.image}
            ></Image>
            <div className="flex-grow-1 d-flex gap-2 align-items-center">
                <div className="flex-grow-0">
                    <h4 className="fw-bold">
                        <Link to={"/item/" + item.id}>{item.title}</Link>
                    </h4>
                    <p className="text-wrap">
                        {item.description.substring(0, 100)}...
                    </p>
                </div>
                <p className="flex-grow-1 text-nowrap">
                    Cantidad : {item.quantity}
                </p>
                <p className="flex-grow-1 text-nowrap">
                    $ {item.quantity * item.price}
                </p>
            </div>
            <button
                className={"btn btn-danger flex-grow-0"}
                onClick={handleBorrar}
            >
                Eliminar Producto
            </button>
        </li>
    );
};

export default CartItem;
