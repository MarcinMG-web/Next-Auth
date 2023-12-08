'use client';

import React, { ReactNode, FC } from 'react';
import { SessionProvider } from 'next-auth/react';
import { Session } from 'next-auth';

interface AuthProviderProps {
  children: ReactNode;
  session: Session | null;
}

const AuthProvider = ({ children }: AuthProviderProps) => {
  return <SessionProvider>{children}</SessionProvider>;
};
export default AuthProvider;
