import React, {Component} from 'react';

import TripAdvisorComponent from "./TripAdvisorComponent";

class TripAdvisorContainer extends Component {
    state = {
        file: "init-dialog",
        content: "",
    };

    componentDidMount() {
    }

    render() {
        return <TripAdvisorComponent/>;
    }
}

export default TripAdvisorContainer;