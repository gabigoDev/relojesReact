import ItemCount from './ItemCount';
import React, { useEffect, useState } from 'react';
import ItemList from '../ItemList';

const agregarItem = (items)=> {
    console.log(`compraste ${items} unidades`);
}
    const ItemListContainer = (props) => {
        let contenido = props.contenido
    
        
    return ( 
    <div>
        <h1>
            TU RELOJERIA, TODO EL TIEMPO. 
        </h1> 
        {contenido}
        <Title greeting={texto}/>
        <ItemList data={data} />
        <ItemCount initial={1} stock={5} onAdd={agregarItem}/>
        
    </div>
    )
}

const ItemList = [
    { id: 1, image: "https://stylewatch.vtexassets.com/arquivos/ids/211251/Reloj_Swatch_SBSWSB03N102_01.jpg?v=637835636249900000", title: "Reloj Swatch Big Bold Bioceramic " },
    { id: 2, image: "https://stylewatch.vtexassets.com/arquivos/ids/166624/swatch_suom111.jpg?v=636681467499530000", title: "Reloj Swatch Powderbayang para mujer" },
    { id: 3, image: "https://stylewatch.vtexassets.com/arquivos/ids/208242/Reloj_Swatch_SO28K100_01.jpg?v=637783006174400000", title: "Reloj Swatch Clearly Gent para hombre " },
];
export const relojes = ({  }) => {
    const [, setData] = useState([]);
}
    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(relojes);
            }, 3000);
        });
        getData.then(res => setData(res));
    }, [])



export default  ItemListContainer;