import React from 'react';

const Navigation = (props) => (
    <nav>
        <li onClick={() => props.handleClick("PoiAdvisor")}>
            <a href={"javascript:void(0)"}>Tourist Locations</a>
        </li>
        <li onClick={() => props.handleClick("EventsAdvisor")}>
            <a href={"javascript:void(0)"}>Events</a>
        </li>
    </nav>
);

export default Navigation;