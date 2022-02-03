const router = require('express').Router()
import { Request, Response } from 'express'
import prismaClient from 'src/prisma'
import { generateHash } from '../utils/generate_hash'

router.get('/', (req: Request, res: Response) => {
    res.sendFile(__dirname + '\\views\\index.html')
})

router.get('/:hash', async (req: Request, res: Response) => {

    await prismaClient.url.findMany({
        where: {
            hash: req.params.hash
        },
        select : {
            original_url: true
        },
        take: 1
    })
        .then(response => {
            if(response.length === 0) {
                res.sendFile(__dirname + '\\views\\404.html')
            } else {
                res.redirect(response[0].original_url)
            }
        })
        .catch(err => console.log('Oops, we have an err: ' + err))

})

router.post('/short', (req: Request, res: Response) => {

    prismaClient.url.create({
        data: {
            hash: generateHash(),
            original_url: req.body.original_url,
            user_id: req.body.user_id
        }
    })
        .then(response =>  res.json(response))
        .catch(err => console.log('Oops, we have an err: ' + err))
})

export = router