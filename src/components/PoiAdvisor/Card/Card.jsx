import React from 'react';
import './Card.scss';

const Card = props => (
    <div className={"Card"}>
        <h4>{props.head}</h4>
        <img src={props.photo} alt="TODO"/>
        <p>{props.description}</p>
        <a href={props.website}>Visit website</a>
    </div>
);

export default Card;