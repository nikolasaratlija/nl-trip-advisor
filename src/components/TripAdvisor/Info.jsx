import React from 'react';
import "./styles/_Info.scss";

const Info = (props) => {
    return (
        <div className={"Info"}>
            {props.content}
        </div>
    )
};

export default Info;