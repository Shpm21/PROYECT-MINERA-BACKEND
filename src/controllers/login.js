import User from '../models/user.js'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()

export const login = async (req, res) => {
  try {
    const user = await User.findByPk(req.body.rut)
    if (!user) return res.status(404).json({ message: 'Not valid' })
    const token = jwt.sign({ rut: user.rut }, process.env.JWT_SECRET, {
      expiresIn: '1h'
    })
    const refreshToken = jwt.sign({ rut: user.rut }, process.env.JWT_SECRET, {
      expiresIn: '1d'
    })
    return res.status(200).json({ rut: user.rut, token, refreshToken })
  } catch (error) {
    return res.status(404).json({ message: error.message })
  }
}
