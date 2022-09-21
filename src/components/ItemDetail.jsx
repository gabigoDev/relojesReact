import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";
import {Context} from "../components/CartContext";

const ItemDetail = (props) => {
    let item = props.item;
    const [countItems,setCountItems] = useState(0);
    const {addItem} = useContext(Context)
    const onAdd = (countItems) =>{
        addItem(item,countItems);
        setCountItems (ItemCount + agregarItem);
    }

    const agregarItem = (count) => {
        addItem(item, count)
        alert(`Agregaste ${count} unidades.`)
        setCountItems(count)
    };

    const linkToCart = <div className="d-grid">
                    <Link to="/cart" className="btn btn-outline-primary">Terminar Compra</Link>
                </div>

    return (
        <div className="tipografia d-flex ">
            <div className="">
                <img src={props.item.img} className="" alt="reloj azul" />
            </div>

            <div className="estiloTexto w-50">
                <hr />
                <h3>Nombre: {props.item.nombre}</h3>
                <h4>Marca: {props.item.marca}</h4>
                <h4>Precio: {props.item.precio}</h4>
                <h4>Descripcion: {props.item.descripcion}</h4>
                <h4>
                    Caracteristicas:
                    <ul>
                        <li>
                            {" "}
                            Material de la correa:{" "}
                            {props.item.caracteristicas?.MaterialCorrea}
                        </li>
                        <li>
                            Material del broche:{" "}
                            {props.item.caracteristicas?.MaterialBroche}
                        </li>
                        <li>
                            Hebilla de correa :{" "}
                            {props.item.caracteristicas?.HebillaCorrea}
                        </li>
                        <li>
                            Coleccion: {props.item.caracteristicas?.Coleccion}{" "}
                        </li>
                        <li>Color: {props.item.caracteristicas?.Color}</li>
                    </ul>
                </h4>
                <hr />
                { countItems == 0 ? 
                    <ItemCount initial={1} stock={5} onAdd={agregarItem} /> : linkToCart
                }
            </div>
        </div>
    );
            };       

export default ItemDetail;
