import React, {Component} from 'react';
import "./App.scss";

import Guide from "./components/Adviser/Guide";
import Map from "./components/Map/Map";

class App extends Component {
    render() {
        return (
            <div className={"App"}>

                <Guide/>

                <Map/>

            </div>
        );
    }
}

export default App;
