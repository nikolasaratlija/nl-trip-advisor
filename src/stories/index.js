import React from 'react';

import {storiesOf} from '@storybook/react';
import '../App.scss';

import Footer from "../components/Footer/Footer";

storiesOf('Footer', module)
    .add('Default', () => <Footer/>);