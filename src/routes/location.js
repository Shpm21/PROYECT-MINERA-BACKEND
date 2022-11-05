import { Router } from 'express'
import { validateToken } from '../middlewares/middewares.js'
import {
  getLocations,
  getLocation,
  addLocation
} from '../controllers/location.js'

const router = Router()

router.get('/locations', validateToken, getLocations)
router.get('/locations/:id', validateToken, getLocation)
router.post('/locations', validateToken, addLocation)

export default router
