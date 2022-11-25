import { Router } from 'express'
import { validateToken } from '../middlewares/middewares.js'
import {
  getMaintenanceGuideline,
  getMaintenanceGuidelines,
  addMaintenanceGuideline,
  updateMaintenanceGuideline,
  deleteMaintenanceGuideline
} from '../controllers/maintenanceGuideline.js'

const router = Router()

router.get('/maintenanceGuidelines', validateToken, getMaintenanceGuidelines)
router.get('/maintenanceGuidelines/:id', validateToken, getMaintenanceGuideline)
router.post('/maintenanceGuidelines', validateToken, addMaintenanceGuideline)
router.put(
  '/maintenanceGuidelines/:id',
  validateToken,
  updateMaintenanceGuideline
)
router.delete(
  '/maintenanceGuidelines/:id',
  validateToken,
  deleteMaintenanceGuideline
)

export default router
