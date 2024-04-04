import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken'

function JWTverify(req: Request, res: Response, next: NextFunction) {

    const token:string = req.headers['x-access-token'] as string
    const hash: string = process.env.HASH as string

    jwt.verify(token, hash, (err, decoded) => {
        if (err) return res.status(401).json({ status: "nao autenticado" })


        next()
    })

}

export default JWTverify