import NextAuth, { AuthOptions } from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import login from '@/services/back/login'

const regexHttp = /(?=http)\w+(:\/\/)+/g

export const authOptions: AuthOptions = {
  providers: [
    Credentials({
      name: 'credentials',
      credentials: {
        username: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      authorize: async (credentials, req) => {
        if (!credentials || !req?.headers?.origin) return null
        const hostname: string = `${req.headers.origin}`.replace(regexHttp, '')
        const { _id, token, username, role, ayuntamiento, permissions, exp } =
          await login(
            hostname.includes('localhost') ? 'ucuyucatan.gob.mx' : hostname,
            { username: credentials.username, password: credentials.password }
          )
        return {
          id: _id,
          token,
          username,
          role,
          ayuntamiento,
          permissions,
          exp,
        }
      },
    }),
  ],
  callbacks: {
    jwt: ({ token, user }) => {
      if (user) {
        token.token = user.token
        token.exp = user.exp
      }
      return token
    },
    session: ({ session, token }) => ({ ...session, token: token.token }),
  },
  session: {
    maxAge: 60 * 15,
  },
  jwt: {
    maxAge: 60 * 15,
  },
  debug: false,
}

export default NextAuth(authOptions)
