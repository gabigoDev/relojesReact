const ItemDetail = (props) => {
    console.log(props);
    return (
        <div className="tipografia d-flex ">
            <div>
                <img src={props.item.img} alt="reloj azul" />
            </div>

            <div className="estiloTexto">
                <hr />
                <h3>Nombre: {props.item.nombre}</h3>
                <h4>Marca: {props.item.marca}</h4>
                <h4>Precio: {props.item.precio}</h4>
                <h4>Descripcion: {props.item.descripcion}</h4>
                <h4>
                    Caracteristicas:
                    <ul>
                        <li>
                            {" "}
                            Material de la correa:{" "}
                            {props.item.caracteristicas?.MaterialCorrea}
                        </li>
                        <li>
                            Material del broche:{" "}
                            {props.item.caracteristicas?.MaterialBroche}
                        </li>
                        <li>
                            Hebilla de correa :{" "}
                            {props.item.caracteristicas?.HebillaCorrea}
                        </li>
                        <li>
                            Coleccion: {props.item.caracteristicas?.Coleccion}{" "}
                        </li>
                        <li>Color: {props.item.caracteristicas?.Color}</li>
                    </ul>
                </h4>
                <hr />
            </div>
        </div>
    );
};

export default ItemDetail;
