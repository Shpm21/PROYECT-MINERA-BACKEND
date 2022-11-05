import Equipment from '../models/equipment.js'

export const addEquipment = async (req, res) => {
  try {
    const equipment = await Equipment.create(req.body)
    return res.status(200).json(equipment)
  } catch (error) {
    return res.status(404).json({ message: error.message })
  }
}

export const getEquipments = async (req, res) => {
  try {
    const equipments = await Equipment.findAll()
    return res.status(200).json(equipments)
  } catch (error) {
    return res.status(404).json({ message: error.message })
  }
}

export const getEquipment = async (req, res) => {
  try {
    const equipment = await Equipment.findByPk(req.params.id)
    if (!equipment)
      return res.status(404).json({ message: 'Equipment not found' })
    return res.status(200).json(equipment)
  } catch (error) {
    return res.status(404).json({ message: error.message })
  }
}

export const deleteEquipment = async (req, res) => {
  try {
    const equipment = await Equipment.findByPk(req.params.id)
    if (!equipment)
      return res.status(404).json({ message: 'Equipment not found' })
    await equipment.destroy()
    return res.status(200).json({ message: 'Equipment deleted' })
  } catch (error) {
    return res.status(404).json({ message: error.message })
  }
}

export const updateEquipment = async (req, res) => {
  try {
    const equipment = await Equipment.findByPk(req.params.id)
    if (!equipment)
      return res.status(404).json({ message: 'Equipment not found' })
    await equipment.update(req.body)
    return res.status(200).json(equipment)
  } catch (error) {
    return res.status(404).json({ message: error.message })
  }
}
