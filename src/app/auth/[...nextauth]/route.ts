import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import { Account, User as AuthUser } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcryptjs';
import UserModel from '@/db/models/User';
import connectDB from '@/db/configDB';
import { AuthCredentials } from '@/type/type';

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      id: 'credentials',
      name: 'Credentials',

      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },

      async authorize(credentials?: Record<string, string>) {
        await connectDB();

        try {
          const user = await UserModel.findOne({ email: credentials?.email });

          if (user) {
            const isPasswordCorrect = await bcrypt.compare(
              credentials!.password,
              user.password
            );
            
            if (isPasswordCorrect) {
              return user;
            }
          }
        } catch (error) {
          throw new Error(error as string);
        }
      },
    }),

    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    // ...add more providers here
  ],
};
export default NextAuth(authOptions);
