import sequelize from '../services/DbServices.js'
import { DataTypes } from 'sequelize'

const Category = sequelize.define(
  'category',
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    id_maintenance_g: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  },
  {
    timestamps: false,
    freezeTableName: true
  }
)

export default Category
