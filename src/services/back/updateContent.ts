import axios, { AxiosResponse } from 'axios'
import { API_URL } from '@/config/back/index'
import { Content } from '@/interfaces/api'

const updateContent = (
  hostname: string,
  token: string,
  id: string,
  content: Omit<Content, '_id'>
) =>
  axios
    .put<
      Content,
      AxiosResponse<Content, Omit<Content, '_id'>>,
      Omit<Content, '_id'>
    >(`${API_URL}/${hostname}/content/${id}`, content, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      return response.data
    })
    .catch((err) => {
      console.error(err?.response?.data)
      return Promise.reject(err)
    })

export default updateContent
