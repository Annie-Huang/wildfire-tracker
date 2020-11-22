import GoogleMapReact from 'google-map-react';
import LocationMarker from './LocationMarker';
import React from "react";

const Map = ({center, zoom}) => {
  return (
    <div className='map'>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyBM2bCgJ5IjAC3vVmKEppGhUbHqYbEoP14' }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        <LocationMarker lat={center.lat} lng={center.lng} />
      </GoogleMapReact>
    </div>
  );
};

Map.defaultProps = {
  center: {
    lat: 42.3265,
    lng: -122.8756
  },
  zoom: 6
}

export default Map;
