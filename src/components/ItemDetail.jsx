import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";
import { Context } from "../components/CartContext";
import Image from "react-bootstrap/Image";

const ItemDetail = (props) => {
    let item = props.item;
    const [countItems, setCountItems] = useState(0);
    const { addItem } = useContext(Context);

    const agregarItem = (count) => {
        addItem(item, count);
        setCountItems(count);
    };

    const linkToCart = (
        <div className="d-grid gap-2">
            <Link to="/categories/all" className="btn btn-outline-success tipografia">
                Seguir Comprando
            </Link>
            <Link to="/cart" className="btn btn-outline-primary tipografia">
                Terminar Compra
            </Link>
        </div>
    );

    return (
        <div className="tipografia d-flex ">
            <div className="item-detail__image align-self-center">
                <Image src={props.item.image} fluid={true} alt="reloj azul" />
            </div>

            <div className="estiloTexto item-detail__description">
                <hr />
                <h3>Nombre: {props.item.title}</h3>
                <h4>Marca: {props.item.brand}</h4>
                <h4>Precio: ${props.item.price}</h4>
                <h4>Descripcion: {props.item.description}</h4>
                <h4>
                    Caracteristicas:
                    <ul>
                        <li>
                            Material de la correa:
                            {props.item.caracteristicas?.MaterialCorrea}
                        </li>
                        <li>
                            Material del broche:
                            {props.item.caracteristicas?.MaterialBroche}
                        </li>
                        <li>
                            Hebilla de correa :
                            {props.item.caracteristicas?.HebillaCorrea}
                        </li>
                        <li>
                            Coleccion: {props.item.caracteristicas?.Coleccion}
                        </li>
                        <li>Color: {props.item.caracteristicas?.Color}</li>
                    </ul>
                </h4>
                <hr />
                {countItems === 0 ? (
                    <ItemCount initial={1} stock={5} onAdd={agregarItem} />
                ) : (
                    linkToCart
                )}
            </div>
        </div>
    );
};

export default ItemDetail;
