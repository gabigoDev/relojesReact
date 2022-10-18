import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import { getDoc, getFirestore, doc } from "firebase/firestore";
import ItemDetail from "./ItemDetail";
import db from "../firestore/config";
import LoadingWidget from "./LoadingWidget";

const ItemDetailConteinter = () => {
    const [itemDetail, setData] = useState({});
    const params = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        const fs = getFirestore(db);
        getDoc(doc(fs, "items", params.productId)).then((response) => {
            const itemData = response.data();
            if (itemData) {
                setData({ id: response.id, ...response.data() });
            } else {
                navigate("/notFound");
            }
        });
    }, [navigate,params.productId]);

    return (
        <Container>
            {itemDetail.id ? (
                <ItemDetail item={itemDetail} />
            ) : (
                <LoadingWidget />
            )}
        </Container>
    );
};
export default ItemDetailConteinter;
