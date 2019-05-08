import React, {Component} from 'react';

import './PoiAdvisor.scss';
import Card from "./Card/Card";

class PoiAdvisor extends Component {
    componentDidMount() {
    }

    render() {
        const data = [
            {
                key: 0,
                name: "Kinderdijk",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure.",
                photo: "https://lh3.googleusercontent.com/p/AF1QipOE7Gg_cfHklIbuSmxEOqEJvv8xB0xNtnTx_nZr=s1600-w600",
                website: "https://www.kinderdijk.com/",
            },
            {
                key: 1,
                name: "Kinderdijk",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure.",
                photo: "https://lh3.googleusercontent.com/p/AF1QipOE7Gg_cfHklIbuSmxEOqEJvv8xB0xNtnTx_nZr=s1600-w600",
                website: "https://www.kinderdijk.com/",
            },
            {
                key: 2,
                name: "Kinderdijk",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure.",
                photo: "https://lh3.googleusercontent.com/p/AF1QipOE7Gg_cfHklIbuSmxEOqEJvv8xB0xNtnTx_nZr=s1600-w600",
                website: "https://www.kinderdijk.com/",
            },
            {
                key: 3,
                name: "Kinderdijk",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure.",
                photo: "https://lh3.googleusercontent.com/p/AF1QipOE7Gg_cfHklIbuSmxEOqEJvv8xB0xNtnTx_nZr=s1600-w600",
                website: "https://www.kinderdijk.com/",
            },
            {
                key: 4,
                name: "Kinderdijk",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure.",
                photo: "https://lh3.googleusercontent.com/p/AF1QipOE7Gg_cfHklIbuSmxEOqEJvv8xB0xNtnTx_nZr=s1600-w600",
                website: "https://www.kinderdijk.com/",
            },
            {
                key: 5,
                name: "Kinderdijk",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure.",
                photo: "https://lh3.googleusercontent.com/p/AF1QipOE7Gg_cfHklIbuSmxEOqEJvv8xB0xNtnTx_nZr=s1600-w600",
                website: "https://www.kinderdijk.com/",
            },
            {
                key: 6,
                name: "Kinderdijk",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure.",
                photo: "https://lh3.googleusercontent.com/p/AF1QipOE7Gg_cfHklIbuSmxEOqEJvv8xB0xNtnTx_nZr=s1600-w600",
                website: "https://www.kinderdijk.com/",
            },
        ];
        const touristLocations = [
            {
                "category": "museum",
                "data": [
                    {
                        "name": "Rijksmuseum"
                    },
                    {
                        "name": "Van Gogh museum"
                    }
                ]
            },
            {
                "category": "amusement_park",
                "data": [
                    {
                        "name": "Efteling"
                    }
                ]
            },
            {
                "category": "outdoors_places",
                "data": [
                    {
                        "name": "Kinderdijk"
                    },
                    {
                        "name": "Keukenhof"
                    }
                ]
            },
            {
                "category": "buildings",
                "data": [
                    {
                        "name": "Euromast"
                    }
                ]
            }
        ];

        const items = data.map(value => <Card {...value}/>);

        return (
            <div className={"advisor-box PoiAdvisor"}>
                <h3>Beautiful locations to visit:</h3>
                {items}
            </div>
        );
    }
}

export default PoiAdvisor;