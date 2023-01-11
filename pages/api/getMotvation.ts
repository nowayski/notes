import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    title: string,
    body: string
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
){
    res.status(200).json({title:'Hello', body: 'World'})
}