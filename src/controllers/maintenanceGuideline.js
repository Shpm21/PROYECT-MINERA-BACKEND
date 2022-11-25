import MaintenanceGuideline from '../models/maintenanceGuideline'

export const addMaintenanceGuideline = async (req, res) => {
  try {
    const maintenanceGuideline = await MaintenanceGuideline.create(req.body)
    return res.status(200).json(maintenanceGuideline)
  } catch (error) {
    return res.status(404).json({ message: error.message })
  }
}

export const getMaintenanceGuidelines = async (req, res) => {
  try {
    const maintenanceGuidelines = await MaintenanceGuideline.findAll()
    return res.status(200).json(maintenanceGuidelines)
  } catch (error) {
    return res.status(404).json({ message: error.message })
  }
}

export const getMaintenanceGuideline = async (req, res) => {
  try {
    const maintenanceGuideline = await MaintenanceGuideline.findByPk(
      req.params.id
    )
    if (!maintenanceGuideline)
      return res.status(404).json({ message: 'MaintenanceGuideline not found' })
    return res.status(200).json(maintenanceGuideline)
  } catch (error) {
    return res.status(404).json({ message: error.message })
  }
}

export const deleteMaintenanceGuideline = async (req, res) => {
  try {
    const maintenanceGuideline = await MaintenanceGuideline.findByPk(
      req.params.id
    )
    if (!maintenanceGuideline)
      return res.status(404).json({ message: 'MaintenanceGuideline not found' })
    await maintenanceGuideline.destroy()
    return res.status(200).json({ message: 'MaintenanceGuideline deleted' })
  } catch (error) {
    return res.status(404).json({ message: error.message })
  }
}

export const updateMaintenanceGuideline = async (req, res) => {
  try {
    const maintenanceGuideline = await MaintenanceGuideline.findByPk(
      req.params.id
    )
    if (!maintenanceGuideline)
      return res.status(404).json({ message: 'MaintenanceGuideline not found' })
    await maintenanceGuideline.update(req.body)
    return res.status(200).json(maintenanceGuideline)
  } catch (error) {
    return res.status(404).json({ message: error.message })
  }
}
