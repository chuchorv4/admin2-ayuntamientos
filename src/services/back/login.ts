import { Credentials, LoginResponse } from '@/interfaces/auth'
import axios from 'axios'
import { API_URL } from '@/config/back/index'

const login = (hostname: string, credentials: Credentials) =>
  axios
    .post<LoginResponse>(`${API_URL}/${hostname}/auth/login`, credentials)
    .then((response) => response.data)

export default login
