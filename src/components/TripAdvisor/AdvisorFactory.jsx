import React from 'react';

import PoiAdvisorContainer from "./PoiAdvisor/PoiAdvisorContainer.jsx";

class AdvisorFactory {
    static build(component, props) {
        switch (component) {
            case "PoiAdvisor":
                return (
                    <PoiAdvisorContainer
                        handleArrowOnClick={props.handleArrowOnClick}
                    />
                );
            case "EventsAdvisor":
                return "Not made yet";
            default:
                return undefined
        }
    }
}

export default AdvisorFactory;