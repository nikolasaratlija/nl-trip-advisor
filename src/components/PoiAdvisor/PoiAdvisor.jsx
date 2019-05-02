import React, {Component} from 'react';

import './PoiAdvisor.scss';
import PoiCard from "./PoiCard/PoiCard";

class PoiAdvisor extends Component {
    componentDidMount() {
    }

    render() {
        const data = [
            {
                key: 0,
                head: "Kinderdijk",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure.",
                photo: "https://lh3.googleusercontent.com/p/AF1QipOE7Gg_cfHklIbuSmxEOqEJvv8xB0xNtnTx_nZr=s1600-w600",
                website: "https://www.kinderdijk.com/",
            },
            {
                key: 1,
                head: "Kinderdijk",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure.",
                photo: "https://lh3.googleusercontent.com/p/AF1QipOE7Gg_cfHklIbuSmxEOqEJvv8xB0xNtnTx_nZr=s1600-w600",
                website: "https://www.kinderdijk.com/",
            },
            {
                key: 2,
                head: "Kinderdijk",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure.",
                photo: "https://lh3.googleusercontent.com/p/AF1QipOE7Gg_cfHklIbuSmxEOqEJvv8xB0xNtnTx_nZr=s1600-w600",
                website: "https://www.kinderdijk.com/",
            },
            {
                key: 3,
                head: "Kinderdijk",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure.",
                photo: "https://lh3.googleusercontent.com/p/AF1QipOE7Gg_cfHklIbuSmxEOqEJvv8xB0xNtnTx_nZr=s1600-w600",
                website: "https://www.kinderdijk.com/",
            },
            {
                key: 4,
                head: "Kinderdijk",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure.",
                photo: "https://lh3.googleusercontent.com/p/AF1QipOE7Gg_cfHklIbuSmxEOqEJvv8xB0xNtnTx_nZr=s1600-w600",
                website: "https://www.kinderdijk.com/",
            },
            {
                key: 5,
                head: "Kinderdijk",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure.",
                photo: "https://lh3.googleusercontent.com/p/AF1QipOE7Gg_cfHklIbuSmxEOqEJvv8xB0xNtnTx_nZr=s1600-w600",
                website: "https://www.kinderdijk.com/",
            },
            {
                key: 6,
                head: "Kinderdijk",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure.",
                photo: "https://lh3.googleusercontent.com/p/AF1QipOE7Gg_cfHklIbuSmxEOqEJvv8xB0xNtnTx_nZr=s1600-w600",
                website: "https://www.kinderdijk.com/",
            },
        ];

        const items = data.map(value => (
            <PoiCard {...value}/>
        ));

        return (
            <div className={"advisor-box PoiAdvisor"}>
                <h3>Beautiful locations to visit:</h3>
                {items}
            </div>
        );
    }
}

export default PoiAdvisor;