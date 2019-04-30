import React from 'react';

import './Header.scss';
import Navigation from "./Navigation/Navigation.jsx";

const Header = () => (
    <header className={"Header"}>

        <h1>Netherlands Trip Advisor</h1>

        <Navigation/>

    </header>
);

export default Header;