import React, {Component} from 'react';
import "./styles/_TripAdvisor.scss";
import AdvisorFactory from "./AdvisorFactory.jsx";
import Header from "./Header";
import Navigation from "./Navigation";
import Controls from "./Controls";

class TripAdvisor extends Component {
    state = {
        advisor: null,
    };

    mountAdvisor(component) {
        this.setState({advisor: AdvisorFactory.build(component, this.props)});
    }

    backToNav = () => {
        this.setState({advisor: null});
    };

    render() {
        /*
        Initially this.state.advisor is null. So const component evaluates to the Navigation component.
        When the user clicks on one of the options on the Nav, the value of this.state.advisor gets changed.
        Because state has been changed, the TripAdvisor component gets rerendered.
        This time this.state.advisor is not null, but a React component which gets rendered instead of Navigation.
        */
        const component =
            this.state.advisor || <Navigation handleClick={(component) => this.mountAdvisor(component)}/>;

        return (
            <div className={"TripAdvisor"}>

                <Header/>

                {/* When component === this.state.advisor evaluates to true,
                it means that a component has been rendered that is NOT Navigation.
                Thus the Controls component will be rendered.
                Could be read as: if component === an Advisor component, then render Controls. */}
                {component === this.state.advisor && <Controls handleClick={this.backToNav}/>}

                {component}

            </div>
        );
    }
}

export default TripAdvisor;