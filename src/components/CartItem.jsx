import {Image} from "react-bootstrap";
import React, {useContext } from "react";
import {Context} from "./CartContext";
import {Link} from "react-router-dom";
const CartItem = ({item}) =>  {
    let {deleteItem} = useContext(Context)
    let handleBorrar = () => {
        deleteItem(item.id)
    }
    return (
        <li className="list-group-item gap-2 d-flex justify-content-between align-items-center">
            <Image rounded="true" className={"img-thumbnail cart__image"}
                src={item.img}></Image>
            <div className="flex-grow-1 d-flex gap-4 align-items-center">
                <div className="flex-grow-1">
                    <h2 className="fw-bold"><Link to={"/productos/"+item.id}>{item.nombre}</Link></h2>
                    <span className="text-truncate w-50">{item.descripcion.substring(0,50)}...</span>
                </div>
                <h4>Cantidad: <span>{item.quantity}</span></h4>
                <h4><span>{item.quantity * item.precio}</span></h4>
            </div>
            <button className={"btn btn-danger"} onClick={handleBorrar}>Eliminar Producto</button>
        </li>
    )
}

export default CartItem;