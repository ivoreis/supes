import type { NextApiHandler } from 'next'
import db from '~/lib/db'
import { selectKeys } from '~/utils/object'

const defaultLimit = 10

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

const handler: NextApiHandler = (req, res) => {
  const limit = req.query.limit
    ? parseInt(req.query.limit as string, 10)
    : defaultLimit

  const supes = db.supes()
  const totalCharacters = supes.chain().data().length
  const ids = [...new Array(limit)].map(() =>
    Math.floor(Math.random() * totalCharacters + 1),
  )

  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.end(
    JSON.stringify(
      supes
        .chain()
        .where((e) => ids.includes(e.$loki))
        .data()
        .map(takeKeys),
    ),
  )
}

export default handler
