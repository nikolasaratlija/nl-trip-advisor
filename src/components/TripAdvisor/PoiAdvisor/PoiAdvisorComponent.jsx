import React from 'react';
import "../styles/_TripAdvisor.scss";
import "./styles/_PoiAdvisor.scss";

import Info from "./Info.jsx";

const PoiAdvisorComponent = (props) => {
    return (
        <div className={"PoiAdvisor"}>
            <div
                onClick={props.onLeftArrowClick}
                className="control left"
                id="control-left"
            >
                &larr;
            </div>

            <Info content={props.content}/>

            <div
                onClick={props.onRightArrowClick}
                className="control right"
                id="control-right"
            >
                &rarr;
            </div>
        </div>
    );
};

export default PoiAdvisorComponent;