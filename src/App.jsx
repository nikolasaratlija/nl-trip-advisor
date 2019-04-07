import React, {Component} from 'react';
import "./App.scss";

import TripAdvisorContainer from "./components/TripAdvisor/TripAdvisorContainer.jsx";
import Map from "./components/Map/Map.jsx";

class App extends Component {
    render() {
        return (
            <div className={"App"}>

                <TripAdvisorContainer/>
                <Map/>

            </div>
        );
    }
}

export default App;
