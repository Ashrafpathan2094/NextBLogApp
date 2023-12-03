import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

export default (req, res) =>
  NextAuth(req, res, {
    session: {
      jwt: true,
    },
    jwt: {
      secret: process.env.NEXT_PUBLIC_JWT_SECRET,
    },
    providers: [
      Providers.GitHub({
        clientId: process.env.NEXT_PUBLIC_GITHUB_ID,
        clientSecret: process.env.NEXT_PUBLIC_GITHUB_SECRET,
      }),
      // ...add more providers here
    ],

    database: process.env.NEXT_PUBLIC_DATABASE_URL,
    pages: {
      signIn: '/signin',
    },
  })
