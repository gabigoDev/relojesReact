import Item from '../Item';
import React from 'react';

const ItemList = ({ data = [] }) => {
    return (
        data.map(relojes => <Item key={relojes.id} info={relojes} />)
    );
}

export default ItemList; 