import React from 'react';
import "./styles/_PoiAdvisor.scss";

import Info from "./Info.jsx";

const PoiAdvisorComponent = (props) => {
    return (
        <div className={"PoiAdvisor"}>
            <div
                onClick={props.onLeftArrowClick}
                className="control left"
            >
                &larr;
            </div>

            <Info>
                {props.content}
            </Info>

            <div
                onClick={props.onRightArrowClick}
                className="control right"
            >
                &rarr;
            </div>
        </div>
    );
};

export default PoiAdvisorComponent;