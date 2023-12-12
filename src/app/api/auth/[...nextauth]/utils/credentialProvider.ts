import connectDB from '@/db/configDB';
import { AuthCredentials } from '@/type/type';
import bcrypt from 'bcryptjs';
import UserModel from '@/db/models/User';

type CredentialProvider = {
  id: string;
  name: string;
  credentials: {
    email: {
      label: string;
      type: string;
    };
    password: {
      label: string;
      type: string;
    };
  };
  authorize(credentials?: AuthCredentials): Promise<any>;
};

const credentialProvider: CredentialProvider = {
  id: 'credentials',
  name: 'Credentials',
  credentials: {
    email: { label: 'Email', type: 'text' },
    password: { label: 'Password', type: 'password' },
  },
  async authorize(credentials?: AuthCredentials) {
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
};

export default credentialProvider;
