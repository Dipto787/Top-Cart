import loginUser from "@/app/actions/auth/loginUser"
import dbConnect, { collectionNameObj } from "@/app/lib/dbConnect"
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
export const authOptions = {
    providers: [
        CredentialsProvider({
            // The name to display on the sign in form (e.g. 'Sign in with...')
            name: 'Credentials',
            // The credentials is used to generate a suitable form on the sign in page.
            // You can specify whatever fields you are expecting to be submitted.
            // e.g. domain, username, password, 2FA token, etc.
            // You can pass any HTML attribute to the <input> tag through the object.
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" }
            },

            async authorize(credentials) {
                const user = await loginUser(credentials);

                if (!user) return null;

                return {
                    id: user._id.toString(),
                    name: user.name,
                    email: user.email,
                    image: user.profileImage || null
                };
            }

        })
    ],
    pages: {
        signIn: '/login'
    },
    callbacks: {
        async signIn({ user, account, profile, email, credentials }) {
            if (account) {
                const { providerAccountId, provider } = account;
                const { email: user_email, image, name } = user;
                const userCollection = dbConnect(collectionNameObj.usersCollection);
                const isExits = await userCollection.findOne({ providerAccountId });
                if (!isExits) {
                    const payload = { providerAccountId, provider, email: user_email, image, name };
                    await userCollection.insertOne(payload)
                }
            }
            return true
        }
    }
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }