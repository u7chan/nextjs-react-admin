import type { NextApiRequest, NextApiResponse } from 'next'
import { posts } from '@/data/fake/posts'

type Post = {
  id: number
  userId: number
  title: string
  body: string
}

const handler = (req: NextApiRequest, res: NextApiResponse<Post[]>) => {
  const { _order: order, _sort: sort, _start: start, _end: end } = req.query
  const flip = order === 'ASC' ? 1 : -1
  const data = Array.from(posts)
    .sort((lhs: any, rhs: any) => {
      return (lhs[`${sort}`] > rhs[`${sort}`] ? 1 : -1) * flip
    })
    .slice(Number(start), Number(end))
  res.status(200).setHeader('x-total-count', posts.length).json(data)
}

export default handler
