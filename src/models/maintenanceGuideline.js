import sequelize from '../services/DbServices.js'
import { DataTypes } from 'sequelize'

const MaintenanceGuideline = sequelize.define(
  'maintenance_guideline',
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
    frequency: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  },
  {
    timestamps: false,
    freezeTableName: true
  }
)

export default MaintenanceGuideline
