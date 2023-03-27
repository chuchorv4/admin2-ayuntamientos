import { Content } from '@/interfaces/api'
import { Sevac } from '@/interfaces/sevac'
import axiosInstance from '@/utils/axiosInstance'

const getContentSevac = (): Promise<Sevac> =>
  axiosInstance
    .post<Content>('/api/getContent', { page: 'sevac' })
    .then((response) => {
      const content = response?.data?.content
        ? JSON.parse(response.data.content.replace(/'/g, '"'))
        : { content: [] }
      return { ...content, id: response.data._id }
    })

export default getContentSevac
