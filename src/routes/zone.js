import { Router } from 'express'
import { validateToken } from '../middlewares/middewares.js'
import { getZones, getZone, addZone } from '../controllers/zone.js'

const router = Router()

router.get('/zones', validateToken, getZones)
router.get('/zones/:id', validateToken, getZone)
router.post('/zones', validateToken, addZone)

export default router
