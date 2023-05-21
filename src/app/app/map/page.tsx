'use client';

import { useLoadScript } from '@react-google-maps/api';
import { useSupabase } from '@/providers/supabaseProvider';
import { useRouter } from 'next/navigation';
import Map from '@/components/Map';
import { PrimaryButton } from '@/components/Buttons';

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
  const { supabase } = useSupabase();
  const router = useRouter();

  const signOut = async () => {
    await supabase.auth.signOut();

    router.push('/app/login');
  };

  if (!isLoaded) return <p>Loading...</p>;

  return (
    <>
      <Map />
      <PrimaryButton type='button' onClick={signOut}>
        Sign Out
      </PrimaryButton>
    </>
  );
}
