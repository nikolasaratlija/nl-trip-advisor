import React, {Component} from 'react';
import "./App.scss";

import TripAdvisorContainer from "./components/TripAdvisor/TripAdvisorContainer.jsx";
import Map from "./components/Map/Map.jsx";

class App extends Component {
    state = {
        mapState: {
            lat: 0,
            lng: 0,
            zoom: 10,
        }
    };

    handleArrowClick = () => {
        // TODO complete state and click handler of Map component
    };

    render() {
        return (
            <div className={"App"}>

                <TripAdvisorContainer test={this.handleArrowClick}/>
                <Map/>

            </div>
        );
    }
}

export default App;
