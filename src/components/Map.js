import GoogleMapReact from 'google-map-react';
import LocationMarker from './LocationMarker';
import React from "react";

const Map = ({eventData, center, zoom}) => {
/*
  id === 8 is wildfires event.
  "categories": [
    {
      "id": 8,
      "title": "Wildfires"
    }
  ],
*/
  const markers = eventData.map(ev => {
    if (ev.categories[0].id === 8) {
      return <LocationMarker lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]} />
    }
    return null;
  })

  return (
    <div className='map'>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyBM2bCgJ5IjAC3vVmKEppGhUbHqYbEoP14' }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        {/*<LocationMarker lat={center.lat} lng={center.lng} />*/}
        {markers}
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
