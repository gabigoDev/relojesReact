import Item from "./Item";
import React from "react";

const ItemList = ({ data = [] }) => {
    let listaDeItems = data.map((watch) => (
        <Item key={watch.id} info={watch} />
    ));
    return (
        <div className="d-flex gap-2 flex-wrap justify-content-around">
            {listaDeItems}
        </div>
    );
};

export default ItemList;
