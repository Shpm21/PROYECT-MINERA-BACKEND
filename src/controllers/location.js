import Location from '../models/location.js'

export const addLocation = async (req, res) => {
  try {
    const location = await Location.create(req.body)
    return res.status(200).json(location)
  } catch (error) {
    return res.status(404).json({ message: error.message })
  }
}

export const getLocations = async (req, res) => {
  try {
    const locations = await Location.findAll()
    return res.status(200).json(locations)
  } catch (error) {
    return res.status(404).json({ message: error.message })
  }
}

export const getLocation = async (req, res) => {
  try {
    const location = await Location.findByPk(req.params.id)
    if (!location)
      return res.status(404).json({ message: 'Location not found' })
    return res.status(200).json(location)
  } catch (error) {
    return res.status(404).json({ message: error.message })
  }
}
