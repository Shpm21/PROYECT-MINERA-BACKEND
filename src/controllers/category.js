import Category from '../models/category.js'

export const addCategory = async (req, res) => {
  try {
    const category = await Category.create(req.body)
    return res.status(200).json(category)
  } catch (error) {
    return res.status(404).json({ message: error.message })
  }
}

export const getCategories = async (req, res) => {
  try {
    const categories = await Category.findAll()
    return res.status(200).json(categories)
  } catch (error) {
    return res.status(404).json({ message: error.message })
  }
}

export const getCategory = async (req, res) => {
  try {
    const category = await Category.findByPk(req.params.id)
    if (!category)
      return res.status(404).json({ message: 'Category not found' })
    return res.status(200).json(category)
  } catch (error) {
    return res.status(404).json({ message: error.message })
  }
}
