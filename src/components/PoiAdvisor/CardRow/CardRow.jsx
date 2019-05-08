import React from 'react';
import './CardRow.scss';
import Card from '../Card/Card.jsx';

const CardRow = props => {
    const cards = props.data.map(value => <Card {...value}/>);

    // capitalizes and replaces underscores with a space
    const category =
        (props.category.charAt(0).toUpperCase() + props.category.slice(1)).replace(/_/g, " ");

    return (
        <div className={"CardRow"}>
            <h3>{category}</h3>
            <div className={"card-container"}>
                {cards}
            </div>
        </div>
    );
};

export default CardRow;