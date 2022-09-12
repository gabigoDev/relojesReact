import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ItemDetail from "./ItemDetail";

const ItemDetailConteinter = () => {
    const [itemDetail, setData] = useState({});
    const params = useParams();
    useEffect(() => {
        fetch(
            "https://my-json-server.typicode.com/gabigoDev/relojesReact/productos/" +
                params.productId
        )
            .then((response) => response.json())
            .then((data) => {
                setData(data);
            });
    }, []);

    return <ItemDetail item={itemDetail} />;
};
export default ItemDetailConteinter;
