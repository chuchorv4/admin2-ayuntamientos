import axios from 'axios'
import { API_URL } from '@/config/back/index'
import { Main } from '@/interfaces/api'

const getMain = (hostname: string) =>
  axios.get<Main[]>(`${API_URL}/${hostname}`).then((response) => {
    if (response.data && response.data.length >= 1) {
      const [content] = response.data
      return content
    } else {
      return Promise.reject('not content')
    }
  })

export default getMain
