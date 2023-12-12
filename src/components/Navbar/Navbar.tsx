'use client';
import Link from 'next/link';
import Image from 'next/image';
import navLinks from './utils/helper';
import { usePathname } from 'next/navigation';
import { signOut, useSession } from 'next-auth/react';

export default function NavBar() {
  const pathName = usePathname();
  const { data: session } = useSession();

  return (
    <nav>
      <div>
        <ul className='flex justify-between m-10 item-center'>
          <div>
            <Link className='text-blue-700 mr-4' href='/'>
              <Image
                className='relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert'
                src='/next.svg'
                alt='Next.js Logo'
                width={100}
                height={40}
                priority
              />
              <li>Home</li>
            </Link>
          </div>

          <div className='flex gap-10'>
            {session ? (
              <>
                <span className='font-bold text-red-700 mr-4'>
                  Hello {session.user?.name}
                </span>
                <li>
                  <button
                    className='p-2 px-5 -mt-1 bg-blue-800 rounded'
                    onClick={() => signOut()}
                  >
                    Log out
                  </button>
                </li>
              </>
            ) : (
              navLinks.map(({ name, href }) => {
                const isActive = pathName.startsWith(href);
                return (
                  <div className='hidden w-full md:block md:w-auto ' key={name}>
                    <Link
                      className={
                        isActive ? 'font-bold mr-4' : 'text-blue-700 mr-4'
                      }
                      href={href}
                    >
                      <li>{name}</li>
                    </Link>
                  </div>
                );
              })
            )}
          </div>
        </ul>
      </div>
    </nav>
  );
}
