import { Content } from '@/interfaces/api'
import { Sevac } from '@/interfaces/sevac'
import axiosInstance from '@/utils/axiosInstance'

const updateContentSevac = (sevac: Sevac): Promise<Sevac> =>
  axiosInstance
    .put<Content>(`/api/updateContent/${sevac.id}`, {
      content: JSON.stringify({
        content: sevac.content,
        type: sevac.type,
      }).replace(/"/g, "'"),
      page: 'sevac',
    })
    .then((response) => {
      const content = JSON.parse(response.data.content.replace(/'/g, '"'))
      return { ...content, id: response.data._id }
    })

export default updateContentSevac
