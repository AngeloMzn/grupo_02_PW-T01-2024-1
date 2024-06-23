import { Password } from '@mui/icons-material';
import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import email from 'next-auth/providers/email';

export const {
  handlers: { GET, POST },
  auth,
} = NextAuth({
  providers: [Credentials],
});