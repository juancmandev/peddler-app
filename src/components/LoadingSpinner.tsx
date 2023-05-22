import Image from 'next/image';

const LoadingSpinner = () => (
  <div className='w-screen h-screen flex justify-center items-center'>
    <Image
      width={60}
      height={60}
      src='/gifs/spinner.gif'
      alt='Loading animation'
    />
  </div>
);

export default LoadingSpinner;
