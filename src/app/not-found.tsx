import { H6 } from '@/components/Headings';
import NextLink from '@/components/NextLink';

const NotFound = () => (
  <div className='w-screen h-screen flex flex-col gap-1 justify-center items-center'>
    <H6>Page not found</H6>
    <NextLink href='/app/map'>Go to Home</NextLink>
  </div>
);

export default NotFound;
