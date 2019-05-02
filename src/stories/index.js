import React from 'react';

import {storiesOf} from '@storybook/react';
import '../App.scss';

import Start from '../components/Start/Start';
import Header from "../components/Header/Header";
import Navigation from "../components/Header/Navigation/Navigation";
import PoiAdvisor from "../components/PoiAdvisor/PoiAdvisor";
import PoiCard from "../components/PoiAdvisor/PoiCard/PoiCard";

storiesOf('Start', module)
    .add('Default', () => <Start/>);

storiesOf('Header', module)
    .add('Default', () => <Header/>);

storiesOf('Navigation', module)
    .add('Default', () => <Navigation/>);

storiesOf('PoiAdvisor', module)
    .add('Default', () => <PoiAdvisor/>);

storiesOf('PoiCard', module)
    .add('Default', () => (
        <PoiCard
            key={0}
            head={"Kinderdijk"}
            description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure."}
            photo={"https://lh3.googleusercontent.com/p/AF1QipOE7Gg_cfHklIbuSmxEOqEJvv8xB0xNtnTx_nZr=s1600-w600"}
            website={"https://www.kinderdijk.com/"}
        />
    ));