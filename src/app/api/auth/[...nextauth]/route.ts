import NextAuth from 'next-auth';

import GithubProvider from 'next-auth/providers/github';
import CredentialsProvider from 'next-auth/providers/credentials';
import credentialProvider from './utils/credentialProvider';
import githubProvider from './utils/githubeProvider';

export const authOptions = {
  providers: [
    CredentialsProvider(credentialProvider),
    GithubProvider(githubProvider),
  ],
};

export const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
