import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import {saveUser} from "@/app/components/actions";

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!
        })
    ],
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        async signIn({user, account, profile}) {
            if (user.email && user.name) {
                await saveUser(user.email, user.name);
            } else {
                console.warn("Missing user email or name, not saving user.");
            }
            return true;
        },
        async session({session, token}: { session: any, token: any }) {
            session.user.id = token.id;
            return session;
        },
        async jwt({token, user}: { token: any, user: any }) {
            if (user) token.id = user.id;
            return token;
        },
        async redirect({url, baseUrl}) {
            return baseUrl
        },
    }
})

export {handler as GET, handler as POST};