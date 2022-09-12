import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";

const ItemListContainer = (props) => {
    let contenido = props.contenido;
    const [data, setData] = useState([]);
    const [loaded, setLoaded] = useState(false)
    const params=useParams();
    let filter = params.categoryId ? 'categoriaId='+params.categoryId : '';
    let loading = <div>Loading</div>
    useEffect(() => {
        fetch("https://my-json-server.typicode.com/gabigoDev/relojesReact/productos?"+filter)
            .then((response) => response.json())
            .then((data) => {
                setData(data);
                setLoaded(true);
            });
    }, [params]);
    
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
