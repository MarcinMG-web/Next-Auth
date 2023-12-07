import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import NavBar from '../components/Navbar/Navbar';
import StainEffect from '../components/StainEffect/StainEffect';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Auth Next App',
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <div className='mx-auto max-w-5xl text-1xl gap-2 mb-10'>
          <NavBar />
          <StainEffect />
          {children}
        </div>
      </body>
    </html>
  );
}
