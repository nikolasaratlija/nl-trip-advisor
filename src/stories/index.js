import React from 'react';

import {storiesOf} from '@storybook/react';

import rotterdamData from "../components/TripAdvisor/assets/data/rotterdamData";
import Map from "../components/Map/Map";

storiesOf('Map', module)
    .add(
        'Default',
        () =>
            <Map
                center={{lat: rotterdamData.lat, lng: rotterdamData.lng}}
                zoom={rotterdamData.defaultZoom}
            />
    );
