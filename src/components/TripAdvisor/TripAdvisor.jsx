import React, {Component} from 'react';
import "./styles/_TripAdvisor.scss";
import AdvisorFactory from "./AdvisorFactory.jsx";
import Header from "./Header";
import Navigation from "./Navigation";
import Controls from "./Controls";

class TripAdvisor extends Component {
    state = {
        component: null
    };

    buildComponent(component) {
        this.setState({component: AdvisorFactory.build(component, this.props)});
    }

    backToNav = () => {
        this.setState({component: null});
    };

    render() {
        const component =
            this.state.component ||
            <Navigation handleClick={(component) => this.buildComponent(component)}/>;

        return (
            <div className={"TripAdvisor"}>

                <Header/>

                {component === this.state.component && <Controls handleClick={this.backToNav}/>}

                {component}

            </div>
        );
    }
}

export default TripAdvisor;