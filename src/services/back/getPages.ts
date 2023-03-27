import axios from 'axios'
import { API_URL } from '@/config/back/index'
import { Page } from '@/interfaces/api'

const getPages = (hostname: string) =>
  axios
    .get<Page[]>(`${API_URL}/${hostname}/pages`)
    .then((response) => response.data)

export default getPages
