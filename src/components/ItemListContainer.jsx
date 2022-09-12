import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";

const productos = [
    {
        id: 1,
        image: "https://stylewatch.vtexassets.com/arquivos/ids/211251/Reloj_Swatch_SBSWSB03N102_01.jpg?v=637835636249900000",
        title: "Reloj Swatch Big Bold Bioceramic ",
    },
    {
        id: 2,
        image: "https://stylewatch.vtexassets.com/arquivos/ids/166624/swatch_suom111.jpg?v=636681467499530000",
        title: "Reloj Swatch Powderbayang para mujer",
    },
    {
        id: 3,
        image: "https://stylewatch.vtexassets.com/arquivos/ids/208242/Reloj_Swatch_SO28K100_01.jpg?v=637783006174400000",
        title: "Reloj Swatch Clearly Gent para hombre ",
    },
    {   id: 4,
        image: "https://stylewatch.vtexassets.com/arquivos/ids/219224/Relojes_Tommy_Hilfiger_TH1791482_01.jpg?v=637980767083370000",
        title: "Reloj Tommy Hilfiger Denim ",
    },
    {   id: 5,
        image: "https://stylewatch.vtexassets.com/arquivos/ids/182538/1782244.jpg?v=637369134063900000",
        title: "Reloj Tommy Hilfiger Alex para mujer ",
    },
    {   id: 6,
        image: "https://stylewatch.vtexassets.com/arquivos/ids/218933/Relojes_Tommy_Hilfiger_TH1782551_01.jpg?v=637967890436270000",
        title: "Reloj Tommy Hilfiger Rachel",
    },
];

const ItemListContainer = (props) => {
    let contenido = props.contenido;
    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = new Promise((resolve) => {
            setTimeout(() => {
                resolve(productos);
            }, 2000);
        });
        getData.then((res) => setData(res));
    }, []);
    return (
        <div>
            <h1 className="text-center m-2 titular">
                Tu relojeria todo el tiempo.
            </h1>
            {contenido}
            <ItemList data={data} />
        </div>
    );
};

export default ItemListContainer;
