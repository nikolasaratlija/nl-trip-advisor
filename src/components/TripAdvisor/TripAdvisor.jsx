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
                {this.state.component ||
                <nav>
                    <li onClick={() => this.buildComponent("PoiAdvisor")}>
                        <a href={"# "}>Points of interest</a>
                    </li>
                    <li onClick={() => this.buildComponent("EventsAdvisor")}>
                        <a href={"# "}>Events</a>
                    </li>
                </nav>}
            </div>
        )
    }
}

export default TripAdvisor;