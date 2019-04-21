import React, {Component} from 'react';
import "./App.scss";
import Sidebar from "./components/TripAdvisor/Sidebar.jsx";
import Map from "./components/Map/Map.jsx";
import rotterdamData from "./components/TripAdvisor/assets/data/rotterdamData";

class App extends Component {
    state = {
        lat: rotterdamData.lat,
        lng: rotterdamData.lng,
        zoom: rotterdamData.defaultZoom,
    };

    setMapProps = data => {
        this.setState({
            lat: data.lat,
            lng: data.lng,
            zoom: data.zoom,
        });
    };

    render() {
        return (
            <div className={"App"}>

                <Sidebar
                    handleArrowOnClick={(data) => this.setMapProps(data)}
                />

                <Map
                    center={{lat: this.state.lat, lng: this.state.lng}}
                    zoom={this.state.zoom}
                />

            </div>
        );
    }
}

export default App;
