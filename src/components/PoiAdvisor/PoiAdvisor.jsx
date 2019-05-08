import React, {Component} from 'react';

import './PoiAdvisor.scss';
import CardRow from "./CardRow/CardRow.jsx";

class PoiAdvisor extends Component {
    render() {
        const touristLocations = [
            {
                "key": 0,
                "category": "buildings",
                "data": [
                    {
                        "key": 0,
                        "name": "Euromast"
                    }
                ]
            },
            {
                "key": 1,
                "category": "outdoor_places",
                "data": [
                    {
                        "key": 0,
                        "name": "Kinderdijk",
                        "photo": "https://lh3.googleusercontent.com/p/AF1QipOE7Gg_cfHklIbuSmxEOqEJvv8xB0xNtnTx_nZr=s1600-w400"
                    },
                    {
                        "key": 1,
                        "name": "Keukenhof",
                        "photo": "https://lh3.googleusercontent.com/p/AF1QipNHVuBtFZL__6BusSaVXIXSmlj_mz28j5YhEQqY=s1600-w400",
                    }
                ]
            },
            {
                "key": 2,
                "category": "museums",
                "data": [
                    {
                        "key": 0,
                        "name": "Rijksmuseum",
                        "photo": "https://lh3.googleusercontent.com/p/AF1QipM6R5SzyPOjlWGNe_hPHcvoTp_Gf_qllHsLyTbD=s1600-w400",
                    },
                    {
                        "key": 1,
                        "name": "Van Gogh museum",
                        "photo": "https://lh3.googleusercontent.com/p/AF1QipNAH8awqbHmcSO9ca4eATT84RPbpVa5UpaFLx4R=s1600-w400"
                    }
                ]
            },
            {
                "key": 3,
                "category": "amusement_parks",
                "data": [
                    {
                        "key": 0,
                        "name": "Efteling",
                        "photo": "https://lh3.googleusercontent.com/p/AF1QipM3-WxFLlijFCLC--9AxiNBeOjkZM0MaMX-DLVm=s1600-w400"
                    }
                ]
            }
        ];

        const cardRows = touristLocations.map(value => <CardRow {...value}/>);

        return (
            <div className={"advisor-box PoiAdvisor"}>
                <h2>Beautiful locations to visit:</h2>
                {cardRows}
            </div>
        );
    }
}

export default PoiAdvisor;