import { Router } from 'express'
import { validateToken } from '../middlewares/middewares.js'
import { getTypes, getType, addType } from '../controllers/type.js'

const router = Router()

router.get('/types', validateToken, getTypes)
router.get('/types/:id', validateToken, getType)
router.post('/types', validateToken, addType)

export default router
