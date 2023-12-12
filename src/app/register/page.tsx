'use client';
import { ChangeEvent, FormEvent, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { registerUser } from '../api/register/serviseApi/service';
import { RegisterCredential } from '@/type/type';

export default function RegisterPage() {
  const [registerCredential, setRegisterCredential] =
    useState<RegisterCredential>({
      name: '',
      email: '',
      password: '',
    });

  const [error, setError] = useState('');

  const router = useRouter();

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setRegisterCredential({
      ...registerCredential,
      [e.target.name]: e.target.value.trim(),
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const registration = await registerUser(registerCredential);

    switch (registration?.status) {
      case 200:
        setError('');
        router.push('/login');
        break;

      default:
        setError('Email is already in use');
    }
  };

  return (
    <div className='flex flex-col items-center justify-between p-24'>
      <div>
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

        <p className='text-red-500 mt-2'>{error}</p>

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
