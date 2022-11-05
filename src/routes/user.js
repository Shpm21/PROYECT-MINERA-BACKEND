import { Router } from 'express'
import { validateToken, validateRut } from '../middlewares/middewares.js'
import {
  getUsers,
  getUser,
  addUser,
  updateUser,
  deleteUser
} from '../controllers/user.js'

const router = Router()

router.get('/users', validateToken, getUsers)
router.get('/users/:id', validateToken, validateRut, getUser)
router.post('/users', validateToken, validateRut, addUser)
router.put('/users/:id', validateToken, validateRut, updateUser)
router.delete('/users/:id', validateToken, deleteUser)

export default router
