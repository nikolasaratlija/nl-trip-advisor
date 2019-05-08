import React, {Component} from 'react';

import './PoiAdvisor.scss';
import CardRow from "./CardRow/CardRow.jsx";

class PoiAdvisor extends Component {
    render() {
        const touristLocations = [
            {
                "key": 0,
                "category": "museums",
                "data": [
                    {
                        "key": 0,
                        "name": "Rijksmuseum"
                    },
                    {
                        "key": 1,
                        "name": "Van Gogh museum"
                    }
                ]
            },
            {
                "key": 1,
                "category": "amusement_parks",
                "data": [
                    {
                        "key": 0,
                        "name": "Efteling"
                    }
                ]
            },
            {
                "key": 2,
                "category": "outdoors_places",
                "data": [
                    {
                        "key": 0,
                        "name": "Kinderdijk"
                    },
                    {
                        "key": 1,
                        "name": "Keukenhof"
                    }
                ]
            },
            {
                "key": 3,
                "category": "buildings",
                "data": [
                    {
                        "key": 0,
                        "name": "Euromast"
                    }
                ]
            }
        ];

        const items = touristLocations.map(value =>
            <CardRow
                key={value.key}
                category={value.category}
                data={value.data}
            />
        );

        return (
            <div className={"advisor-box PoiAdvisor"}>
                <h3>Beautiful locations to visit:</h3>
                {items}
            </div>
        );
    }
}

export default PoiAdvisor;