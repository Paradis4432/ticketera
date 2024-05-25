import NextaAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

const handler = NextaAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
        })
    ],
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        async session({session, token}: { session: any, token: any }) {
            session.user.id = token.id;
            //session.user.test = "test" // estoy casi seguro que aca se pueden agregar cosas para el user
            // actualizando un par de cosas, a considerar
            return session;
        },
        async jwt({token, user}: { token: any, user: any }) {
            if (user) {
                token.id = user.id;
            }
            return token;
        }
    }
})

export {handler as GET, handler as POST};