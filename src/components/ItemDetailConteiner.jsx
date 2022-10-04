import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { getDoc, getFirestore, doc } from "firebase/firestore";
import ItemDetail from "./ItemDetail";
import db from "../firestore/config";

const ItemDetailConteinter = () => {
    const [itemDetail, setData] = useState({});
    const params = useParams();
    useEffect(() => {
        const fs = getFirestore(db);
        getDoc(doc(fs, "items", params.productId)).then((response) =>
            setData({ id: response.id, ...response.data() })
        );
    }, []);

    return (
        <Container>
            <ItemDetail item={itemDetail} />
        </Container>
    );
};
export default ItemDetailConteinter;
