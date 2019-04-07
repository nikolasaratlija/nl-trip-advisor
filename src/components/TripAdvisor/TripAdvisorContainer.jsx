import React, {Component} from 'react';

import TripAdvisorComponent from "./TripAdvisorComponent.jsx";
import DialogueFactory from "./DialogueFactory.jsx";

class TripAdvisorContainer extends Component {
    state = {
        content: "",
        poi: [],
        poiIndex: 0
    };

    componentDidMount() {
        this.setState({
            content: DialogueFactory.build("InitDialog"),
            poi: require("./assets/points-of-interest.json")
        });
    }

    handleLeftArrowClick() {
        console.log("left arrow clicked")
    }

    handleRightArrowClick() {
        console.log("right arrow clicked")
    }

    render() {
        return (
            <TripAdvisorComponent
                onLeftArrowClick={this.handleLeftArrowClick}
                onRightArrowClick={this.handleRightArrowClick}
                content={this.state.content}
            />
        );
    }
}

export default TripAdvisorContainer;