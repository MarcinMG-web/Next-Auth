import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import NavBar from '../components/Navbar/Navbar';
import StainEffect from '../components/StainEffect/StainEffect';
import { getServerSession } from 'next-auth';
import SessionProvider from '@/components/SessionProvider/SessionProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Auth Next App',
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default async function RootLayout({ children }: RootLayoutProps) {
  const session = await getServerSession();

  return (
    <html lang='en'>
      <body className={inter.className}>
        <SessionProvider session={session}>
          <div className='mx-auto max-w-5xl text-1xl gap-2 mb-10'>
            <NavBar />
            <StainEffect />
            {children}
          </div>
        </SessionProvider>
      </body>
    </html>
  );
}
