import ItemCount from './ItemCount';

const ItemListContainer = (props) => {
    let contenido = props.contenido
    return ( 
    <div>
        <h1>
            TU RELOJERIA, TODO EL TIEMPO. 
        </h1> 
        {contenido}
        <ItemCount stock={5} initial ={1} />

    </div>
    )
}
export default  ItemListContainer;