function initMap() {
    const rotterdamData = {
        lat: 51.9054439,
        lng: 4.4666374,
        defaultZoom: 12,
        KmlLayerLink: "https://www.dropbox.com/s/j69qh1g9wbkutg5/rotterdam.kml?dl=1"
    };

    const styles = [
        {
            featureType: "poi",
            elementType: "labels",
            stylers: [
                {visibility: "off"}
            ]
        }
    ];

    window.map = new google.maps.Map(document.getElementById('Map'), {
        center: {lat: rotterdamData.lat, lng: rotterdamData.lng},
        zoom: rotterdamData.defaultZoom,
        disableDefaultUI: true,
        styles: styles
    });

    new google.maps.KmlLayer({
        url: rotterdamData.KmlLayerLink,
        map: map,
    });
}
