import React, {Component} from 'react';

import './App.scss';

import Header from "./components/Header/Header";
import Start from "./components/Start/Start";

class App extends Component {
    render() {
        return (
            <div className={"App"}>

                <Header/>

                <Start/>

            </div>
        );
    }
}

export default App;
