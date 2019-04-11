import React, {Component} from 'react';
import "./styles/_TripAdvisor.scss";
import AdvisorFactory from "./AdvisorFactory.jsx";

class TripAdvisor extends Component {
    state = {
        component: null
    };

    buildComponent(component) {
        this.setState({component: AdvisorFactory.build(component, this.props)})
    }

    render() {
        return (
            <div className={"TripAdvisor"}>
                <div className={"header"}>
                    Netherlands Trip Advisor
                </div>
                {this.state.component ||
                <nav>
                    <li onClick={() => this.buildComponent("PoiAdvisor")}>
                        <a href={"javascript:void(0)"}>Points of interest</a>
                    </li>
                    <li onClick={() => this.buildComponent("EventsAdvisor")}>
                        <a href={"javascript:void(0)"}>Events</a>
                    </li>
                </nav>}
            </div>
        )
    }
}

export default TripAdvisor;