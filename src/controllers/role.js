import Role from '../models/role.js'

export const addRole = async (req, res) => {
  try {
    const role = await Role.create(req.body)
    return res.status(200).json(role)
  } catch (error) {
    return res.status(404).json({ message: error.message })
  }
}

export const getRoles = async (req, res) => {
  try {
    const roles = await Role.findAll()
    return res.status(200).json(roles)
  } catch (error) {
    return res.status(404).json({ message: error.message })
  }
}

export const getRole = async (req, res) => {
  try {
    const role = await Role.findByPk(req.params.id)
    if (!role) return res.status(404).json({ message: 'Role not found' })
    return res.status(200).json(role)
  } catch (error) {
    return res.status(404).json({ message: error.message })
  }
}
