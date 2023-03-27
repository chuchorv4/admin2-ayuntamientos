import getContent from '@/services/back/getContent'
import { NextApiRequest, NextApiResponse } from 'next'
import { getToken } from 'next-auth/jwt'

const apiGetContent = (req: NextApiRequest, res: NextApiResponse) => {
  return getToken({ req })
    .then((token) => {
      if (!token || !token.token)
        return Promise.reject({ code: 403, message: 'unauthorized' })

      if (req.method != 'POST' && !req?.headers?.host && !req?.body?.page)
        return Promise.reject({ code: 400, message: 'bad request' })

      const host = req.headers.host || ''
      const hostname = host.includes('localhost') ? 'ucuyucatan.gob.mx' : host

      return getContent(hostname, req.body.page)
    })
    .then((content) => res.status(200).json(content))
    .catch((err) => {
      res.status(err?.response?.status || err.code || 500).json({
        message:
          err?.response?.data?.message || err.message || 'internal error',
      })
    })
}

export default apiGetContent
