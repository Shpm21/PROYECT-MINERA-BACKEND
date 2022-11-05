import Task from '../models/task.js'

export const addTask = async (req, res) => {
  try {
    const task = await Task.create(req.body)
    return res.status(200).json(task)
  } catch (error) {
    return res.status(404).json({ message: error.message })
  }
}

export const getTasks = async (req, res) => {
  try {
    const tasks = await Task.findAll()
    return res.status(200).json(tasks)
  } catch (error) {
    return res.status(404).json({ message: error.message })
  }
}

export const getTask = async (req, res) => {
  try {
    const task = await Task.findByPk(req.params.id)
    if (!task) return res.status(404).json({ message: 'Task not found' })
    return res.status(200).json(task)
  } catch (error) {
    return res.status(404).json({ message: error.message })
  }
}

export const deleteTask = async (req, res) => {
  try {
    const task = await Task.findByPk(req.params.id)
    if (!task) return res.status(404).json({ message: 'Task not found' })
    await task.destroy()
    return res.status(200).json({ message: 'Task deleted' })
  } catch (error) {
    return res.status(404).json({ message: error.message })
  }
}

export const updateTask = async (req, res) => {
  try {
    const task = await Task.findByPk(req.params.id)
    if (!task) return res.status(404).json({ message: 'Task not found' })
    await task.update(req.body)
    return res.status(200).json(task)
  } catch (error) {
    return res.status(404).json({ message: error.message })
  }
}
