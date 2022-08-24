const ItemListContainer = (props) => {
    let contenido = props.contenido
    return ( 
    <div>
        <h1>
            TU RELOJERIA, TODO EL TIEMPO. 
        </h1> 
        {contenido}
    </div>
    )
}
export default  ItemListContainer;