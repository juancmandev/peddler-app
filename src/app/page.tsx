import { H1 } from '@/components/Headings';
import NextLink from '@/components/NextLink';

export default function Home() {
  return (
    <div className='w-screen h-screen grid place-items-center'>
      <div>
        <H1 className='text-cyan-500'>Peddler App</H1>
        <nav className='flex gap-2'>
          <NextLink href='/app/login'>Login</NextLink>
        </nav>
      </div>
    </div>
  );
}
