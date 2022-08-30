import ItemCount from './ItemCount';

const ItemListContainer = (props) => {
    let contenido = props.contenido

    const agregarItem = (items)=> {
        console.log(`compraste ${items} unidades`);
    }
    return ( 
    <div>
        <h1>
            TU RELOJERIA, TODO EL TIEMPO. 
        </h1> 
        {contenido}
        <ItemCount initial={1} stock={5} onAdd={agregarItem}/>
    </div>
    )


}

export default  ItemListContainer;