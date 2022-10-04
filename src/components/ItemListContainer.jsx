import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import db from "../firestore/config";
import {
    collection,
    getDocs,
    getFirestore,
    where,
    query,
} from "firebase/firestore";

const ItemListContainer = (props) => {
    let contenido = props.contenido;
    const [data, setData] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const params = useParams();
    let filter = params.categoryId ? params.categoryId : false;
    let loading = <div>Loading</div>;
    useEffect(() => {
        const fs = getFirestore(db);
        let itemRef = collection(fs, "items");
        if (filter) {
            itemRef = query(
                itemRef,
                where("categoryId", "==", parseInt(filter))
            );
        }

        getDocs(itemRef).then((response) => {
            let data = response.docs.map((item) => {
                return { id: item.id, ...item.data() };
            });
            setData(data);
            setLoaded(true);
        });
    }, [params]);

    return (
        <div>
            <h1 className="text-center m-2 titular">
                Tu tiempo, al alcance de tu mano.
            </h1>
            {loaded === false ? loading : contenido}
            <ItemList data={data} />
        </div>
    );
};

export default ItemListContainer;
