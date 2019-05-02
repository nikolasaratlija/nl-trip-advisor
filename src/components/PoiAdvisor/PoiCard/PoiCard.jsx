import React from 'react';
import './PoiCard.scss';

const PoiCard = props => (
    <div className={"PoiCard"}>
        <h4>{props.head}</h4>
        <img src={props.photo} alt="TODO"/>
        <p>{props.description}</p>
        <a href={props.website}>Visit website</a>
    </div>
);

export default PoiCard;