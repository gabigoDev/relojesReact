import React from "react";
import ItemCount from "./ItemCount";
import Card from "react-bootstrap/Card";

const agregarItem = (items) => {
    console.log(`compraste ${items} unidades`);
};
const Item = ({ info }) => {
    return (
        <Card style={{ width: "25rem" }}>
            <Card.Img variant="top" src={info.image} alt="" />
            <Card.Body>
                <Card.Title>{info.title}</Card.Title>

                <ItemCount initial={1} stock={5} onAdd={agregarItem} />
            </Card.Body>
        </Card>
    );
};

export default Item;
