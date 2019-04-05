import React, {Component} from 'react';
import "./App.scss";

import TripAdvisor from "./components/TripAdvisor/TripAdvisor";
import Map from "./components/Map/Map";

class App extends Component {
    render() {
        return (
            <div className={"App"}>

                <TripAdvisor/>

                <Map/>

            </div>
        );
    }
}

export default App;
