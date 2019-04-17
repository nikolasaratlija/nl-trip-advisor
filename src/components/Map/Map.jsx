import React from 'react';
import {compose, withProps} from "recompose";
import "./styles/_Map.scss";
import {withScriptjs, withGoogleMap, GoogleMap, KmlLayer} from "react-google-maps";

const styles = [
    {
        featureType: "poi",
        elementType: "labels",
        stylers: [
            {visibility: "off"}
        ]
    }
];

const defaultMapOptions = {
    disableDefaultUI: true,
    styles
};

const Map = compose(
    withProps({
        googleMapURL:
            `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_API}&v=3.exp&libraries=geometry,drawing,places`,
        loadingElement: <div style={{height: '100%'}}/>,
        containerElement: <div className={"Map"}/>,
        mapElement: <div style={{height: '100%'}}/>
    }),
    withScriptjs,
    withGoogleMap
)(props => (
    <GoogleMap
        zoom={props.zoom}
        center={{lat: props.lat, lng: props.lng}}
        defaultOptions={defaultMapOptions}
    >
        <KmlLayer url={"https://www.dropbox.com/s/j69qh1g9wbkutg5/rotterdam.kml?dl=1"}/>
    </GoogleMap>
));

export default Map;