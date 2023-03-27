export interface Credentials {
  username: string
  password: string
}

export interface LoginResponse {
  token: string
  _id: string
  username: string
  ayuntamiento: string
  role: string
  permissions: string[]
  exp: number
}
