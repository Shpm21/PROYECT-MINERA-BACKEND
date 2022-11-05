import User from '../models/user.js'

export const addUser = async (req, res) => {
  try {
    const user = await User.create(req.body)
    return res.status(200).json(user)
  } catch (error) {
    return res.status(404).json({ message: error.message })
  }
}

export const getUsers = async (req, res) => {
  try {
    const users = await User.findAll()
    return res.status(200).json(users)
  } catch (error) {
    return res.status(404).json({ message: error.message })
  }
}

export const getUser = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.rut)
    if (!user) return res.status(404).json({ message: 'User not found' })
    return res.status(200).json(user)
  } catch (error) {
    return res.status(404).json({ message: error.message })
  }
}

export const deleteUser = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.rut)
    if (!user) return res.status(404).json({ message: 'User not found' })
    await user.destroy()
    return res.status(200).json({ message: 'User deleted' })
  } catch (error) {
    return res.status(404).json({ message: error.message })
  }
}

export const updateUser = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.rut)
    if (!user) return res.status(404).json({ message: 'User not found' })
    await user.update(req.body)
    return res.status(200).json(user)
  } catch (error) {
    return res.status(404).json({ message: error.message })
  }
}
