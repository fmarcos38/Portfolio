import React from "react";
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

//ancho y largo vista mapa
const containerStyle = {
    width: '400px',
    height: '400px'
};
//lat y lon de mar del plata
const center = {
    lat: -38.00042,
    lng: -57.5562
};


function GeolocalizacionMDP() {

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "TU APIKEY" /* ---> TU APIKEY <---*/
    })
    
    const [map, setMap] = React.useState(null)
    
    const onLoad = React.useCallback(function callback(map) {
        // This is just an example of getting and using the map instance!!! don't just blindly copy!
        const bounds = new window.google.maps.LatLngBounds(center);
        map.fitBounds(bounds);
    
        setMap(map)
    }, []);
    
    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, [])
    
    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
            onLoad={onLoad}
            onUnmount={onUnmount}
        >
            { /* Child components, such as markers, info windows, etc. */ }
            <></>
        </GoogleMap>
    ) : <></>
}


export default GeolocalizacionMDP