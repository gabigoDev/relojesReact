import React from "react";
import ItemCount from "./ItemCount";
import Card from 'react-bootstrap/Card';

//const Item = ({ info }) => {
   // return (
    
     //   <a href='' className="relojes">
       //     <img class="card" src={info.image} alt="" />
         //   <p>{info.title}</p>
        //</a>
        
    //** 


const Item = ({ info }) => {
return (
    <a href='' className="relojes">
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src= {info.image} alt=""/>
    <Card.Body>
        <Card.Title>{info.title}</Card.Title>
        <ItemCount initial={1} stock={5} onAdd={Item}/>
    </Card.Body>
    </Card>
    </a>
)
};


export default Item; 