import axios, { AxiosResponse } from 'axios'
import { API_URL } from '@/config/back/index'
import { Content, QueryParams } from '@/interfaces/api'

const getContent = (hostname: string, page: string) =>
  axios
    .post<
      Content[],
      AxiosResponse<Content[], QueryParams<Content>>,
      QueryParams<Content>
    >(`${API_URL}/${hostname}/content`, {
      search: { page },
    })
    .then((response) => {
      if (response.data && response.data.length >= 1) {
        const [content] = response.data
        return content
      } else {
        return Promise.reject('not content')
      }
    })

export default getContent
