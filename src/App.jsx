import React, {Component} from 'react';
import "./App.scss";
import TripAdvisorContainer from "./components/TripAdvisor/TripAdvisorContainer.jsx";
import Map from "./components/Map/Map.jsx";
import rotterdamData from "./assets/data/rotterdamData";

class App extends Component {
    state = {
        mapState: {
            lat: rotterdamData.lat,
            lng: rotterdamData.lng,
            zoom: rotterdamData.defaultZoom,
        }
    };

    handleArrowClick = () => {
        // TODO complete state and click handler of Map component
    };

    render() {
        return (
            <div className={"App"}>

                <TripAdvisorContainer/>

                <Map
                    lat={this.state.mapState.lat}
                    lng={this.state.mapState.lng}
                    zoom={this.state.mapState.zoom}
                />

            </div>
        );
    }
}

export default App;
