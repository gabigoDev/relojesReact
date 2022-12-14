import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Context from "react-bootstrap/esm/AccordionContext";

const Item = ({ info }) => {
    return (
        <Card style={{ width: "25rem" }}>
            <Card.Img variant="top" src={info.image} alt="" />
            <Card.Body>
                <Card.Title className="tipografia">{info.title}</Card.Title>

                <div className="mt-2 d-grid">
                    <Link
                        className="btn btn-outline-primary"
                        to={"/item/" + info.id}
                    >
                        Ver Detalles
                    </Link>
                </div>
            </Card.Body>
        </Card>
    );
};

export default Item;
