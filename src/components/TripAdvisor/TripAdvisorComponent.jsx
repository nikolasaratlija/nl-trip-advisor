import React from 'react';
import "./styles/_TripAdvisor.scss";

import Info from "./Info.jsx";

const TripAdvisorComponent = (props) => {
    return (
        <div id={"TripAdvisor"} className={"TripAdvisor"}>
            <div
                onClick={props.onLeftArrowClick}
                className="control left"
                id="control-left"
            >
                <i className="fas fa-caret-left fa-2x white"/>
            </div>

            <Info content={props.content}/>

            <div
                onClick={props.onRightArrowClick}
                className="control right"
                id="control-right"
            >
                <i className="fas fa-caret-right fa-2x white"/>
            </div>
        </div>
    );
};

export default TripAdvisorComponent;