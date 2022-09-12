import React from "react";
import ItemCount from "./ItemCount";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const agregarItem = (items) => {
    console.log(`compraste ${items} unidades`);
};
const Item = ({ info }) => {
    return (
        <Card style={{ width: "25rem" }}>
            <Card.Img variant="top" src={info.img} alt="" />
            <Card.Body>
                <Card.Title>{info.nombre}</Card.Title>

                <ItemCount initial={1} stock={5} onAdd={agregarItem} />
                <div className="mt-2 d-grid">
                    <Link
                        className="btn btn-outline-secondary"
                        to={"/productos/" + info.id}
                    >
                        Ver Detalles
                    </Link>
                </div>
            </Card.Body>
        </Card>
    );
};

export default Item;
