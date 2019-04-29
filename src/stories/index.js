import React from 'react';

import {storiesOf} from '@storybook/react';
import '../App.scss';

import Start from '../components/Start/Start';
import Header from "../components/Header/Header";
import Navigation from "../components/Header/Navigation/Navigation";

storiesOf('Start', module)
    .add('Default', () => <Start/>);

storiesOf('Header', module)
    .add('Default', () => <Header/>);

storiesOf('Navigation', module)
    .add('Default', () => <Navigation/>);