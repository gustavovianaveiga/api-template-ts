import express from 'express'
import JWTverify from './middleware/JWTverify'
import vanilla from './controllers/vanilla'

const router = express.Router()

router.get('/verify', JWTverify, vanilla)

export default router