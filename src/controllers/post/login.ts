import { Request, Response } from 'express';
import config from '../../DB/config.js';
import mysql, { RowDataPacket } from 'mysql2';


function login(req: Request, res: Response) {
    const user: string = req.body.user;
    const password: string = req.body.password;
    const connection = mysql.createConnection(config)


    try {


        connection.query<RowDataPacket[]>('select user,password FROM logins WHERE user = ? AND password = ?', [user, password], (err, data) => {
            if (err) return res.status(500).json({ status: 'ocorreu um erro' })

            if (!data[0] || (user != data[0].user && password != data[0].password)) return res.status(401).json({ status: 'nenhum usuario encontrado' })

            return res.status(200).json({
                isLogged: true,
                user: user
            })
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({ status: 'ocorreu um erro' })
    } finally {
        connection.end()
    }
}

export default login