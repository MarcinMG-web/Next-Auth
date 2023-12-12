'use client';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { AuthCredentials } from '@/type/type';
import Link from 'next/link';
import { SignInResponse, signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const session = useSession();
  const router = useRouter();

  const [loginCredential, setLoginCredential] = useState<AuthCredentials>({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');

  useEffect(() => {
    if (session.status === 'authenticated') {
      router.replace('/dashboard');
    }
  }, [session, router]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setLoginCredential({
      ...loginCredential,
      [e.target.name]: e.target.value.trim(),
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response = await signIn('credentials', {
      redirect: false,
      ...loginCredential,
    });

    if (response?.error) {
      setError('Invalid email or password');
      if (response?.url) router.replace('/dashboard');
    } else {
      setError('');
    }
  };

  return (
    <div className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type='email'
            name='email'
            onChange={handleChange}
            className='w-full border border-gray-300 text-black rounded px-3 py-2 mb-4 focus:outline-none focus:border-blue-400 focus:text-black'
            placeholder='Email'
            required
          />
          <input
            type='password'
            name='password'
            onChange={handleChange}
            className='w-full border border-gray-300 text-black rounded px-3 py-2 mb-4 focus:outline-none focus:border-blue-400 focus:text-black'
            placeholder='Password'
            required
          />
          <button
            type='submit'
            className='w-full bg-blue-700  text-white py-2 rounded hover:bg-blue-600'
          >
            Login
          </button>
        </form>

        <p className='text-red-500 mt-2'>{error}</p>

        <div className='text-center text-gray-500 mt-4'>- OR -</div>

        <Link
          href='/register'
          className='block text-center text-blue-500 hover:underline mt-2'
        >
          Don`t have an account? Sign up
        </Link>
      </div>
    </div>
  );
}
