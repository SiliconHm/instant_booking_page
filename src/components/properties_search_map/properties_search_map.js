import React, { useCallback, useEffect, useMemo, useState } from "react";
import GoogleMapReact from "google-map-react";

import Marker from "./marker";

const BOOTSTRAP_URL_KEYS = { key: process.env.REACT_APP_GOOGLE_MAP_KEY };
const DEFAULT_ZOOM = 1;
const DEFAULT_CENTER = { lat: 51.496644, lng: -0.147614 };

const MAP_SIZE = {
  width: "100%",
  height: "100%",
};

const BOUND_PADDING = 0;

const getMapBounds = (maps, points) => {
  const bounds = new maps.LatLngBounds();

  points.forEach(([latitude, longitude]) => {
    bounds.extend(new maps.LatLng(latitude, longitude));
  });

  return bounds;
};

const getPropertiesBounds = (maps, properties) => {
  
  const points = properties.map(({ latitude, longitude }) => {
    return [Number(latitude), Number(longitude)];
  });

  return getMapBounds(maps, points);
};


const getDefaultBounds = (maps, defaultBounds) => {

  const formattedBounds = {
    ne: {
      lat: defaultBounds.latitude.lte,
      lng: defaultBounds.longitude.lte,
    },
    nw: {
      lat: defaultBounds.latitude.gte,
      lng: defaultBounds.longitude.lte,
    },
    se: {
      lat: defaultBounds.latitude.lte,
      lng: defaultBounds.longitude.gte,
    },
    sw: {
      lat: defaultBounds.latitude.gte,
      lng: defaultBounds.longitude.gte,
    },
  };

  const points = Object.values(formattedBounds).map(({ lat, lng }) => {
    return [lat, lng];
  });

  return getMapBounds(maps, points);
};

export default function PropertiesSearchMap({
  properties,
  defaultBounds,
  onChangeCallback,
  onSelectProperty,
  highlightedProperties,
  onMarkerMouseOver,
  onMarkerMouseOut,
}) {
  const [mapInstance, setMapInstance] = useState(null);
  // console.log(properties)
  // console.log('default bounds: ', defaultBounds)
  const onGoogleApiLoaded = useCallback(
    (newMapInstance) => {

      // console.log('Default: ', defaultBounds)
      
      if (defaultBounds) {
        const bounds = getDefaultBounds(newMapInstance.maps, defaultBounds);

        newMapInstance.map.fitBounds(bounds, BOUND_PADDING);
      }
      // console.log('new map: ')
      setMapInstance(newMapInstance);
    },
    [defaultBounds],
  );

  useEffect(() => {
    if (!mapInstance || !properties || defaultBounds) {
      return;
    }


    const bounds = getPropertiesBounds(mapInstance.maps, properties);

    mapInstance.map.fitBounds(bounds, BOUND_PADDING);
  }, [mapInstance, defaultBounds, properties]);

  const markers = useMemo(
    () =>
      properties?.map((item) => {
        const { id, latitude, longitude } = item;

        return (
          <Marker
            isHighlighted={highlightedProperties[id]}
            key={id}
            lat={Number(latitude)}
            lng={Number(longitude)}
            item={item}
            onMouseOver={onMarkerMouseOver}
            onMouseOut={onMarkerMouseOut}
            onSelect={onSelectProperty}
          /> 
        );
      }),
    [properties, onSelectProperty, onMarkerMouseOver, onMarkerMouseOut, highlightedProperties],
  );

  const handleChange = ({ bounds }) => {
    if (!mapInstance) {
      return;
    }

    const formattedCoordinates = {
      latitude: {
        lte: bounds.ne.lat,
        gte: bounds.sw.lat,
      },
      longitude: {
        lte: bounds.ne.lng,
        gte: bounds.sw.lng,
      },
    };

    onChangeCallback(formattedCoordinates);
  };

  return (
    <div style={{ height: MAP_SIZE.height, width: MAP_SIZE.width }}>
      <GoogleMapReact
        bootstrapURLKeys={BOOTSTRAP_URL_KEYS}
        onGoogleApiLoaded={onGoogleApiLoaded}
        center={DEFAULT_CENTER}
        zoom={DEFAULT_ZOOM}
        onChange={handleChange}
        yesIWantToUseGoogleMapApiInternals
      >
        {markers}
      </GoogleMapReact>
    </div>
  );
}
