'use client';
import { ChangeEvent, FormEvent, useState } from 'react';
import Link from 'next/link';
import StainEffect from '../components/StainEffect/StainEffect';

export default function RegisterPage() {
  const [registerCredential, setRegisterCredential] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setRegisterCredential({
      ...registerCredential,
      [e.target.name]: e.target.value.trim(),
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Temporary
    console.log('registerCredential', registerCredential);
  };

  return (
    <div className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div>
        <StainEffect />

        <form onSubmit={handleSubmit}>
          <input
            type='text'
            name='name'
            onChange={handleChange}
            className='w-full border border-gray-300 text-black rounded px-3 py-2 mb-4 focus:outline-none focus:border-blue-400 focus:text-black'
            placeholder='Name'
            required
          />
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
            Register me
          </button>
        </form>

        <div className='text-center text-gray-500 mt-4'>- OR -</div>

        <Link
          href='/login'
          className='block text-center text-blue-500 hover:underline mt-2'
        >
          Login with an existing account
        </Link>
      </div>
    </div>
  );
}
