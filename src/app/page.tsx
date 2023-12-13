'use client';
import Image from 'next/image';
import StainEffect from '../components/StainEffect/StainEffect';
import { useSession } from 'next-auth/react';
import Loading from '@/components/Loading/Loading';

export default function Home() {
  const { status: sessionStatus } = useSession();

  if (sessionStatus === 'loading') {
    return <Loading />;
  }

  return (
    <main className='flex flex-col items-center justify-between p-24'>
      <StainEffect />
      <Image
        className='relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert'
        src='/next.svg'
        alt='Next.js Logo'
        width={200}
        height={400}
        priority
      />
    </main>
  );
}
