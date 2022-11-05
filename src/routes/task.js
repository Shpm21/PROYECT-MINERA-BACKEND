import { Router } from 'express'
import { validateToken } from '../middlewares/middewares.js'
import {
  getTasks,
  getTask,
  addTask,
  updateTask,
  deleteTask
} from '../controllers/task.js'

const router = Router()

router.get('/tasks', validateToken, getTasks)
router.get('/tasks/:id', validateToken, getTask)
router.post('/tasks', validateToken, addTask)
router.put('/tasks/:id', validateToken, updateTask)
router.delete('/tasks/:id', validateToken, deleteTask)

export default router
