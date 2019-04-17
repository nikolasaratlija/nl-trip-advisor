import React from 'react';

import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {linkTo} from '@storybook/addon-links';

import PoiAdvisorContainer from "../components/TripAdvisor/PoiAdvisor/PoiAdvisorContainer.jsx";
import App from "../App";

storiesOf('App', module)
    .add('Default', () => <App/>);

storiesOf('PoiAdvisor', module)
    .add('Default', () => <PoiAdvisorContainer/>);
