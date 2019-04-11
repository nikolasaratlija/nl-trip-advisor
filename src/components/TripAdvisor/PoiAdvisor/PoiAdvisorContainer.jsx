import React, {Component} from 'react';

import PoiAdvisorComponent from "./PoiAdvisorComponent.jsx";
import DialogueFactory from "./DialogueFactory.jsx";

class PoiAdvisorContainer extends Component {
    state = {
        content: "",
        poi: [], // poi stands for points-of-interest
        poiIndex: 0,
        userHasStarted: true
    };

    componentDidMount() {
        this.setState({
            content: DialogueFactory.build("InitDialog"),
            poi: require("../assets/data/points-of-interest.json")
        });
    };

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

        if (this.state.userHasStarted) {
            this.setState({userHasStarted: false});
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
        this.setState({content: DialogueFactory.build(poi.object)});
        this.props.handleArrowOnClick(poi);
    }

    render() {
        return (
            <PoiAdvisorComponent
                onLeftArrowClick={this.handleLeftArrowClick}
                onRightArrowClick={this.handleRightArrowClick}
                content={this.state.content}
            />
        );
    }
}

export default PoiAdvisorContainer;