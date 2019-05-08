import React from 'react';
import './CategoryRow.scss';
import Card from '../Card/Card.jsx';

const CategoryRow = props => {
    const cards = props.data.map(value => <Card {...value}/>);

    return (
        <div className={"CategoryRow"}>
            <h4>{props.category}</h4>
            {cards}
        </div>
    );
};


export default CategoryRow;