import { FaSpinner } from 'react-icons/fa';

export default function Loading() {
  return (
    <div className='flex flex-col justify-center items-center justify-between p-24'>
      <span className='text-lg m-5'>Loading ...</span>
      <FaSpinner className='animate-spin text-4xl text-blue-500' />
    </div>
  );
}
