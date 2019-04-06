export const gotoPositionOnMap = (map, props) => {
    map.setCenter({lat: props.lat, lng: props.lng});

    if (props.zoom)
        map.setZoom(props.zoom);
};

export const setMarker = (map, props) => {
    const marker = new google.maps.Marker({
        map: map,
        position: {lat: props.lat, lng: props.lng}
    })
};