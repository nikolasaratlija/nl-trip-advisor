import React from 'react';
import './CardRow.scss';
import Card from '../Card/Card.jsx';

const CardRow = props => {
    const cards = props.data.map(value => <Card {...value}/>);

    const category =
        props.category.charAt(0).toUpperCase() + props.category.slice(1);

    return (
        <div className={"CardRow"}>
            <h4>{category}</h4>
            <div className={"card-container"}>
                {cards}
            </div>
        </div>
    );
};

export default CardRow;