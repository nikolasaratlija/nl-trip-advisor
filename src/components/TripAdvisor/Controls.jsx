import React from 'react';
import "./styles/_Controls.scss";

const Controls = props => (
    <div className={"Controls"}>
        <span onClick={props.handleClick}>
            Home
        </span>
    </div>
);

export default Controls;