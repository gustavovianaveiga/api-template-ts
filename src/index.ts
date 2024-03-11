import express from 'express'
import router from './router';
import dotenv from 'dotenv'
import vanilla from './controllers/vanilla';
const app = express()

dotenv.config()

app.use(express.json())
app.use(router)



app.get('/', vanilla)

declare var process: { env: { PORT: number } }

const port: number = process.env.PORT || 1381

app.listen(port, () => console.log('Server Aberto em ' + port))