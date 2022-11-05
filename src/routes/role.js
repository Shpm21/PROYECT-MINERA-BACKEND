import { Router } from 'express'
import { validateToken } from '../middlewares/middewares.js'
import { getRoles, getRole, addRole } from '../controllers/role.js'

const router = Router()

router.get('/roles', validateToken, getRoles)
router.get('/roles/:id', validateToken, getRole)
router.post('/roles', validateToken, addRole)

export default router
