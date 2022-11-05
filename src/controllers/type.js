import Type from '../models/type.js'

export const addType = async (req, res) => {
  try {
    const type = await Type.create(req.body)
    return res.status(200).json(type)
  } catch (error) {
    return res.status(404).json({ message: error.message })
  }
}

export const getTypes = async (req, res) => {
  try {
    const types = await Type.findAll()
    return res.status(200).json(types)
  } catch (error) {
    return res.status(404).json({ message: error.message })
  }
}

export const getType = async (req, res) => {
  try {
    const type = await Type.findByPk(req.params.id)
    if (!type) return res.status(404).json({ message: 'Type not found' })
    return res.status(200).json(type)
  } catch (error) {
    return res.status(404).json({ message: error.message })
  }
}
