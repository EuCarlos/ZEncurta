const router = require('express').Router()
import { Request, Response } from 'express'
import prismaClient from 'src/prisma'

router.get('/', (req: Request, res: Response) => {
    res.sendFile(__dirname + '\\views\\index.html')
})

export = router