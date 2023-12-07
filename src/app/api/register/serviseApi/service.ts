import { RegisterCredential } from '@/type/type';

/**
 * Config
 */

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
const configFetch = (method: HttpMethod, data?: unknown) => ({
  method,
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(data),
});

/**
 * Auth
 */

export const registerUser = async (registerCredential: RegisterCredential) => {
  try {
    return await fetch(
      '/api/register',
      configFetch('POST', registerCredential)
    ).then((data) => data);
  } catch (error) {
    console.log('error', error);
  }
};
