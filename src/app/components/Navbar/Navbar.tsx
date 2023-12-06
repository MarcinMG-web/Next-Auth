'use client';
import Link from 'next/link';
import Image from 'next/image';
import navLinks from './utils/helper';
import { usePathname } from 'next/navigation';

export default function NavBar() {
  const pathName = usePathname();

  return (
    <div>
      <ul className='flex justify-between m-10 item-center'>
        <div>
          <Image
            className='relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert'
            src='/next.svg'
            alt='Next.js Logo'
            width={100}
            height={40}
            priority
          />
        </div>
        {navLinks.map(({ name, href }) => {
          const isActive = pathName.startsWith(href);
          return (
            <div className='flex gap-10' key={name}>
              <Link
                className={isActive ? 'font-bold mr-4' : 'text-blue-700 mr-4'}
                href={href}
              >
                <li>{name}</li>
              </Link>
            </div>
          );
        })}
      </ul>
    </div>
  );
}
