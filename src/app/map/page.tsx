'use client';

import { useLoadScript } from '@react-google-maps/api';
import Map from '@/components/Map';

const GOOGLE_MAPS_API_KEY = process.env.GOOGLE_MAPS_API_KEY as string;

const libraries: (
  | 'places'
  | 'drawing'
  | 'geometry'
  | 'localContext'
  | 'visualization'
)[] = ['places'];

export default function MapPage() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: GOOGLE_MAPS_API_KEY,
    libraries: libraries,
  });

  if (!isLoaded) return <p>Loading...</p>;

  return (
    <>
      <Map />
    </>
  );
}
