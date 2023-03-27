import axios from 'axios'
import { getSession } from 'next-auth/react'

const axiosInstance = axios.create({
  maxRedirects: 0,
})

axiosInstance.interceptors.request.use(async (request) => {
  const session = await getSession()
  if (!session) {
    window.location.reload()
    throw new axios.Cancel('Operation canceled by the user.')
  }
  return request
})

axiosInstance.interceptors.response.use((response) => {
  return response
})

export default axiosInstance
