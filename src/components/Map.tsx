'use client';

import { useEffect, useState } from 'react';
import { GoogleMap, Marker } from '@react-google-maps/api';

interface coords {
  lat: number;
  lng: number;
}

export default function Map() {
  const [map, setMap] = useState<any>(null);
  const [zoom, setZoom] = useState(19);
  const [markerLocation, setMarkerLocation] = useState<coords | null>(null);

  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.watchPosition(({ coords }) => {
        const { latitude, longitude } = coords;

        setMarkerLocation({ lat: latitude, lng: longitude });
      });
    }
  }, []);

  return (
    <div className='w-full h-[80vh]'>
      {markerLocation && (
        <GoogleMap
          options={{
            minZoom: 17,
            mapTypeControl: false,
            clickableIcons: false,
            streetViewControl: false,
          }}
          onLoad={(map) => setMap(map)}
          mapContainerClassName='w-full h-full'
          center={markerLocation}
          zoom={zoom}
          onZoomChanged={() => {
            map?.getZoom() && setZoom(map.getZoom());
          }}>
          <Marker
            position={{
              lat: markerLocation.lat,
              lng: markerLocation.lng,
            }}
          />
        </GoogleMap>
      )}
    </div>
  );
}
