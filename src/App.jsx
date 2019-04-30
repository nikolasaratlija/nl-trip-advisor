import React, {Component} from 'react';

import './App.scss';

import Header from "./components/Header/Header";
import Start from "./components/Start/Start";
import PoiAdvisor from "./components/PoiAdvisor/PoiAdvisor";

class App extends Component {
    render() {
        return (
            <div className={"App"}>

                <Header/>

                <Start/>

                <PoiAdvisor/>

            </div>
        );
    }
}

export default App;
