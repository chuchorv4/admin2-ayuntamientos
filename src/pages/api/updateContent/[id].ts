import updateContent from '@/services/back/updateContent'
import { NextApiRequest, NextApiResponse } from 'next'
import { getToken } from 'next-auth/jwt'

const apiUpdateSevac = (req: NextApiRequest, res: NextApiResponse) => {
  return getToken({ req })
    .then((token) => {
      if (!token || !token.token)
        return Promise.reject({ code: 403, message: 'unauthorized' })

      const backToken = token.token

      if (
        req.method != 'PUT' &&
        !req?.headers?.host &&
        req?.query?.id &&
        !req?.body
      )
        return Promise.reject({ code: 400, message: 'bad request' })

      const { id } = req.query
      const host = req.headers.host || ''
      const hostname = host.includes('localhost') ? 'ucuyucatan.gob.mx' : host

      return updateContent(hostname, backToken, `${id}`, req.body)
    })
    .then((content) => res.status(200).json(content))
    .catch((err) => {
      res.status(err?.response?.status || err.code || 500).json({
        message:
          err?.response?.data?.message || err.message || 'internal error',
      })
    })
}

export default apiUpdateSevac
