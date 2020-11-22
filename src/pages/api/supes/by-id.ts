import type { NextApiHandler } from 'next'
import db from '~/lib/db'
import { selectKeys } from '~/utils/object'

const takeKeys = selectKeys([
  'uuid',
  'name',
  'powerstats',
  'appearence',
  'biography',
  'work',
  'connections',
  'image',
])

export const fetchSupes = (id: string | string[]) => {
  return db
    .supes()
    .where((supe) => (typeof id === 'string' ? [id] : id).includes(supe.uuid))
}

const handler: NextApiHandler = (req, res) => {
  const { id } = req.query
  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify(fetchSupes(id).map(takeKeys)))
}

export default handler
