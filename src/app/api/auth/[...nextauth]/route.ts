import axios from "axios"
import NextAuth, { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from "bcrypt"

const nextAuthOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                const { data } = await axios.post('http://localhost:3000/api/login', {
                    email: credentials?.email,
                    password:  credentials?.password,
                });
                console.log(bcrypt.compareSync(credentials?.password ?? '', data.password));
                if (await bcrypt.compareSync(credentials?.password ?? '', data.password)) {
                    return data;
                } else {
                    return null;
                }
            }
        })
    ],
    pages: {
        signIn: '/login',
        signOut: '/',
    },
}

const handler = NextAuth(nextAuthOptions)

export { handler as GET, handler as POST, nextAuthOptions }