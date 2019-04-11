import React, {Component} from 'react';
import "./App.scss";
import TripAdvisorContainer from "./components/TripAdvisor/TripAdvisorContainer.jsx";
import Map from "./components/Map/Map.jsx";
import rotterdamData from "./assets/data/rotterdamData";

class App extends Component {
    state = {
        lat: rotterdamData.lat,
        lng: rotterdamData.lng,
        zoom: rotterdamData.defaultZoom,
    };

    handleArrowOnClick = data => {
        this.setState({
            lat: data.lat,
            lng: data.lng,
            zoom: data.zoom,
        })
    };

    render() {
        return (
            <div className={"App"}>

                <TripAdvisorContainer
                    handleArrowOnClick={(data) => this.handleArrowOnClick(data)}
                />

                <Map
                    lat={this.state.lat}
                    lng={this.state.lng}
                    zoom={this.state.zoom}
                />

            </div>
        );
    }
}

export default App;
