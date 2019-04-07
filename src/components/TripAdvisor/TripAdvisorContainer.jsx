import React, {Component} from 'react';

import TripAdvisorComponent from "./TripAdvisorComponent.jsx";
import DialogueFactory from "./DialogueFactory.jsx";

class TripAdvisorContainer extends Component {
    state = {
        content: "",
        poi: [], // poi stands for point-of-interest
        poiIndex: 0,
        isAtStartOfPoiArray: true
    };

    componentDidMount() {
        this.setState({
            content: DialogueFactory.build("InitDialog"),
            poi: require("./assets/points-of-interest.json")
        });


    }

    handleLeftArrowClick = () => {
        if (this.state.poiIndex === 0)
            return false;

        this.setState(prevState => {
            return {poiIndex: prevState.poiIndex - 1};
        }, () => {
            this.handlePoiData(this.state.poi[this.state.poiIndex]);
        });
    };

    handleRightArrowClick = () => {
        if (this.state.poiIndex === this.state.poi.length - 1)
            return false;

        if (this.state.isAtStartOfPoiArray) {
            this.setState({isAtStartOfPoiArray: false});
            this.handlePoiData(this.state.poi[0]);
            return;
        }

        this.setState(prevState => {
            return {poiIndex: prevState.poiIndex + 1};
        }, () => {
            this.handlePoiData(this.state.poi[this.state.poiIndex]);
        });
    };

    handlePoiData(poi) {
        this.setState({
            content: DialogueFactory.build(poi.object)
        });
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