import { H1 } from '@/components/Headings';
import Link from 'next/link';

export default function Home() {
  return (
    <div className='w-screen h-screen grid place-items-center'>
      <div>
        <H1 className='text-cyan-500'>Peddler App</H1>
        <Link href={'/about'}>About</Link>
      </div>
    </div>
  );
}
