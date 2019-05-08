import React from 'react';
import './Card.scss';

const Card = props => (
    <div className={"Card"}>
        <h4>{props.name}</h4>
        <img src={props.photo} alt={props.name}/>
        <p>{props.description}</p>
        <a href={props.website}>Visit website</a>
    </div>
);

export default Card;