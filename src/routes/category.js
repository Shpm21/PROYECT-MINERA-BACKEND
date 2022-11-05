import { Router } from 'express'
import { validateToken } from '../middlewares/middewares.js'
import {
  getCategories,
  getCategory,
  addCategory
} from '../controllers/category.js'

const router = Router()

router.get('/categorys', validateToken, getCategories)
router.get('/categorys/:id', validateToken, getCategory)
router.post('/categorys', validateToken, addCategory)

export default router
