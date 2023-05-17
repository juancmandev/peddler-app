'use client';

import { useEffect, useState } from 'react';
import { GoogleMap } from '@react-google-maps/api';

interface coords {
  lat: number;
  lng: number;
}

const radius = 500;

const Map = () => {
  const [map, setMap] = useState<any>(null);
  const [zoom, setZoom] = useState(19);
  const [markerLocation, setMarkerLocation] = useState<coords | null>(null);

  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(({ coords }) => {
        const { latitude, longitude } = coords;

        setMarkerLocation({ lat: latitude, lng: longitude });
      });
    }
  }, []);

  const handleCursorMarkerLocation = (e: any) =>
    setMarkerLocation({ lat: e.latLng.lat(), lng: e.latLng.lng() });

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
          onClick={handleCursorMarkerLocation}
          center={markerLocation}
          zoom={zoom}
          onZoomChanged={() => {
            map?.getZoom() && setZoom(map.getZoom());
          }}></GoogleMap>
      )}
    </div>
  );
};

export default Map;
