import Maintenance from '../models/maintenance'

export const addMaintenance = async (req, res) => {
  try {
    const maintenance = await Maintenance.create(req.body)
    return res.status(200).json(maintenance)
  } catch (error) {
    return res.status(404).json({ message: error.message })
  }
}

export const getMaintenances = async (req, res) => {
  try {
    const maintenances = await Maintenance.findAll()
    return res.status(200).json(maintenances)
  } catch (error) {
    return res.status(404).json({ message: error.message })
  }
}

export const getMaintenance = async (req, res) => {
  try {
    const maintenance = await Maintenance.findByPk(req.params.id)
    if (!maintenance)
      return res.status(404).json({ message: 'Maintenance not found' })
    return res.status(200).json(maintenance)
  } catch (error) {
    return res.status(404).json({ message: error.message })
  }
}
