import { Router } from 'express'
import { login } from '../controllers/login.js'
import { validateRut } from '../middlewares/middewares.js'
const router = Router()

router.post('/login', validateRut, login)

export default router
