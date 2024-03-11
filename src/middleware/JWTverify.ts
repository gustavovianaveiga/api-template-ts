import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken'

function JWTverify(req: Request, res: Response, next: NextFunction) {

    const token: string | string[] = req.headers['x-access-token']!
    const tokenString: string = Array.isArray(token) ? token[0] : token
    const hash: string = process.env.HASH!

    jwt.verify(tokenString, hash, (err, decoded) => {
        if (err) return res.status(401).json({ status: "nao autenticado" })


        next()
    })

}

export default JWTverify