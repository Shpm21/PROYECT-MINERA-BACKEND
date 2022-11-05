import { Router } from 'express'
import { validateToken } from '../middlewares/middewares.js'
import {
  getEquipment,
  getEquipments,
  addEquipment,
  updateEquipment,
  deleteEquipment
} from '../controllers/equipment.js'

const router = Router()

router.get('/equipments', validateToken, getEquipments)
router.get('/equipments/:id', validateToken, getEquipment)
router.post('/equipments', validateToken, addEquipment)
router.put('/equipments/:id', validateToken, updateEquipment)
router.delete('/equipments/:id', validateToken, deleteEquipment)

export default router
