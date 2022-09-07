import React, { useEffect, useState } from "react";

import ItemDetail from "./ItemDetail";

const ItemDetailConteinter = () => {
    const [itemDetail, setData] = useState({});

    useEffect(() => {
        fetch("./BaseDatos.json")
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setData(data);
            });
    }, []);

    return <ItemDetail item={itemDetail} />;
};
export default ItemDetailConteinter;
