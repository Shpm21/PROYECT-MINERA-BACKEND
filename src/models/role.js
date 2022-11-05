import sequelize from '../services/DbServices.js'
import { DataTypes } from 'sequelize'

const Role = sequelize.define(
  'role',
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    timestamps: false,
    freezeTableName: true
  }
)

export default Role
