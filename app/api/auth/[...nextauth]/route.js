import NextAuth from 'next-auth'
import AppleProvider from 'next-auth/providers/apple'
import FacebookProvider from 'next-auth/providers/facebook'
import GoogleProvider from 'next-auth/providers/google'
import EmailProvider from 'next-auth/providers/email'
import GitHubProvider from "next-auth/providers/github";
import connectDB from '@/db/connectdb';
import User from '@/model/User';

export const authoptions = NextAuth({
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
        }),
        AppleProvider({
            clientId: process.env.APPLE_ID,
            clientSecret: process.env.APPLE_SECRET
        }),
        FacebookProvider({
            clientId: process.env.FACEBOOK_ID,
            clientSecret: process.env.FACEBOOK_SECRET
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET
        }),
        EmailProvider({
            server: process.env.MAIL_SERVER,
            from: 'NextAuth.js <no-reply@example.com>'
        }),
    ],
    debug: true,
    callbacks: {
        async signIn({ user, account, profile, email, credentials }) {
            if (account.provider == "github") {
                await connectDB();
                const currentUser = await User.findOne({ email: email });
                const username = user.email.split('@')[0];
                if (!currentUser) {
                    const newUser = new User({
                        email: user.email,
                        username: username,
                    });
                    await newUser.save();
                }
                return true
            }
        },
        async session({ session, token }) {
            const dbUser = await User.findOne({ email: session.user.email });
            session.user.name = dbUser.username
            return session
        }
    }
})

export { authoptions as GET, authoptions as POST }