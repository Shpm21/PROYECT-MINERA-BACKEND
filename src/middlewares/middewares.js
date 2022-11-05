import dotenv from 'dotenv'
dotenv.config()

const isRutValid = (rut) => {
  return rut.search('.') != -1 || rut.search('-') != -1
}

export const validateToken = (req, res, next) => {
  try {
    const authorization = req.get('authorization')
    if (!authorization)
      return res.status(401).json({ message: 'No token provided' })
    const token =
      authorization.split(' ').length == 2 ? authorization.split(' ')[1] : null
    if (!token) return res.status(401).json({ message: 'No token provided' })
    next()
  } catch (error) {
    return res.status(401).json({ message: error.message })
  }
}

export const validateRut = (req, res, next) => {
  try {
    const { rut } = req.body
    if (!rut) return res.status(400).json({ message: 'Rut is required' })
    if (!isRutValid(rut))
      return res.status(400).json({ message: 'Rut is not valid' })
    next()
  } catch (error) {
    return res.status(400).json({ message: error.message })
  }
}
