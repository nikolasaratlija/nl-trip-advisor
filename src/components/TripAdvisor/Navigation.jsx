import React from 'react';

const Navigation = (props) => (
    <nav>
        <li onClick={() => props.handleClick("PoiAdvisor")}>
            <button className={"link-button"}>Tourist Locations</button>
        </li>
        <li onClick={() => props.handleClick("EventsAdvisor")}>
            <button className={"link-button"}>Events</button>
        </li>
    </nav>
);

export default Navigation;