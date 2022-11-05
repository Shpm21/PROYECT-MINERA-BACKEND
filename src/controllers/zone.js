import Zone from '../models/zone.js'

export const addZone = async (req, res) => {
  try {
    const zone = await Zone.create(req.body)
    return res.status(200).json(zone)
  } catch (error) {
    return res.status(404).json({ message: error.message })
  }
}

export const getZones = async (req, res) => {
  try {
    const zones = await Zone.findAll()
    return res.status(200).json(zones)
  } catch (error) {
    return res.status(404).json({ message: error.message })
  }
}

export const getZone = async (req, res) => {
  try {
    const zone = await Zone.findByPk(req.params.id)
    if (!zone) return res.status(404).json({ message: 'Zone not found' })
    return res.status(200).json(zone)
  } catch (error) {
    return res.status(404).json({ message: error.message })
  }
}
