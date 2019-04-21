import React, {Component} from 'react';
import './styles/_Map.scss';
import scriptLoader from 'react-async-script-loader';

const styles = [
    {
        featureType: "poi",
        elementType: "labels",
        stylers: [
            {visibility: "off"}
        ]
    }
];
// TODO fix map component
class Map extends Component {
    componentWillReceiveProps({isScriptLoadSucceed}) {
        if (isScriptLoadSucceed) {
            window.map = new window.google.maps.Map(this.map, {
                zoom: this.props.zoom,
                center: this.props.center,

                disableDefaultUI: true,
                styles: styles,
            });
        }
    }

    render() {
        return (
            <div
                ref={map => this.map = map}
                className={"Map"}
            />
        );
    }
}

export default scriptLoader(
    [`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_API}`]
)(Map);