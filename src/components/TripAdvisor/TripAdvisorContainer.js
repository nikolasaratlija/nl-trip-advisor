import React, {Component} from 'react';

import TripAdvisorComponent from "./TripAdvisorComponent";

class TripAdvisorContainer extends Component {
    state = {
        file: "intro.html",
        content: "",
    };

    componentDidMount() {
    }

    render() {
        return <TripAdvisorComponent/>;
    }
}

export default TripAdvisorContainer;