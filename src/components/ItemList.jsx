import Item from "./Item";
import React from "react";

const ItemList = ({ data = [] }) => {
    let listaDeItems = data.map((relojes) => (
        <Item key={relojes.id} info={relojes} />
    ));
    return (
        <div className="d-flex -2 justify-content-around">{listaDeItems}</div>
    );
};

export default ItemList;
