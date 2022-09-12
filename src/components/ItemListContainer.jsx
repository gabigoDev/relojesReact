import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";

const ItemListContainer = (props) => {
    let contenido = props.contenido;
    const [data, setData] = useState([]);
    const [loaded, setLoaded] = useState(false)
    let loading = <div>Loading</div>
    useEffect(() => {
        fetch("https://my-json-server.typicode.com/gabigoDev/relojesReact/productos")
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setData(data);
                setLoaded(true);
            });
    }, []);
    
    return (
        <div>
            <h1 className="text-center m-2 titular">
                Tu relojeria todo el tiempo.
            </h1>
            {loaded === false ? loading : contenido}
            <ItemList data={data} />
        </div>
    );
};

export default ItemListContainer;
