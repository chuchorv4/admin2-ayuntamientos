import NextAuth, { DefaultSession } from 'next-auth'
import { JWT } from 'next-auth/jwt'

declare module 'next-auth' {
  interface User {
    token: string
    username: string
    role: string
    ayuntamiento: string
    permissions: string[]
    exp: number
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    token?: string
  }
}
