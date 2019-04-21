import React, {Component} from 'react';
import "./styles/_Sidebar.scss";
import AdvisorFactory from "./AdvisorFactory.jsx";
import Header from "./Header";
import Navigation from "./Navigation";
import Controls from "./Controls";

/*  This component is simply a container for an 'Advisor' components i.e. PoiAdvisor.
    When no action has been taken by the user, the Navigation component is displayed.
    When the user clicks on one of the buttons of the Navigation component, the Navigation component will be replaced. */
class Sidebar extends Component {
    state = {
        advisorComponent: null,
    };

    createAdvisorComponent(component) {
        this.setState({advisorComponent: AdvisorFactory.build(component, this.props)});
    }

    backToNav = () => {
        this.setState({advisorComponent: null});
    };

    render() {
        /*
        Initially this.state.advisorComponent is null. So const component evaluates to the Navigation component.
        When the user clicks on one of the options on the Nav, the value of this.state.advisorComponent gets changed.
        Because state has been changed, the Sidebar component gets rerendered.
        This time this.state.advisorComponent is not null, but a React component which gets rendered instead of Navigation.
        */
        const component =
            this.state.advisorComponent || <Navigation handleClick={(component) => this.createAdvisorComponent(component)}/>;

        return (
            <div className={"Sidebar"}>

                <Header/>

                {/* When component === this.state.advisorComponent evaluates to true
                    it means that a component has been rendered that is NOT Navigation,
                    thus the Controls component should be rendered.
                    Could be read as: if component === an Advisor component: render Controls. */}
                {component === this.state.advisorComponent && <Controls handleHomeButtonClick={this.backToNav}/>}

                {component}

            </div>
        );
    }
}

export default Sidebar;