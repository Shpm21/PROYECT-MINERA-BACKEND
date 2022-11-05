import Course from '../models/course.js'

export const addCourse = async (req, res) => {
  try {
    const course = await Course.create(req.body)
    return res.status(200).json(course)
  } catch (error) {
    return res.status(404).json({ message: error.message })
  }
}

export const getCourses = async (req, res) => {
  try {
    const courses = await Course.findAll()
    return res.status(200).json(courses)
  } catch (error) {
    return res.status(404).json({ message: error.message })
  }
}

export const getCourse = async (req, res) => {
  try {
    const course = await Course.findByPk(req.params.id)
    if (!course) return res.status(404).json({ message: 'Course not found' })
    return res.status(200).json(course)
  } catch (error) {
    return res.status(404).json({ message: error.message })
  }
}
