import express, { json } from 'express'
import dotenv from 'dotenv'
import CategoryRoutes from './routes/category.js'
import LoginRoutes from './routes/login.js'
import EquipmentRoutes from './routes/equipment.js'
import UserRoutes from './routes/user.js'
import ZoneRoutes from './routes/zone.js'
import CourseRoutes from './routes/course.js'
import LocationRoutes from './routes/location.js'
import RoleRoutes from './routes/role.js'
import TaskRoutes from './routes/task.js'
import TypeRoutes from './routes/type.js'

dotenv.config()

const app = express()

app.use(json)

app.set('port', process.env.PORT || 3000)

app.listen(app.get('port'), () => {
  console.log(`Server is running on port ${app.get('port')}`)
})

app.use(CategoryRoutes)
app.use(CourseRoutes)
app.use(EquipmentRoutes)
app.use(LocationRoutes)
app.use(LoginRoutes)
app.use(RoleRoutes)
app.use(TaskRoutes)
app.use(TypeRoutes)
app.use(UserRoutes)
app.use(ZoneRoutes)
