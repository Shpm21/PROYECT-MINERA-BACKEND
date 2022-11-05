import { Router } from 'express'
import { validateToken } from '../middlewares/middewares.js'
import { getCourse, getCourses, addCourse } from '../controllers/course.js'

const router = Router()

router.get('/courses', validateToken, getCourses)
router.get('/courses/:id', validateToken, getCourse)
router.post('/courses', validateToken, addCourse)
//router.put("/courses/:id", validateToken, updateCourse);

export default router
