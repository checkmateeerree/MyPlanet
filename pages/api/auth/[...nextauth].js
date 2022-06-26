import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

import { verifyPassword } from '../../../lib/auth';
import { connectToDatabase } from '../../../lib/db';

export default NextAuth({
  session: {
    strategy: 'jwt',
  },
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        console.log('hi')
        const client = await connectToDatabase();

        const usersCollection = client.db('db').collection('users');

        const user = await usersCollection.findOne({
          email: credentials.email,
        });
       
        if (!user) {
          return null
        }
        const isValid = await verifyPassword(
            credentials.password,
            user.password
          );
        if (!isValid){
            return null
        }
        return user
      },
    }),
  ],
  secret: process.env.NEXT_PUBLIC_AUTH_SECRET,
});